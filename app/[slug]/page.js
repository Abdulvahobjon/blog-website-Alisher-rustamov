"use client";
import { useState } from "react";
import Footer from "../components/footer/page";
import Link from "next/link";
import Header from "../components/header/page";
import data from "../data";

export default function page({ params }) {
  function shuffleArray(array) {
    return array.sort(function() {
      return 0.5 - Math.random();
    });
  }
  const shuffledArray = shuffleArray(data);
  const currentPostsTop = shuffledArray.slice(0, 4);
  return (
    <div>
      <div className="bg-blog-orange relative">
        <Header />
      </div>
      <main className="block pt-14 pb-14">
        {/* <!-- maqolalar start --> */}
        <div className="max-w-[1432px] w-full px-4 mx-auto">
          <section className="max-w-[650px] w-full mb-12">
            <Link
              href="/articles"
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

            <div>
              <h2 className="font-extrabold text-32 mb-5">
                {data[params.slug].title}
              </h2>
              <img
                className="w-full block max-h-56  sm:max-h-80 mb-5 object-cover rounded-30"
                src={data[params.slug].img}
                alt=""
              />
              <div className="text-17">{data[params.slug].dec}</div>
            </div>
          </section>

          <section className="max-w-[1052px] w-full">
            <h2 className="font-extrabold text-2xl mb-5">Foydali Maqolalar</h2>
            <hr className="border-none h-px bg-[#D2D2D2] w-full" />
            {/* <!-- desctop cards start --> */}
            <div className="">
              <div
                id="blog-card-top"
                className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6"
              >
                {currentPostsTop.map((item) => {
                  return (
                    <Link key={item.id}
                      href={`/${item.id-1}`}
                      className="block sm:flex lg:block group items-start justify-between gap-9 lg:hover:shadow-card-shadow rounded-30 transition-all ease-linear  lg:py-5 lg:px-6"
                    >
                      <img
                        className="sm:order-last sm:max-w-[200px] lg:max-w-full w-full lg:w-full sm:h-32 h-[169px]  lg:h-[297px] object-cover lg:mb-5 sm:mb-0 mb-5 rounded-20"
                        src={item.img}
                        alt="blog item img"
                      />
                      <div className="">
                        <h3 className="font-extrabold sm:text-xl text-base sm:line-clamp-2 line-clamp-4 lg:mb-2.5 mb-5 transition-all ease-linear group-hover:text-blog-orange">
                          {item.id}{item.title}
                        </h3>
                        <div className="lg:block hidden mb-2.5">
                          <p className="text-17 line-clamp-3">{item.dec}</p>
                        </div>
                        <time className="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10">
                          {item.time}
                        </time>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
