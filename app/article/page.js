import React from "react";
import Footer from "../components/footer/page";
import Link from "next/link";
import Header from "../components/header/page";

export default function Article() {
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

            <div>
              <h2 className="font-extrabold text-32 mb-5">
                Men bu ishni qilmayman!
              </h2>
              <img
                className="w-full block max-h-56  sm:max-h-80 mb-5 object-cover rounded-30"
                src="./img/men-haqimda/Rectangle 16.jpg"
                alt=""
              />
              <div className="text-17">
                <p>
                  {" "}
                  Xodimlar biron ishni qilishdan to‘g‘ridan-to‘g‘ri yoki
                  bilvosita bosh tortadigan vaqtlar bo‘lib turadi boshqaruv
                  jarayonida. Qarshilikning qator sabablari bor.
                </p>
                <br />
                <p>
                  Bunday vaziyatlarda ta’sir o‘tkazish uchun ikkita usul bor
                  suhbat davomida:
                </p>
                <br />
                <b>1) Fakt + Vazifa + Tahdid.</b>
                <p>
                  Masalan, savdo 20% tushib ketdi o‘tgan oyga qapaganda, chunki
                  raqobatchilar dam olib yotmayapti - bu fakt.
                </p>
                <br />
                <p>
                  Vazifani SMART tizimida bering. Tahdid esa bu hozirgi holatni
                  o‘zgartirmasa nimalarga olib kelishi.
                </p>
                <b>2) Fakt + Hissiyot</b>
                <p>
                  Masalan, boshim qotib qoldi savdo natijalari 20 % kamligidan.
                </p>
                <br />
                <p>
                  Ertangi kundan qo‘rqyapman, shuncha ishchilardan
                  havotirdaman...
                </p>
                <br />
                <p>
                  Biroq, bu faqt vaqtinchalik choralar. Xodimlarni sizga
                  yechimlar bilan kelishga o‘rgatish yaxshiroqdir va bunin uchun
                  siz ularning rivojlanishiga sarmoya kiritishirgiz kerakdir.
                </p>
              </div>
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
                <a
                  href="#"
                  className="block sm:flex lg:block group items-start justify-between gap-9 lg:hover:shadow-card-shadow rounded-30 transition-all ease-linear  lg:py-5 lg:px-6"
                >
                  <img
                    className="sm:order-last sm:max-w-[200px] lg:max-w-full w-full lg:w-full sm:h-32 h-[169px]  lg:h-[297px] object-cover lg:mb-5 sm:mb-0 mb-5 rounded-20"
                    src="./img/blog-item/blog-item-1.png"
                    alt="blog item img"
                  />
                  <div className="">
                    <h3 className="font-extrabold sm:text-xl text-base sm:line-clamp-2 line-clamp-4 lg:mb-2.5 mb-5 transition-all ease-linear group-hover:text-blog-orange">
                      Portugal and I are very much in Love - is here are 5
                      reasons why? What is
                    </h3>
                    <div className="lg:block hidden mb-2.5">
                      <p className="text-17 line-clamp-3">
                        Lekin men etib bergan hikoyalar ko‘pincha tasirli
                        bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.
                        Lorem, ipsum dolor.
                      </p>
                    </div>
                    <time className="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10">
                      13.08.2022
                    </time>
                  </div>
                </a>

                <a
                  href="#"
                  className="block sm:flex lg:block group items-start justify-between gap-9 lg:hover:shadow-card-shadow rounded-30 transition-all ease-linear  lg:py-5 lg:px-6"
                >
                  <img
                    className="sm:order-last sm:max-w-[200px] lg:max-w-full w-full lg:w-full sm:h-32 h-[169px] lg:h-[297px] object-cover lg:mb-5 sm:mb-0 mb-5 rounded-20"
                    src="./img/blog-item/blog-item-2.png"
                    alt="blog item img"
                  />
                  <div className="">
                    <h3 className="font-extrabold sm:text-xl text-base sm:line-clamp-2 line-clamp-4 lg:mb-2.5 mb-5 transition-all ease-linear group-hover:text-blog-orange">
                      Portugal and I are very much in Love - is here are 5
                      reasons why? What is
                    </h3>
                    <div className="lg:block hidden mb-2.5">
                      <p className="text-17 line-clamp-3">
                        Lekin men etib bergan hikoyalar ko‘pincha tasirli
                        bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.
                        Lorem, ipsum dolor.
                      </p>
                    </div>
                    <time className="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10">
                      13.08.2022
                    </time>
                  </div>
                </a>
                <a
                  href="#"
                  className="block sm:flex lg:block group items-start justify-between gap-9 lg:hover:shadow-card-shadow rounded-30 transition-all ease-linear  lg:py-5 lg:px-6"
                >
                  <img
                    className="sm:order-last sm:max-w-[200px] lg:max-w-full w-full lg:w-full sm:h-32  h-[169px] lg:h-[297px] object-cover lg:mb-5 sm:mb-0 mb-5 rounded-20"
                    src="./img/blog-item/blog-item-3.png"
                    alt="blog item img"
                  />
                  <div className="">
                    <h3 className="font-extrabold sm:text-xl text-base sm:line-clamp-2 line-clamp-4 lg:mb-2.5 mb-5 transition-all ease-linear group-hover:text-blog-orange">
                      Portugal and I are very much in Love - is here are 5
                      reasons why? What is
                    </h3>
                    <div className="lg:block hidden mb-2.5">
                      <p className="text-17 line-clamp-3">
                        Lekin men etib bergan hikoyalar ko‘pincha tasirli
                        bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.
                        Lorem, ipsum dolor.
                      </p>
                    </div>
                    <time className="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10">
                      13.08.2022
                    </time>
                  </div>
                </a>
                <a
                  href="#"
                  className="block sm:flex lg:block group items-start justify-between gap-9 lg:hover:shadow-card-shadow rounded-30 transition-all ease-linear  lg:py-5 lg:px-6"
                >
                  <img
                    className="sm:order-last sm:max-w-[200px] lg:max-w-full w-full lg:w-full sm:h-32  h-[169px] lg:h-[297px] object-cover lg:mb-5 sm:mb-0 mb-5 rounded-20"
                    src="./img/blog-item/blog-md-item-4.png"
                    alt="blog item img"
                  />
                  <div className="">
                    <h3 className="font-extrabold sm:text-xl text-base sm:line-clamp-2 line-clamp-4 lg:mb-2.5 mb-5 transition-all ease-linear group-hover:text-blog-orange">
                      Portugal and I are very much in Love - is here are 5
                      reasons why? What is
                    </h3>
                    <div className="lg:block hidden mb-2.5">
                      <p className="text-17 line-clamp-3">
                        Lekin men etib bergan hikoyalar ko‘pincha tasirli
                        bo‘lmaydi, negadir. Hikoya so‘zlash ham bir san’at ekan.
                        Lorem, ipsum dolor.
                      </p>
                    </div>
                    <time className="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10">
                      13.08.2022
                    </time>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
