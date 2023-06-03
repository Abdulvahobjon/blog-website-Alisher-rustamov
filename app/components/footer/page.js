import React from 'react'

export default function Footer() {
  return (
    // <!-- footer start -->
    <footer className="footer" id='footer'>
      <h2 className="hidden">Footer title</h2>
      <div className="hidden md:block bg-[#222222] pt-72 pb-72">
        <div className="flex items-center justify-between max-w-[1432px] mx-auto px-4">
          <div className="max-w-72">
            <h3 className="font-bold text-3xl leading-10 text-white uppercase mb-1">Alisher Rustamov</h3>
            <p className="text-17 text-white">Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha mutaxassis
            </p>
          </div>
          <div className="max-w-100">
            <h3 className="font-extrabold text-2xl leading-9 text-white uppercase mb-3">Xabar qoldirish</h3>
            <p className="text-17 text-white mb-5">Alisher Rustamovga o‘z fikrlaringiz, munosabatlaringizni bildirish
              imkoniyatingiz bor!</p>
            <form className="flex overflow-hidden">
              <input required className="w-full text-sm leading-5 text-black/50 rounded-l-10 py-4 pl-5 " type="email"
                placeholder="Email yuboring..."/>
              <button
                className="font-extrabold leading-5 bg-blog-orange rounded-r-10 hover:bg-black hover:text-white transition-all  py-4 px-9">Yuborish</button>
            </form>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="bg-blog-block-300 pt-24 pb-24">
          <div className="max-w-72 mx-auto px-4 text-white text-center">
            <h3 className="font-bold text-3xl leading-10 mb-2.5 ">Alisher
              Rustamov</h3>
            <p className="text-base">Malevich Consulting asoschilardan biri va 16 yillik SERVIS bo‘yicha mutaxassis</p>
          </div>
        </div>
      </div>
      <div>
  
      </div>
    </footer>
  )
}
