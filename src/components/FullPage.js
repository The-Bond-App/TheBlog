// src/components/FullPage.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

import Navigation from './Navigation';
import Hero from './Hero';
import Newsletter from './Newsletter';
import Footer from './Footer';

const SkeletonFirstPost = () => (
  <div className="bg-white overflow-hidden mb-24 animate-pulse">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 aspect-[16/9] md:aspect-[8/7] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200"></div>
      <div className="md:w-1/2 p-9 flex flex-col justify-center">
        <div className="h-16 bg-gray-200 rounded-lg mb-6 w-5/6"></div>
        <div className="space-y-3">
          <div className="h-5 bg-gray-200 rounded w-full"></div>
          <div className="h-5 bg-gray-200 rounded w-full"></div>
          <div className="h-5 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  </div>
);

const SkeletonGridPost = () => (
  <div className="bg-white overflow-hidden animate-pulse">
    <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200"></div>
    <div className="p-9">
      <div className="h-12 bg-gray-200 rounded-lg mb-6 w-4/5"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
      </div>
    </div>
  </div>
);

export default function FullPage({
  initialPosts = [],
  initialPage = 1,
  totalPages = 1,
}) {
  // No useState needed - just use props directly!
  const currentPage = initialPage;
  const pagePosts = initialPosts;
  const firstPost = pagePosts.length > 0 ? pagePosts[0] : null;

  return (
    <main className="bg-[#f2f2f7]/70">
      <Navigation />

      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <Hero />

        <div className="max-w-6xl mx-auto">
          {/* First Post - Full Width */}
          {firstPost ? (
            <Link href={`/blog/${firstPost.slug}`}>
              <motion.article
                className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-500 cursor-pointer mb-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/2 aspect-[16/9] md:aspect-[8/7] overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200">
                    <Image
                      src={firstPost.image}
                      alt={firstPost.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start gap-2">
                      <span className="text-white/95 text-sm font-semibold tracking-wide bg-black/30 backdrop-blur-xl px-4 py-2 rounded-md">
                        # {firstPost.category}
                      </span>
                      <span className="text-white/95 text-sm font-medium flex items-center gap-2 bg-black/30 backdrop-blur-xl px-4 py-2 rounded-md">
                        <Calendar size={14} strokeWidth={2.5} />
                        {firstPost.dateFormatted}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-9 flex flex-col justify-center">
                    <h2 className="font-inter text-6xl md:text-7xl font-extrabold text-[#5a5187] mb-6 leading-tight group-hover:text-slate-700 transition-colors duration-300">
                      {firstPost.title}
                    </h2>
                    <p className="font-lora text-[#464169] text-medium text-xl leading-relaxed line-clamp-4">
                      {firstPost.excerpt}
                    </p>
                  </div>
                </div>
              </motion.article>
            </Link>
          ) : (
            <p className="text-center py-24 text-gray-500">No posts found.</p>
          )}

          {/* Remaining Posts - Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
            {pagePosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <motion.article
                  className="group bg-white rounded-xl overflow-hidden hover:shadow-md transition-all duration-500 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col items-start gap-2">
                      <span className="text-white/95 text-sm font-semibold tracking-wide bg-black/30 backdrop-blur-xl px-4 py-2 rounded-md">
                        # {post.category}
                      </span>
                      <span className="text-white/95 text-sm font-medium flex items-center gap-2 bg-black/30 backdrop-blur-xl px-4 py-2 rounded-md">
                        <Calendar size={14} strokeWidth={2.5} />
                        {post.dateFormatted}
                      </span>
                    </div>
                  </div>

                  <div className="p-9">
                    <h2 className="font-inter text-3xl md:text-5xl font-extrabold text-[#5a5187] mb-6 leading-tight group-hover:text-slate-700 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="font-lora text-[#464169] text-medium text-lg leading-relaxed mb-5 line-clamp-5">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav 
              className="flex justify-center items-center gap-2 mt-16"
              aria-label="Pagination"
            >
              {/* Previous button */}
              {currentPage > 1 ? (
                <Link
                  href={currentPage === 2 ? '/' : `/page/${currentPage - 1}`}
                  className="px-4 py-2 rounded-lg font-medium transition-all bg-white text-[#5a5187] hover:bg-[#5a5187]/10"
                  aria-label="Previous page"
                >
                  ←
                </Link>
              ) : (
                <span className="px-4 py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
                  ←
                </span>
              )}

              {/* Page numbers */}
              {(() => {
                const pages = [];
                let startPage = Math.max(1, currentPage - 1);
                let endPage = Math.min(totalPages, startPage + 3);
                if (endPage - startPage < 3) {
                  startPage = Math.max(1, endPage - 3);
                }
                
                for (let i = startPage; i <= endPage; i++) {
                  pages.push(
                    i === currentPage ? (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-lg bg-[#5a5187] text-white font-medium"
                        aria-current="page"
                      >
                        {i}
                      </span>
                    ) : (
                      <Link
                        key={i}
                        href={i === 1 ? '/' : `/page/${i}`}
                        className="px-4 py-2 rounded-lg bg-white text-[#5a5187] hover:bg-[#5a5187]/10 font-medium transition-all"
                      >
                        {i}
                      </Link>
                    )
                  );
                }
                return pages;
              })()}

              {/* Next button */}
              {currentPage < totalPages ? (
                <Link
                  href={`/page/${currentPage + 1}`}
                  className="px-4 py-2 rounded-lg font-medium transition-all bg-white text-[#5a5187] hover:bg-[#5a5187]/10"
                  aria-label="Next page"
                >
                  →
                </Link>
              ) : (
                <span className="px-4 py-2 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
                  →
                </span>
              )}
            </nav>
          )}
        </div>
      </div>

      <Newsletter />
      <Footer />
    </main>
  );
}