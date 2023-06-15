import React from 'react'
async function getDataFrom(){
  const response  = await fetch("http://alisherrustamovblog.pythonanywhere.com/docs/?format=openapi")
  return response.json()
}

 export default async function dataApi() {
  const todos = await getDataFrom()
  return (
    <div>
        <ul>
          {todos.map(item=>{
            return <li>
              {item}
            </li>
          })}
        </ul>
    </div>
  )
}
