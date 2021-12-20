import React from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import StatCard from "../../../components/Cards/StatCard";
import BtnOutlinedWithIcon from "../../../components/Buttons/BtnOutlinedWithIcon";
import Padding from "../../../components/Layouts/Padding";
import PreviousLinksTable from "../../../components/Tables/BrandManagement/PreviousLinksTable";
import CreatedLinksTable from "../../../components/Tables/BrandManagement/CreatedLinksTable";

const ShoutLinks = () => {
  return (
    <Padding>
      <header className="flex justify-between mb-[52px] items-center">
        <div>
          <h2 className="display_3_heavy">Manage Links</h2>
          <p className="subheader_light">Here are the Shout Links you have created.</p>
        </div>
        <BtnIcon text="Create Shout Link" link="/brand-management/shout-links/" icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
      </header>
      <div className="flex justify-between">
        <p className="subheader_heavy mb-[18px]">Current Shout Link Statistics</p>
        <BtnOutlinedWithIcon text="All Advert" icon={<span className="icon-plus-circle text-black-light text-[14px]"> </span>}></BtnOutlinedWithIcon>
      </div>
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
        <div className="mb-[68px]">
          <p className="subheader_heavy text-black-default mb-[16px]">Created Links</p>
          <CreatedLinksTable></CreatedLinksTable>
        </div>
        <div>
          <p className="subheader_heavy text-black-default mb-[16px]">Previous Links</p>
          <PreviousLinksTable></PreviousLinksTable>
        </div>
      </section>
    </Padding>
  );
};

export default ShoutLinks;
ShoutLinks.Layout = BaseLayout;
// Brands.Layout = BaseLayout;
