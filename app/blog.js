import Link from 'next/link'

function BlogList({ blogs }) {
  return (
    <ul>
      {blogs.map(blog => (
        <li key={blog.id}>
          <Link href={`/components/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default BlogList