import React from "react";

export default function FooterFull() {
  return (
    <div>
      <footer className="footer">
        <h2 className="hidden">Footer title</h2>
        <div className="hidden md:block bg-[#222222] pt-72 pb-72">
          <div className="flex items-center justify-between max-w-[1432px] mx-auto px-4">
            <div className="max-w-72">
              <h3 className="font-bold text-3xl leading-10 text-white uppercase mb-1">
                Alisher Rustamov
              </h3>
              <p className="text-17 text-white">
                Malevich Consulting asoschilardan biri va 16 yillik SERVIS
                bo‘yicha mutaxassis
              </p>
            </div>
            <div className="max-w-100">
              <h3 className="font-extrabold text-2xl leading-9 text-white uppercase mb-3">
                Xabar qoldirish
              </h3>
              <p className="text-17 text-white mb-5">
                Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni
                bildirish imkoniyatingiz bor!
              </p>
              <form className="flex overflow-hidden">
                <input
                  required
                  className="w-full text-sm leading-5 text-black/50 rounded-l-10 py-4 pl-5 "
                  type="email"
                  placeholder="Email yuboring..."
                />
                <button className="font-extrabold leading-5 bg-blog-orange rounded-r-10 hover:bg-black hover:text-white transition-all  py-4 px-9">
                  Yuborish
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <div className="pt-14 pb-14 bg-blog-grey">
            <div className="max-w-md mx-auto px-4 text-center">
              <h3 className="font-extrabold text-xl capitalize mb-5">
                Xabar qoldirish
              </h3>
              <p className="text-17 mb-5">
                Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni
                bildirish imkoniyatingiz bor!
              </p>
              <form className="flex border border-black rounded-10 overflow-hidden">
                <input
                  className="w-full bg-transparent text-sm leading-5 placeholder:text-black/50 py-4 pl-5"
                  required
                  type="text"
                  placeholder="Xabar qoldirish"
                />
                <button className="font-extrabold bg-black text-white cursor-pointer transition-all hover:bg-blog-orange py-4 px-9">
                  Yuborish
                </button>
              </form>
            </div>
          </div>
          <div className="pt-72 pb-72">
            <h3 className="font-extrabold text-xl leading-6 text-center capitalize mb-5">
              Ijtimoiy tarmoqlar
            </h3>
            <ul className="grid sm:grid-cols-2 grid-cols-1  max-w-md px-2 mx-auto gap-5 ">
              <li className="mx-auto">
                <a
                  href="#"
                  className="w-52 flex justify-center items-center gap-3 font-medium text-lg leading-6 bg-blog-grey rounded-10 hover:bg-blog-orange transition-all py-5 px-2 capitalize"
                >
                  <img src="./img/social/telegram.svg" alt="telegram" />
                  <span>Facebook</span>
                </a>
              </li>
              <li className="mx-auto">
                <a
                  href="#"
                  className="w-52 flex justify-center items-center gap-3 font-medium text-lg leading-6 bg-blog-grey rounded-10 hover:bg-blog-orange transition-all py-5 px-2 capitalize"
                >
                  <img src="./img/social/facebook.svg" alt="facebook" />
                  <span>Telegram</span>
                </a>
              </li>
              <li className="mx-auto">
                <a
                  href="#"
                  className="w-52 flex justify-center items-center gap-3 font-medium text-lg leading-6 bg-blog-grey rounded-10 hover:bg-blog-orange transition-all py-5 px-2 capitalize"
                >
                  <img src="./img/social/instagram.svg" alt="instagram" />
                  <span>Instagram</span>
                </a>
              </li>
              <li className="mx-auto">
                <a
                  href="#"
                  className="w-52 flex justify-center items-center gap-3 font-medium text-lg leading-6 bg-blog-grey rounded-10 hover:bg-blog-orange transition-all py-5 px-2 capitalize"
                >
                  <img src="./img/social/youtube.svg" alt="youtube" />
                  <span>Youtube</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-blog-block-300 pt-24 pb-24">
            <div className="max-w-72 mx-auto px-4 text-white text-center">
              <h3 className="font-bold text-3xl leading-10 mb-2.5 ">
                Alisher Rustamov
              </h3>
              <p className="text-base">
                Malevich Consulting asoschilardan biri va 16 yillik SERVIS
                bo‘yicha mutaxassis
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  );
}
