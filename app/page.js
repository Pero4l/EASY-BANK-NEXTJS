import NavBarPage from "./Navbar/navbar";
import FooterPage from "./Footer/footer";
import HeroPage from "./Hero-section/hero-section";
import Article1 from "./Article/article-page";
import LatestPage from "./Latest/latest-Page";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
     <NavBarPage/>
     <img className="lg:hidden w-[530px] sticky " src="/bg-intro-mobile.svg" alt="" /> 
     <HeroPage/>
      <Article1/>
      <LatestPage/>
     <FooterPage/>
    </div>
  );
}
