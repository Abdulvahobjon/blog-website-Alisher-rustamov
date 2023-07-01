import React from "react";
import { headers } from "next/headers";

async function getData() {
  const headersInstance = headers();
  const authorization = headersInstance.get(
    "xWnvZDK5GO6FLlB8dBMKyQrcOWJws9GPl16s3gf0PnbFYIphYKgMaXejquOQymbU"
  );
  const res = await fetch(
    "http://alisherrustamovblog.pythonanywhere.com/hamkorlar/",
    {
      headers: { authorization },
    }
  );

  return res.json();
}

export default async function peach() {
  const data = await getData();
  console.log(data);

  return (
    <section className="max-w-6xl">
      <h3 className="font-extrabold text-32 mb-5">Mijozlar va hamkorlar:</h3>
      <div className="flex flex-wrap flex-col items-center sm:items-start sm:flex-row gap-x-14 gap-y-6">
        {data.map((item, index) => (
          <div>
            <img
              className="max-w-full max-h-36"
              src={`https://alisherrustamovblog.pythonanywhere.com/${item.rasm}`}
              alt="mijozlar img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
