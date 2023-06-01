// It seems like you want to add the classes “bg-black” and “text-white” to the clicked item in your React pagination component. You can achieve this by adding a state variable to keep track of the currently selected page and conditionally apply the classes based on that state. Here’s an example:
"use client";
import { useState } from 'react'

export default function Pagination({postsPrePage , totalPosts , paginate}) {
  const [selectedPage, setSelectedPage] = useState(1);
  const pageNumber = []
  for(let i = 1; i <= Math.ceil(totalPosts / postsPrePage); i++){
    pageNumber.push(i)
  }
  return (
    <div>
      <ul className='inline-flex gap-1 border rounded-10 p-1'>
        {pageNumber.map(item=>{
          return <li key={item.id}>
            <a  onClick={() => {
              paginate(item);
              setSelectedPage(item);
            }} className={`w-14 h-14 rounded-10 font-semibold flex items-center justify-center ${item === selectedPage ? 'bg-black text-white' : ''}`} href="#">
              {item}
            </a>
          </li>
        })}
      </ul>
    </div>
  )
}