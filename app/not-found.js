"use client";
import Link from "next/link";
export default function NotFound() {

  return (
    <>
      <section class="flex items-center h-full p-16">
        <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div class="max-w-md text-center">
            <h2 class="mb-8 font-extrabold text-9xl">
              <span class="sr-only">Error</span>404
            </h2>
            <p class="text-2xl font-semibold md:text-3xl">
            Kechirasiz, biz bu sahifani topa olmadik.
            </p>
            <p class="mt-4 mb-8">
            Ammo tashvishlanmang, bizning saytimizda siz boshqa ko'plab narsalarni topishingiz mumkin
               bosh sahifa.
            </p>
            <Link
              rel="noopener noreferrer"
              href="/"
              class="px-8 py-3 font-semibold rounded bg-black text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
