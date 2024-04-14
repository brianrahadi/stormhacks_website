import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CurrentSponsors from "../sponsors/CurrentSponsors.jsx";
import TracksThemes from "./TracksThemes/TracksThemes";
import Footer from "./Footer";
import AboutUs from "../components/AboutUs";
import DesignerFriendly from "../components/DesignerFriendly";
import Register from "../components/Register";
import WhySponsorUs from "../components/WhySponsorUs";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
      // Will be passed to the page component as props
    },
  };
}

export default function Home() {
  return (
    <div className="[background:linear-gradient(180deg,_#241b38,_#231f20)] grid grid-cols-[1fr_min(115ch,_calc(100%-64px))_1fr] gap-x-[32px] [&>*]:col-span-1 [&>*]:col-start-2 desktop:gap-x-[7.5vh] mobile:gap-x-[5vh] place-content-center">
      <AboutUs />
      <DesignerFriendly />
      <Register />
      <TracksThemes />
      <WhySponsorUs />
      <CurrentSponsors />
      <Footer />
    </div>
  );
}
