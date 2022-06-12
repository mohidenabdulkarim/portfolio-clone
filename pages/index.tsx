import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper";

const Home: NextPage = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navItems = [
    {
      title: "Home",
      path: "home",
    },
    {
      title: "Portfolio",
      path: "portfolio",
    },
    {
      title: "Services",
      path: "services",
    },
    {
      title: "About me",
      path: "aboutme",
    },
    {
      title: "Blog",
      path: "blog",
    },
  ];

  useEffect(() => {
    function onScroll() {
      const headerScroll = document.querySelector("header");
      window.scrollY >= 30
        ? headerScroll?.classList.add("active")
        : headerScroll?.classList.remove("active");
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      {/*  ======= Header ====== */}
      {/* <body className=" md:text-[1.6rem]"> */}
      <header className="fixed w-full pt-12 pb-4 bg-bodyBgColor transition-all duration-200 px-7 mx-auto z-50">
        <nav className="flex justify-between items-center customContainer">
          <a href="/" className="mr-10">
            <img src="/images/logo.svg" alt="" className="min-w-[10.2rem]" />
          </a>
          <div
            className={`bg-darkColor absolute h-[100vh] top-0 left-0 w-[25rem] z-50 transition-transform ease-in duration-300 md:sticky  md:w-[initial] md:h-[initial] md:bg-transparent md:transform-none md:transition-none ${
              openMenu ? "translate-x-0" : "translate-x-[-26rem]"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-4">
              {navItems.map((item, idx) => (
                <li
                  key={idx}
                  onClick={() => setOpenMenu(false)}
                  className={`border-b border-b-[rgba(255,255,255,.1)] md:border-0 ${
                    navItems.length - 1 === idx && "border-b-0"
                  }`}
                >
                  <a
                    className=" block text-lightColor p-4 transition-opacity duration-300 hover:opacity-50 focus:opacity-50"
                    href={"#" + item.path}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-6">
            <a
              className="btn btn--text btn--transparent"
              href="mailto:test@test.com"
            >
              Contact me
            </a>
            <button
              type="button"
              onClick={() => setOpenMenu(!openMenu)}
              className="btn btn--action md:hidden"
            >
              <svg
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3333 0.999999L0.999918 1"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.3333 6.83333L0.999916 6.83333"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.3333 12.6667L0.999918 12.6667"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ====== Main ======== */}
      {/* --- Showcase ---- */}
      <main className=" overflow-x-hidden">
        <section id="home" className="customContainer pt-[14.5rem] text-center">
          <div>
            <h1 className="title--main title lg:bg-center showcase__title">
              Hello I'am Chris Paul, a precessional photographer.
            </h1>
            <picture className=" inline-block translate-y-[-3rem] md:translate-y-[-5rem] lg:translate-y-[-8rem] ">
              <source
                media="(min-width: 768px)"
                srcSet="/images/showcase_image_lg.png"
              />
              <img
                src="/images/showcase_image_sm.png"
                alt=""
                className="showcase__image"
              />
            </picture>
          </div>
        </section>
      </main>
      {/* --- Portfolio ---- */}
      <section id="portfolio" className=" pt-[7.4rem] pb-[12rem]">
        <div className="px-4 customContainer">
          <div className="pb-16 text-left section-metadata">
            <h2 className="title">My Works</h2>
          </div>

          <Swiper
            modules={[Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            <SwiperSlide className="swiper-slide">
              <img src="https://source.unsplash.com/500x500" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="https://source.unsplash.com/501x501" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="https://source.unsplash.com/501x501" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="https://source.unsplash.com/501x501" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="https://source.unsplash.com/501x501" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/* --- Services ---- */}
      <section id="services" className=" bg-darkColor py-[7.4rem]">
        <div className="px-7 grid md:grid-cols-2  md:items-center md:gap-[2.5rem] customContainer lg:gridcol">
          <div className="section-metadata">
            <h2 className="title">Services that I provide</h2>
            <p className="section-metadata__description about__information">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur sapiente, quam hic eaque sit itaque similique ipsum
              quibusdam saepe asperiores.
            </p>
          </div>
          <div className=" mb-24 md:mb-0 service__image-wrapper">
            <img
              className=" mx-auto md:mx-0"
              src="/images/cris_paul.png"
              alt=""
            />
          </div>
          <div className=" grid gap-20 services__list">
            <div className=" grid gap-20  md:grid-cols-2">
              <article className="self-center">
                <i className="ri-camera-line text-[3.6rem] leading-[3rem] inline-block mb-12"></i>
                <h3 className="title mb-4">Photography</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus nobis velit quis dolore eaque facilis natus! Ullam
                  repellat delectus expedita, consectetur iure rerum eos eius?
                </p>
              </article>
              <article className="self-center">
                <i className="ri-vidicon-2-line text-[3.6rem] leading-[3rem] inline-block mb-12"></i>
                <h3 className="title mb-4">Videography</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus nobis velit quis dolore eaque facilis natus! Ullam
                  repellat delectus expedita, consectetur iure rerum eos eius?
                </p>
              </article>
              <article className="self-center">
                <i className="ri-flight-takeoff-line text-[3.6rem] leading-[3rem] inline-block mb-12"></i>
                <h3 className="title mb-4">Aerial Photography</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus nobis velit quis dolore eaque facilis natus! Ullam
                  repellat delectus expedita, consectetur iure rerum eos eius?
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* --- About me --- */}
      <section id="aboutme" className="pt-[12rem] pb-24">
        <div className="px-7 grid gap-32 customContainer md:grid-cols-2 md:items-center md:gap-[2.5rem]">
          <div>
            <h3 className="title mb-8">About Cris Paul</h3>
            <p className=" mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              inventore molestiae quibusdam, consequatur voluptatem
              perspiciatis, ab sint minus ea debitis tenetur, doloremque
              perferendis. Pariatur aut quasi nulla illum cupiditate odio
              blanditiis dolor sapiente exercitationem neque.
            </p>
            <p className=" mb-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              inventore molestiae quibusdam, consequatur voluptatem
              perspiciatis, ab sint minus ea debitis tenetur, doloremque
              perferendis. Pariatur aut quasi nulla illum cupiditate odio
              blanditiis dolor sapiente exercitationem neque.
            </p>
            <a href="#" className="btn btn--text btn-green">
              Learn more
            </a>
          </div>
          <div className="grid grid-cols-12 mx-auto about__image">
            <img
              className=" col-start-4 col-end-[-1] row-start-1 row-end-4"
              src="/images/about_image_top.png"
              alt=""
            />
            <img
              className=" col-start-1 col-end-7 row-start-3 row-end-5"
              src="/images/about_image_bottom.png"
              alt=""
            />
            <img src="" alt="" />
          </div>
        </div>
      </section>
      {/* --- Blog ----- */}
      <section id="blog" className="pt-16 pb-48">
        <div className="px-7 grid customContainer md:grid-cols-2 md:items-center md:gap[2.5rem]">
          <div className="section-metadata">
            <h2 className="title">Latest blog post</h2>
            <p className="section-metadata__description mb-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur sapiente, quam hic eaque sit itaque similique ipsum
              quibusdam saepe asperiores.
            </p>
            <a href="#" className="btn btn--text btn--transparent">
              View all post
            </a>
          </div>
          <article className=" mb-24 mx-auto post--right">
            <picture className="mb-12">
              <source
                media="min-width:450px"
                srcSet="/images/blog_post_1.png"
              />
              <img
                src="/images/blog_post_1_small.png"
                alt="blog-post-1"
                className="  mx-auto"
              />
            </picture>
            <h3 className="title text-[2.6rem] mb-8">Sample title</h3>
            <a href="#" className="btn btn--text btn--transparent">
              Read more
            </a>
          </article>
          <article className=" mb-24 mx-auto post--left">
            <picture className="mb-12">
              <source
                media="min-width:450px"
                srcSet="/images/blog_post_2.png"
              />
              <img
                src="/images/blog_post_2_small.png"
                alt="blog-post-1"
                className="mx-auto"
              />
            </picture>
            <h3 className="title text-[2.6rem] mb-8">Sample title</h3>
            <a href="#" className="btn btn--text btn--transparent">
              Read more
            </a>
          </article>
        </div>
      </section>
      {/* ---- Footer ----- */}
      <footer className=" bg-darkColor pt-40 pb-12">
        <div className="px-7 customContainer footer__container">
          <div className="text-center">
            <h2 className="title mb-12">
              Looking for a professional photographer?
            </h2>
            <a
              href="mailto:someone@any.thing"
              className="btn btn--text btn--transparent"
            >
              Read more
            </a>
          </div>
          <span className=" block h-[1px] bg-lightColor mt-40 mb-32"></span>
          <div className="text-center">
            <a href="/" className=" inline-block">
              <img src="/images/logo.svg" alt="" className="" />
            </a>
            <p className=" my-12 md:max-w-[50rem] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              mollitia odio incidunt et, sit soluta?
            </p>
            <ul className="flex gap-8 justify-center">
              <li className="">
                <a
                  href="#"
                  className="text-lightColor2 text-[1.8rem] border border-[rgba(255,255,255,.1)] h-16 w-16 rounded-[50%] flex justify-center items-center transition-all hover:bg-lightColor2 hover:text-darkColor duration-300"
                >
                  <i className="ri-twitter-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightColor2 text-[1.8rem] border border-[rgba(255,255,255,.1)] h-16 w-16 rounded-[50%] flex justify-center items-center transition-all hover:bg-lightColor2 hover:text-darkColor duration-300"
                >
                  <i className="ri-dribbble-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-lightColor2 text-[1.8rem] border border-[rgba(255,255,255,.1)] h-16 w-16 rounded-[50%] flex justify-center items-center transition-all hover:bg-lightColor2 hover:text-darkColor duration-300"
                >
                  <i className="ri-github-line"></i>
                </a>
              </li>
            </ul>
            <span className="inline-block mt-20">
              &copy; Cris paul 2022. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
