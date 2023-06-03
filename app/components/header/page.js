"use client";
import Link from "next/link";
import React, { useState } from "react";
import Leng from "../leng/page";

export default function Header({}) {
  const [selected, setSelected] = useState("");
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="md:pt-18 sm:pt-7 pb-5 md:pb-18 sm:pb-7 pt-5 relative z-10">
      <div className="max-w-[1432px] flex items-center px-4 mx-auto">
        <Link href="/" className="flex w-34 mr-8 md:mr-14">
          <img
            className="w-full"
            src="./img/header/header-logo.svg"
            alt="header logo"
          />
        </Link>
        <nav className="mr-auto hidden sm:block">
          <ul className="flex gap-5">
            <li>
              <Link className="text-17" href="/articles">
                Maqolalar
              </Link>
            </li>
            <li>
              <Link className="text-17" href="/asasd">
                Ijtimoiy tarmoqlar
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden sm:block">
          <Leng selected={selected} setSelected={setSelected} />
        </div>
        <a
          className="hidden md:inline-block font-bold text-sm leading-5 bg-black text-white rounded-10 hover:bg-white hover:text-black transition-all px-5 py-3 ml-8"
          href="#"
        >
          Xabar qoldirish
        </a>
        <button
          onClick={() => setIsMenu(!isMenu)}
          className="block sm:hidden ml-auto cursor-pointer p-3 rounded-10 bg-white"
        >
          <img src="./img/header/humburger.svg" alt="humburger menu" />
        </button>
      </div>
      {isMenu && (
        <div className="sm:hidden block fixed !z-50 top-0 left-0 right-0 bg-white w-full h-screen pt-32">
          <button
            onClick={() => setIsMenu(false)}
            className="w-12 h-10 flex items-center justify-center bg-blog-orange rounded-10 absolute top-5 right-5 "
          >
            <img src="./img/header/Cross.svg" alt="close" />
          </button>
          <div className="flex flex-col items-center">
            <Link
              href="/articles"
              className="py-3 px-5 bg-[#F6F7F8] font-semibold text-2xl leading-9 text-black rounded-20 mb-12 hover:bg-blog-orange transition-all"
            >
              Maqolalar
            </Link>
            <Link
              href="#"
              className="py-3 px-5 bg-[#F6F7F8] font-semibold text-2xl leading-9 text-black rounded-20 mb-10 hover:bg-blog-orange transition-all"
            >
              Ijtimoiy tarmoqlar
            </Link>
            <div className="">
              <Leng selected={selected} setSelected={setSelected} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
