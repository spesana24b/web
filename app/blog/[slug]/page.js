import wordpress from "~/lib/wordpress"
import BlogView from "./BlogView"
import { MDXRemote } from 'next-mdx-remote/rsc'

export const revalidate = 0
export default async function BlogSlug({ params }) {
  const data = await wordpress.GetPostView(params.slug)
  return <div>
    <BlogView data={data.data} content={<MDXRemote source={data.data.content} />}/>
    {/* <p>{JSON.stringify(data)}</p> */}
  </div>
}