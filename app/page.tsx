import Hero from "@/components/Hero/Hero";
import VideoSec from "@/components/Videosec/Videosec";
import Cards from "@/components/Hero2/swiper.js"

export default function Home() {
  return (
    <main className=" font-mplus">
      <Hero />
      <Cards />

      <VideoSec />


      {/* <Home1 /> */}
    </main>
  );
}
