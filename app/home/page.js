import Link from "next/link";
import Card from "../components/card/page";
import FooterFull from "../components/footerFull/page";
import Header from "../components/header/page";


export default function Home() {

  const blogTopCard = [
    {
      img:""
    }
  ]

  return (
    <div>
      <div className="bg-blog-orange relative">
        <div className="absolute left-[calc(50%-240px)]  top-0 h-full hidden md:flex">
          <img
            className="h-full object-cover"
            src="./img/header/hero-img.jpg"
            alt="hero img "
          />
        </div>
        <div className="absolute right-0  top-0 h-full hidden sm:flex md:hidden">
          <img
            className="h-full object-cover "
            src="./img/header/mobile-bg-hero.png"
            alt="hero img "
          />
        </div>
        <div className="absolute right-0  top-0 h-full sm:hidden flex">
          <img
            className="h-full object-cover "
            src="./img/header/hero-bg-sm.png"
            alt="hero img "
          />
        </div>

       <Header/>
        {/* <!-- header end --> */}

        {/* <!-- hero section start --> */}
        <section className="md:pt-28 pt-22 md:pb-48 pb-36">
          <div className="max-w-[1432px] px-4 mx-auto relative z-10">
            <h1 className="font-bold text-40 md:text-77 sm:text-50 uppercase max-w-34 sm:max-w-md mb-5">
              Alisher Rustamov
            </h1>
            <p className="text-15 sm:text-17 max-w-55 md:max-w-72 mb-30">
              Malevich Consulting asoschilardan biri va 16 yillik SERVIS
              bo‘yicha mutaxassis
            </p>
            <Link
              href="/about"
              className="font-extrabold text-lg leading-6 text-white bg-black rounded-10 inline-block hover:bg-white hover:text-black transition-all p-5"
            >
              Men haqimda
            </Link>
          </div>
        </section>
        {/* <!-- header and hero end --> */}
      </div>
      {/* <!-- header and hero end--> */}

      <main className="block pt-14 pb-14">
        <div className="max-w-[1432px] w-full px-4 flex justify-between mx-auto">
          <section className="max-w-[1052px] w-full">
            {/* <!-- desctop cards start --> */}
            <div className="mb-12">
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

            {/* <!-- Website video start --> */}
            <div className="w-full h-52 sm:h-[352px] md:h-[473px] rounded-2xl sm:rounded-[40px] overflow-hidden mb-8">
              <iframe
                className="w-full h-full object-cover "
                src="https://www.youtube.com/embed/JTkwjLsVs3o"
                rel="0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            {/* <!-- Blog card bootom start --> */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>

          <section className="max-w-55 w-full lg:block hidden pt-5">
            <div>
              <h2 className="font-extrabold text-xl leading-6 mb-5">
                Mashhur maqolalar
              </h2>
              <ul className="flex flex-col gap-2.5">
                <li className="group">
                  <a className="block" href="#">
                    <h3 className="text-17 mb-2.5 group-hover:text-blog-orange transition-all ease-linear">
                      Boy-otaning xayotidan...
                    </h3>
                    <time className="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10 mb-2.5">
                      13.08.2022
                    </time>
                    <hr className="border-none h-px bg-[#D2D2D2] w-[180px]" />
                  </a>
                </li>
                <li className="group">
                  <a className="block" href="#">
                    <h3 className="text-17 mb-2.5 group-hover:text-blog-orange transition-all ease-linear">
                      Hech kim velosiped minib tug‘ilmagan.
                    </h3>
                    <time className="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10 mb-2.5">
                      13.08.2022
                    </time>
                    <hr className="border-none h-px bg-[#D2D2D2] w-[180px]" />
                  </a>
                </li>
                <li className="group">
                  <a className="block" href="#">
                    <h3 className="text-17 mb-2.5 group-hover:text-blog-orange transition-all ease-linear">
                      Talabalik davrida ishlash yomonmi?
                    </h3>
                    <time className="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10 mb-2.5">
                      13.08.2022
                    </time>
                    <hr className="border-none h-px bg-[#D2D2D2] w-[180px]" />
                  </a>
                </li>
                <li className="group">
                  <a className="block" href="#">
                    <h3 className="text-17 mb-2.5 group-hover:text-blog-orange transition-all ease-linear">
                      Sizda qaysi kuchli resursingiz bor?
                    </h3>
                    <time className="inline-block py-4 px-2.5 font-medium text-13 bg-blog-grey rounded-10 mb-2.5">
                      13.08.2022
                    </time>
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-14 pb-72">
              <h3 className="font-extrabold text-xl leading-6 text-center capitalize mb-5">
                Ijtimoiy tarmoqlar
              </h3>
              <ul className="grid sm:grid-cols-1 grid-cols-1  max-w-md px-2 mx-auto gap-2.5 ">
                <li className="">
                  <a
                    href="#"
                    className="w-52 flex justify-center items-center gap-3 font-medium text-lg leading-6 bg-blog-grey rounded-10 hover:bg-blog-orange transition-all py-5 px-2 capitalize"
                  >
                    <img src="./img/social/telegram.svg" alt="telegram" />
                    <span>Facebook</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="w-52 flex justify-center items-center gap-3 font-medium text-lg leading-6 bg-blog-grey rounded-10 hover:bg-blog-orange transition-all py-5 px-2 capitalize"
                  >
                    <img src="./img/social/facebook.svg" alt="facebook" />
                    <span>Telegram</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="w-52 flex justify-center items-center gap-3 font-medium text-lg leading-6 bg-blog-grey rounded-10 hover:bg-blog-orange transition-all py-5 px-2 capitalize"
                  >
                    <img src="./img/social/instagram.svg" alt="instagram" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li className="">
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
            <div></div>
          </section>
        </div>
      </main>

      <FooterFull />
    </div>
  );
}
