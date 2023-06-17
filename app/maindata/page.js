'use client'
import {use} from "react"

async function getData() {
  const res = await fetch('http://alisherrustamovblog.pythonanywhere.com/docs/?format=openapi')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = use(getData());
  console.log('hello'); 
  return <main>
      {data.map(item =>{
        return <p>
          {item.swagger}
        </p>
      })}
  </main>
}