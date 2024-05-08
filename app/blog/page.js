import wordpress from "~/lib/wordpress"
import BlogCard from "./BlogCard"

export const revalidate = 0
export default async function PageBlogList(context) {
  const data = await wordpress.GetListPost(context.searchParams.category)
  return <BlogCard data={Array.isArray(data.data)? data.data : []}/>
}