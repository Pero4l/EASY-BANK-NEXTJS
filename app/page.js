import Image from "next/image";
import NavBarPage from "./Navbar/navbar";
import FooterPage from "./Footer/footer";

export default function Home() {
  return (
    <div className="">
     <NavBarPage/>
     <FooterPage/>
    </div>
  );
}
