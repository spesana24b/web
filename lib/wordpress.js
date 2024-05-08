require("dotenv").config()
const axios = require("axios")
const cheerio = require("cheerio")
const { NodeHtmlMarkdown } = require('node-html-markdown')

const hosting = process.env.WORDPRESS_HOST

const checkAndRemoveSpaces = (text) => {
  let txt = ""
  for(let a of text.split("\n")) {
    if(!!a.trim()) {
      txt += a.trim()+"\n"
    }
  }
  return txt.trim()
}

const sleepTime = (time) => {
  return new Promise((res) => {
    setTimeout(res, time)
  })
}

async function GetListPost(catagory) {
  try {
    const urls = typeof catagory != 'string'? hosting : `${hosting}/category/${catagory}`
    const fetching = await axios.get(urls)
    const $ = cheerio.load(fetching.data)
    let postList = []

    $("main ul li").each((i, el) => {
      let listCatagory = []
      $("a", el).each((i, el) => {
        if($(el).attr("rel") === "tag") {
          listCatagory.push({
            label: $(el).text().trim(),
            slug: $(el).text().trim().toLowerCase().replaceAll(" ","-")
          })
        }
      })
      const dataView = {
        title: $("h3 a", el).text().trim(),
        image: $("figure img", el).attr("src"),
        time: new Date($("time").attr("datetime")),
        category: listCatagory,
        description: $("p", el).eq(0).text().trim(),
        slug: $("a", el).eq(0).attr("href").split("/")[6],
        post: $("a", el).eq(0).attr("href").trim(),
      }
      postList.push(dataView)
    })
    return {
      status: 200,
      data: postList
    }
  } catch(err) {
    if(err.response) {
      return {
        status: 404,
        message: "Not Found"
      }
    }
    console.log(err)
    return {
      status: 500,
      message: "Internal Server Error"
    }
  }
}

async function GetPostView(slug) {
  try {
    const getList = await GetListPost()
    if(getList.status != 200) {
      return getList
    }
    const schURL = getList.data[getList.data.map(a => a.slug).indexOf(slug)]
    if(!schURL) {
      return {
        status: 404,
        message: "Not Found"
      }
    }
    const fetching = await axios.get(schURL.post)
    const $ = cheerio.load(fetching.data)
    $("#jp-post-flair").remove()
    const dataView = {
      title: $("main h1").eq(0).text().trim(),
      image: $("main .wp-block-post-featured-image img").attr("src"),
      time:  schURL.time,
      category: schURL.category,
      slug: schURL.slug,
      content: NodeHtmlMarkdown.translate(checkAndRemoveSpaces($("main .wp-block-post-content").html()))
    }
    // await sleepTime(1000*9)
    return {
      status: 200,
      data: dataView
    }
  } catch(err) {
    console.log(err)
    return {
      status: 500,
      message: "Internal Server Error"
    }
  }
}

module.exports = {
  GetListPost,
  GetPostView
}