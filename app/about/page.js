import React from "react";
import Header from "../components/header/page";
import Footer from "../components/footer/page";

export default function About() {
  return (
    <div>
      <div className="bg-blog-orange relative">
        <Header />
      </div>

      {/* main start */}
      <main className="block pt-14 pb-14">
        {/* <!-- maqolalar start --> */}
        <div className="max-w-[1432px] w-full px-4 mx-auto">
          <section className="max-w-[980px] w-full mb-12 ">
            <div className="max-w-[830px] w-full flex flex-col sm:flex-row gap-7 items-center sm:items-start mb-8">
              <img
                className="max-w-55 w-full rounded-30 "
                src="./img/men-haqimda/alisher.jpg"
                alt="shaxsiy rasm"
              />
              <div className="text-center sm:text-left">
                <h2 className="font-black text-2xl sm:text-32 mb-2.5">
                  16 yillik servis bo‘yicha mutaxassis - Alisher Rustamov
                </h2>
                <p className="sm:text-2xl text-15 sm:leading-9">
                  Servis, savdo-sotiq va riteyl menejment sohasida Buyuk
                  Britaniya, Yaqin Sharq va Janubiy Afrika mintaqalarida Giorgio
                  Armani, Jimmy Choo, Alfred Dunhill LTD kabi kompaniyalarda
                  xalqaro tajribaga ega.
                </p>
              </div>
            </div>
            <div className="text-17">
              <p>
                2005-yil ilk foliyatni oddiy sotuvchi rolida Armani Group do‘kon
                tarmoqlaridan boshlab, 2008-yil region miqyosidagi vitrinalar
                bo‘yicha mutaxassis lavozimigacha ko‘tarilishga omadim kulib
                boqdi. Ijodiy va tijoriy yondashuv birlashganda natija sari yo‘l
                olish osonlashadi. Brend ostidagi barcha do‘konlarning ichki va
                ustki ko‘rinishiga kompaniyaning standartlari asosida ishlov
                berib, shuningdek maxsulotlarni sotishni ham o‘rgatish mening
                zimmamga tushgandi. Ajoyib insonlatni uchratdim va halqaro
                tajribaga ega bo‘lishni boshladim.
              </p>{" "}
              <br />
              <p>
                2010–2013 Bloomingdale's, AQSH-ning eng katta do‘konlar
                tarmog‘idan birida erkaklar kiyim-kechak bo‘limi boshqaruvchisi,
                keyin esa Jimmy Choo va Coach butik rahbari lavozimigacha hizmat
                qildim. Eng katta yutug‘imiz bu 25% doimiy mijoz vs 75% turist
                mijozlar koeffisiyentlarini 2 yil ichida 75% doimiy mijoz, 25%
                turist natijasiga olib chiqdik.
              </p>{" "}
              <br />
              <p>
                2013–2018 Eng sarguzashtlarga boy davrim keldi, Richemont
                kompaniyasi riteyl operasiyalar bo‘yicha rahbar rolida ishga
                taklif etdi. Bu kompaniya xashamatli maxsulotlar savdosida top
                beshtalikka kiradi. Uning tarkibida Alfred Dunhill LTD, Cartier,
                Chloe, Piaget, IWC kabi brendlar mavjud. U davrlar kompaniya
                Yaqin Sharq, Afrika mintaqasida kengayish arafasida edi, yangi
                jamoa bilan oldinga qo‘yilgan maqsadlarni 4,5 yil ichida amalga
                oshirdik. Natijada sakkizta yangi savdo maydoni tashkil etildi.
              </p>{" "}
              <br />
              <p>
                2018-Yil O‘zbekistonda iqtisodiy va ijtimoiy o‘zgarishlar jadal
                ko‘zga ko‘rina boshladi, aynan shuning uchun biznes-konsalting
                hizmatlariga talab oshdi va bozorda bo‘shliqni to‘ldirish
                maqsadida yurtimizga qaytishga eng to‘g‘ri vaqtligi ayon bo‘ldi.
                Birinchi ishlagan kompaniyalarimizdan biri bu texnomart*,
                ikkinchi mijozimiz, Respect Business, keyin Hayat Clinics,
                Indenim, Mediapark. Bu kompaniyalar xamkor yoki mijoz emas,
                balki biz uchun bozorning muayyan yo‘nalishini egallashda o‘z
                hissasini qo‘shgan do‘stlarimizdir.
              </p>
              <br />
              <b className="font-extrabold text-xl ">
                Hozirgi davrda servis, savdo-sotiq va menejment bo‘yicha
                konsalting eng nufuzli kompaniyalar uchun olib borilyapti.
              </b>
            </div>
          </section>

          <section className="max-w-6xl  mb-16">
            <h3 className="font-extrabold sm:text-32 text-2xl text-center sm:text-left mb-5">
              Faoliyat olib borgan joylari:
            </h3>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
              <div className="rounded-30 bg-blog-grey max-w-[280px] sm:max-w-none mx-auto py-11 px-8">
                <img
                  className="max-w-full"
                  src="./img/work/texno.png"
                  alt="alfred img logo"
                />
              </div>
              <div className="rounded-30 bg-blog-grey max-w-[280px] sm:max-w-none mx-auto py-11 px-8">
                <img
                  className="max-w-full"
                  src="./img/work/jimmy.png"
                  alt="alfred img logo"
                />
              </div>
              <div className="rounded-30 bg-blog-grey max-w-[280px] sm:max-w-none mx-auto py-11 px-8">
                <img
                  className="max-w-full"
                  src="./img/work/armani.png"
                  alt="alfred img logo"
                />
              </div>
              <div className="rounded-30 bg-blog-grey max-w-[280px] sm:max-w-none mx-auto py-11 px-8">
                <img
                  className="max-w-full"
                  src="./img/work/alfred1.png"
                  alt="alfred img logo"
                />
              </div>
            </div>
          </section>

          <section className="max-w-6xl">
            <h3 className="font-extrabold text-32 mb-5">
              Mijozlar va hamkorlar:
            </h3>
            <div className="flex flex-wrap flex-col items-center sm:items-start sm:flex-row gap-x-14 gap-y-6">
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/2.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/2.png"
                  alt="mijozlar img"
                />
              </div>

              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/2.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/2.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/2.png"
                  alt="mijozlar img"
                />
              </div>

              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/3.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/3.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/3.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/3.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/3.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/4.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/4.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/4.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/4.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/4.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/1.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/1.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/1.png"
                  alt="mijozlar img"
                />
              </div>
              <div>
                <img
                  className="max-w-full max-h-36"
                  src="./img/mijozlar/1.png"
                  alt="mijozlar img"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
