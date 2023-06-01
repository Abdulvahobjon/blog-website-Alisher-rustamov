"use client";
import Link from "next/link";
import Pagination from "../components/pagination/page";
import Posts from "../components/posts/page";
import { useState } from "react";
import BlogList from "../blog";

const { default: Card } = require("../components/card/page");
const { default: Header } = require("../components/header/page");

const { default: Footer } = require("../components/footer/page");
import data from "../data";
export default function page() {
  const [posts, setPosts] = useState(data);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="bg-blog-orange relative">
        <Header />
      </div>
        <BlogList blogs={posts}/>
      <main class="block pt-14 pb-14">
        <div class="max-w-[1432px] w-full px-4 mx-auto">
          <Link
            href="/"
            class="inline-flex transition-all items-center gap-2.5 hover:text-blog-orange text-17 mb-8 "
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

          <h2 class="font-extrabold text-32 mb-5">Maqolalar</h2>
          <section class="max-w-[1052px] w-full">
            {/* <!-- Blog card bootom start --> */}
            <div class="grid sm:grid-cols-1 gap-8 mb-5">
              <Posts posts={currentPosts} loading={loading}></Posts>
            </div>
              <Pagination
                postsPrePage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
              />
          </section>
        </div>
      </main>

      <Footer  />
    </div>
  );
}
