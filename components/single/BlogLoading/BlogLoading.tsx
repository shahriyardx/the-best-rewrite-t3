import BlogCardSkeleaton from "components/single/BlogCard/BlogCardSkeleaton"

const BlogLoading = () => {
  return (
    <div className='flex flex-col gap-8'>
      <BlogCardSkeleaton />
      <BlogCardSkeleaton />
      <BlogCardSkeleaton />
      <BlogCardSkeleaton />
      <BlogCardSkeleaton />
    </div>
  )
}

export default BlogLoading