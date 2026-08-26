import HomeHeroSec from "~/component/page/home/home-hero-sec";
import Sec3 from "~/component/page/home/sec-3";
import Sec4 from "~/component/page/home/sec-4";
import Sec5 from "~/component/page/home/sec-5";
import Sec6 from "~/component/page/home/sec-6";
import ServiceSec from "~/component/page/home/service";


export default function Home() {
  return (
    <>
      <HomeHeroSec />
      <ServiceSec />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Sec6/>
    </>
  );
}
