import BaseLayout from "../../../components/Layouts/BaseLayout";
import AdvertCard from "../../../components/Cards/AdvertCard";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import StatCard from "../../../components/Cards/StatCard";

const Adverts = () => {
  return (
    <div>
      <header className="flex justify-between mb-[52px] items-center">
        <div>
          <h2 className="display_3_heavy">Manage Adverts</h2>
          <p className="subheader_light">Here are the Advertst you have created.</p>
        </div>
        <BtnIcon text="Create Advert" link="/brand-management/adverts/new" icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
      </header>
      <p className="subheader_heavy mb-[18px]">Current Advert Statistics</p>
      <section className="">
        <div className="flex gap-[24px] overflow-x-scroll scroll_hide mb-[6.4rem]">
          <StatCard text="Adverts Running" value="14"></StatCard>
          <StatCard text="Adverts Running" value="14"></StatCard>
          <StatCard text="Adverts Running" value="14"></StatCard>
          <StatCard text="Adverts Running" value="14"></StatCard>
          <StatCard text="Adverts Running" value="14"></StatCard>
          <StatCard text="Adverts Running" value="14"></StatCard>
          <StatCard text="Adverts Running" value="14"></StatCard>
        </div>
        <div className="info flex items-center mb-[14px]">
          <p className="subheader_heavy">Running Adverts</p>
          <input
            className="placeholder:text-gray-400 rounded-xl px-[8px] py-[16px] ml-auto border caption_heavy border-gray-500 w-[234px] h-[32px] focus:border-gray-500"
            placeholder="Search..."
          ></input>
          <button className="w-[113px] h-[32px] border-gray-500 rounded-xl border ml-[24px]">
            <span className="caption_heavy">All adverts</span>
          </button>
        </div>
        <div className="ads_grid">
          <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)}></AdvertCard>
          <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)}></AdvertCard>
          <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)}></AdvertCard>
          <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)}></AdvertCard>
          <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)}></AdvertCard>
          <AdvertCard clicks="500" engagement={300} time_left={"05d 05h 12m 43s"} reach={(14, 300)}></AdvertCard>
        </div>
      </section>
    </div>
  );
};

export default Adverts;

Adverts.Layout = BaseLayout;
