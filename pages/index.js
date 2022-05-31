import Banner from "../components/banner";
import LabTabs from "../components/largatest-lib";
import Navbar from "../components/navbar";
import JanuaryBusyMonth from "../components/jan-busy-month";
import DevTime from "../components/save-dev-time";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <LabTabs />
      <Banner />
      <JanuaryBusyMonth/>
      <DevTime/>
    </div>
  );
}
