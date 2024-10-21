"use client";

import About from "~/components/about";
import AccordianList from "~/components/accordian";
import Content from "~/components/content";
import Experience from "~/components/experience";
import Hero from "~/components/hero";
import Link from "next/link";
import MainLayout from "~/components/layouts/main";
import Navbar from "~/components/navbar";
import ScreenshotBlockrecipes from "~/assets/screenshots/screenshot-blockrecipes.png";
import ScreenshotDexioprotocol from "~/assets/screenshots/screenshot-dexioprotocol.png";
import ScreenshotWilakMedia from "~/assets/screenshots/wilak-media.png";
import ScrollingBanner from "~/components/scrollingBanner";
import Selfy from "~/assets/me.png";
import { Services } from "~/config/services";
import Stats from "~/components/stats";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const CustomPrevArrow = ({ onClick }: any) => (
    <div
      className="absolute -left-10 top-1/2 -translate-y-1/2 cursor-pointer z-10 transition-all duration-300 ease-in-out hover:scale-150"
      onClick={onClick}
    >
      <RiArrowLeftSFill className="text-white text-6xl" />
    </div>
  );

  const CustomNextArrow = ({ onClick }: any) => (
    <div
      className="absolute -right-10 top-1/2 -translate-y-1/2 cursor-pointer z-10 transition-all duration-300 ease-in-out hover:scale-150"
      onClick={onClick}
    >
      <RiArrowRightSFill className="text-white text-6xl" />
    </div>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div
        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out ${i === currentSlide ? 'bg-[#393fec] scale-150' : 'bg-white'
          }`}
      ></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <MainLayout>
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <Stats />
      <Content cta ctaText="Learn More" ctaLink="/about">
        <p>
          G&apos;day, I&apos;m Mac Sweeny, a passionate full-stack web developer
          and designer based out of Brisbane, Australia. I&apos;m currently the
          Web Development Manager at{" "}
          <Link className="underline" href="https://www.wilakmedia.com">
            Wilak Media
          </Link>{" "}
          where I&apos;m responsible for the design, development and performance
          of 40+ clients.
        </p>
      </Content>
      <ScrollingBanner baseVelocity={-200}>Experience</ScrollingBanner>
      <div className="px-14 mb-20">
        <Slider {...settings}>
          <Experience
            imageDirection="right"
            imageSrc={ScreenshotWilakMedia}
            title="Wilak Media"
            role="Web Development Manager"
            stack={[
              { name: "TypeScript", link: "https://www.TypeScriptlang.org/" },
              { name: "NextJS", link: "https://nextjs.org/" },
              { name: "React", link: "https://react.dev/" },
              { name: "TailwindCSS", link: "https://tailwindcss.com/" },
              { name: "PlanetScale", link: "https://planetscale.com/" },
              { name: "Drizzle ORM", link: "https://orm.drizzle.team/" },
              { name: "Figma", link: "https://www.figma.com/" },
              { name: "Google Analytics", link: "https://analytics.google.com/" },
            ]}
          >
            Wilak Media is a Marketing Consultancy which specializes in scaling
            brands profitably. My main roles include{" "}
            <span className="font-semibold underline">Designing</span>,{" "}
            <span className="font-semibold underline">Developing</span> and{" "}
            <span className="font-semibold underline">Deploying</span>, ecommerce
            stores, landing pages and web applications. My main responsibilities
            include: optimizing conversion rates, user experience and SEO, whilst
            simultaneously creating a good developer experience for my team and
            future teams.
          </Experience>
          <Experience
            imageDirection="right"
            imageSrc={ScreenshotBlockrecipes}
            title="Blockrecipes"
            role="Full-Stack Web Developer"
            stack={[
              { name: "TypeScript", link: "https://www.TypeScriptlang.org/" },
              { name: "NextJS", link: "https://nextjs.org/" },
              { name: "React", link: "https://react.dev/" },
              { name: "TailwindCSS", link: "https://tailwindcss.com/" },
              { name: "Supabase", link: "https://supabase.com/" },
              { name: "Drizzle ORM", link: "https://orm.drizzle.team/" },
              { name: "Figma", link: "https://www.figma.com/" },
              { name: "Google Analytics", link: "https://analytics.google.com/" },
            ]}
          >
            Blockrecipes is a startup SaaS with is developing a{" "}
            <strong className="font-semibold underline">Real-Time</strong>{" "}
            blockchain API. My main roles include{" "}
            <span className="font-semibold underline">Designing</span> and{" "}
            <span className="font-semibold underline">Developing</span> the
            Blockrecipes web application. My main responsibilities include:
            implementing real-time data and features into the UI whilst
            simultaneously maintaining a good customer experience.
          </Experience>
          <Experience
            imageDirection="right"
            imageSrc={ScreenshotDexioprotocol}
            title="Dexioprotocol"
            role="Junior Frontend Developer"
            stack={[
              { name: "TypeScript", link: "https://www.TypeScriptlang.org/" },
              { name: "React", link: "https://react.dev/" },
              { name: "TailwindCSS", link: "https://tailwindcss.com/" },
              { name: "Figma", link: "https://www.figma.com/" },
              { name: "AdobeXD", link: "https://helpx.adobe.com/au/support/xd.html" },
            ]}
          >
            Dexioprotocol is a Web3 gaming startup. My main roles include{" "}
            <span className="font-semibold underline">Designing</span>, and creating{" "}
            <span className="font-semibold underline">user stories</span> for the
            developers to implement. My main responsibilities include: creating a
            good user experience for the Dexioprotocol web application, listening to
            user feedback and turning them into developer-friendly user stories.
          </Experience>
        </Slider>
      </div>


      <ScrollingBanner baseVelocity={-200}>Skills</ScrollingBanner>

      <Content className="my-0 lg:my-0">
        <p>
          I&apos;m naturally a <span className="underline">curious person</span>{" "}
          and love learning new technologies and skills. I&apos;ve listed all of
          the frameworks and skills I&apos;m proficient in below. Feel free to{" "}
          <span className="underline">ask</span> me about any of them :).
        </p>
      </Content>
      <AccordianList items={Services} />

      <Content cta ctaText="Let's Chat" ctaLink="/contact">
        I&apos;m a passionate full-stack web developer and designer based out of
        Brisbane, Australia. I&apos;m currently the Web Development Manager at
        Wilak Media where I&apos;m responsible for the design, development and
        performance of 40+ clients. I&apos;m an enthusiastic, naturally curious
        guy who loves learning new technologies and skills. Outside of work I
        like to play a bit of cricket and hit the gym.
      </Content>
    </MainLayout>
  );
}
