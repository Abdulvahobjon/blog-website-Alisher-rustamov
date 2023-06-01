import Link from "next/link";
import React from "react";

export default function Card({ img, title, text, time }) {
  return (
    <Link
      href="#"
      class="flex md:gap-2 gap-5 sm:gap-9 flex-col sm:flex-row  justify-between items-start group"
    >
      <div class="max-w-lg">
        <h3 class="font-extrabold text-base  sm:text-xl line-clamp-4 sm:line-clamp-2 group-hover:text-blog-orange transition-all ease-linear md:mb-2.5 mb-5 ">
         {title}
        </h3>
        <div class="md:block hidden">
          <p class="text-17 line-clamp-3 mb-2.5">
           {text}
          </p>
        </div>
        <time class="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10">
         {time}
        </time>
      </div>
      <img
        class="order-first sm:order-none md:max-w-[318px] sm:max-w-[200px] max-w-full w-full md:h-52 sm:h-28 h-[120px] object-cover rounded-20 "
        src={img}
        alt="post thubnail"
      />
    </Link>
  );
}
