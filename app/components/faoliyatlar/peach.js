import React from "react";
import { headers } from "next/headers";

async function getData() {
  const headersInstance = headers();
  const authorization = headersInstance.get(
    "xWnvZDK5GO6FLlB8dBMKyQrcOWJws9GPl16s3gf0PnbFYIphYKgMaXejquOQymbU"
  );
  const res = await fetch(
    "http://alisherrustamovblog.pythonanywhere.com/faoliyatlar/",
    {
      headers: { authorization },
    }
  );

  return res.json();
}

export default async function Faoliyatlar() {
  const data = await getData();
  console.log(data);

  return (
    <section className="max-w-6xl  mb-16">
      <h3 className="font-extrabold sm:text-32 text-2xl text-center sm:text-left mb-5">
        Faoliyat olib borgan joylari:
      </h3>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
        {data.map((item, index) => (
          <div className="rounded-30 bg-blog-grey max-w-[280px] sm:max-w-none mx-auto py-11 px-8">
            <img
              className="max-w-full"
              src={`https://alisherrustamovblog.pythonanywhere.com/${item.rasm}`}
              alt="alfred img logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
