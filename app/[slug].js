import { useRouter } from 'next/router'

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div>
      <h1>Blog post: {slug}</h1>
      {/* Render blog post content here */}
    </div>
  )
}