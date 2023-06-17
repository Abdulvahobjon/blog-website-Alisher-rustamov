"use client";

async function getData() {
  const res = await fetch('http://alisherrustamovblog.pythonanywhere.com/docs/?format=openapi')
  if (!res.ok) {
    throw new Error('error')
  }
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
  console.log('hi');
  return <main>
     hi salom dunyio
     {console.log(data)}
  </main>
}