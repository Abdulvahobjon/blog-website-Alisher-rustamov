import React from 'react'
// import { headers } from "next/headers";
import getData from '../maindata'
 async function page() {
  const data = await getData();
  return (
    <div>page
        {data.map((item, index) => (
                <>
                  <img
                    className="max-w-55 w-full rounded-30 "
                    src={item.rasm}
                    alt="shaxsiy rasm"
                  />
                </>
              ))}
    </div>
  )
}
