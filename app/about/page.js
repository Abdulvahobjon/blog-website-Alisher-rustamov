
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import { headers } from "next/headers";
import Link from "next/link";
import Hamkorlar from "../components/hamkorlar/peach";
import Faoliyatlar from "../components/faoliyatlar/peach";

async function getData() {
  const headersInstance = headers();
  const authorization = headersInstance.get(
    "xWnvZDK5GO6FLlB8dBMKyQrcOWJws9GPl16s3gf0PnbFYIphYKgMaXejquOQymbU"
  );
  const res = await fetch(
    "http://alisherrustamovblog.pythonanywhere.com/haqida/",
    {
      headers: { authorization },
    }
  );

  return res.json();
}

export default async function About() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <div className="bg-blog-orange relative">
        <Header />
      </div>

      {/* main start */}
      <main className="block pt-14 pb-14">
        {/* <!-- maqolalar start --> */}
        <div className="max-w-[1432px] w-full px-4 mx-auto">
          <Link
            href="/"
            className="inline-flex transition-all items-center gap-2.5 hover:text-blog-orange text-17 mb-8 "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 21L8.11025 14.2083C7.29658 13.4062 7.29658 12.0937 8.11025 11.2917L15 4.5"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Orqaga
          </Link>
          <section className="max-w-[980px] w-full mb-12 ">
            <div className="max-w-[830px] w-full flex flex-col sm:flex-row gap-7 items-center sm:items-start mb-8">
              {data.map((item, index) => (
                <>
                  <img
                    className="max-w-55 w-full rounded-30 "
                    src={item.rasm}
                    alt="shaxsiy rasm"
                  />
                </>
              ))}
              <div className="text-center sm:text-left">
                {data.map((item, index) => (
                  <>
                    <h2 className="font-black text-2xl sm:text-32 mb-2.5">
                      {item.sarlavha}
                    </h2>
                    <p className="sm:text-2xl text-15 sm:leading-9">
                      {item.matn}
                    </p>
                  </>
                ))}
              </div>
            </div>
            <div className="text-17">
              {data.map((item, index) => (
                <>{item.matn}</>
              ))}
            </div>
          </section>
          <Faoliyatlar />
          <Hamkorlar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
