import React from 'react'
import Card from '../card/page'

export default function Posts({posts , loading}) {
  if(loading){
    return <h2>loading....</h2>
  }
  return (
    <ul className='grid grid-cols-2 sm:grid-cols-1 gap-8'>
      {
        posts && posts.map(item =>{
         return <Card  id={item.id-1} key={item.id-1} img={item.img} title={item.title} text={item.dec} time={item.time}>
         </Card>
        })
      }
    </ul>
  )
}
