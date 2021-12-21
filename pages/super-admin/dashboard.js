import BaseLayout from "../../components/Layouts/BaseLayout";
import Padding from "../../components/Layouts/Padding";
import BtnOutlinedWithIcon from "../../components/Buttons/BtnOutlinedWithIcon";
import StatCard from "../../components/Cards/StatCard";
import ActivityCard from "../../components/Cards/ActivityCard";
import { Stack } from "@mui/material";

const DashBoard = () => {
  return (
    <Padding>
      <header className="flex justify-between mb-[52px] items-center">
        <div>
          <h2 className="display_3_heavy">Hello Tony,</h2>
          <p className="subheader_light">Welcome to your Dashboard.</p>
        </div>
      </header>
      <div className="flex justify-between items-end mb-[18px]">
        <p className="subheader_heavy ">Quick Stats</p>
        <BtnOutlinedWithIcon text="This Month" icon={<span className="icon-arrow-down-spear text-black-light text-[14px]"> </span>}></BtnOutlinedWithIcon>
      </div>
      <section className="">
        <div className="flex gap-[24px] overflow-x-scroll scroll_hide mb-[6.4rem]">
          <StatCard color="green" text="Adverts Running" value="14"></StatCard>
          <StatCard color="green" text="Adverts Running" value="14"></StatCard>
          <StatCard color="green" text="Adverts Running" value="14"></StatCard>
          <StatCard color="green" text="Adverts Running" value="14"></StatCard>
          <StatCard color="green" text="Adverts Running" value="14"></StatCard>
          <StatCard color="green" text="Adverts Running" value="14"></StatCard>
          <StatCard color="green" text="Adverts Running" value="14"></StatCard>
        </div>
      </section>

      <section className="flex justify-between gap-[24px]">
        <div>
          <p className="subheader_heavy text-black-default mb-[12px]">Revenue</p>
          <div className="w-[535px] border border-gray-light rounded-[8px] h-[370px] p-[24px]"></div>
        </div>
        <div>
          <p className="subheader_heavy text-black-default mb-[12px]">Recent Activities</p>
          <div className="w-[535px] border border-gray-light rounded-[8px]  p-[24px]">
            <Stack gap={"20px"}>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
              <ActivityCard></ActivityCard>
            </Stack>
          </div>
        </div>
      </section>
    </Padding>
  );
};

DashBoard.Layout = BaseLayout;
export default DashBoard;
