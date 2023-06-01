// import React from 'react'
// import { useRouter } from 'next/navigation'
// import data from '@/app/data';

// export default function page() {
//   // console.log(data , 'salom ');
//   const router = useRouter()
//   const { id } = router.query
//   console.log(id);
//   const post = data.find(post => post.id === Number(id))

//   if (!post) {
//     return <div>Post not found</div>
//   }

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.dec}</p>
//       <p>{post.time}</p>
//       {/* Render additional post details here */}
//     </div>
//   )
// }
"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const router= useRouter();
  console.log(router);
  return (
    <div>page {slug}</div>
  )
}

export default page
