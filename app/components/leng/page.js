"use client"

import React, { useState } from "react";

export default function Leng({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = [
    {
      img:'./img/leng/uz.png',
      leng:"O‘zbek"
    },
    {
      img:'./img/leng/ru.png',
      leng:"Русский"
    },
    {
      img:'./img/leng/eng.png',
      leng:"English"
    },
  ]
  return (
    <div className="leng ml-auto relative">
      <div
        className="leng-btn py-1 px-3  w-32  bg-[#F6F7F8] rounded-10  text-black flex items-center justify-between cursor-pointer sellect-none font-semibold leading-9 capitalize gap-2 text-sm"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selected ? selected : "uzbek"}
        <img className="h-2" src="./down.svg" alt="down icon"/>
      </div>
      {isActive && (
        <div className="w-full absolute top-full">
          {options.map((item) => (
            <div
              className="leng-item p-2.5 my-2 cursor-pointer flex items-center gap-2.5 rounded-10 bg-[#F6F7F8] hover:bg-blog-orange font-semibold"
              onClick={(e) => {
                setSelected(item.leng);
                setIsActive(false);
              }}
            >
              <img width="30" src={item.img} alt="leng flag" />
              {item.leng}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
