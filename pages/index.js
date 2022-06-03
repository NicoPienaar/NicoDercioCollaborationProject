import Banner from "../components/banner";
import LabTabs from "../components/largatest-lib";
import Navbar from "../components/navbar";
import JanuaryBusyMonth from "../components/jan-busy-month";
import DevTime from "../components/save-dev-time";
import WordPressUpdate from "../components/wordpress-update";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <LabTabs />
      <JanuaryBusyMonth/>
      <WordPressUpdate/>
      <DevTime/>
    </div>
  );
}
