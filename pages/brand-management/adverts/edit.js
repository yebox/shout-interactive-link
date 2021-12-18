import React from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
// import BtnIcon from "../../../components/Buttons/BtnIcon";
import Link from "next/link";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";

const EditAdvert = () => {
  return (
    <div>
      <header className=" flex items-center mb-[62px]">
        <Link href={"/brand-management/adverts/"}>
          <span className="icon-arrow-circle-left text-[32px] text-black cursor-pointer"></span>
        </Link>
        <h1 className="display_3_heavy ml-[13px] mr-auto">Edit Advert</h1>
        {/* <BtnIcon text="Delete Advert" color="#F03738" link=" " icon={<span className="icon-trash-alt"></span>}></BtnIcon> */}
      </header>
      <main className="min-w-[981px] min-h-[664px] rounded-3xl border-my-border-color--1 bg-gray-100 p-[48px]">
        <h2 className="text-2xl text-black">Create new advert goes here</h2>

        <div className="flex gap-4 w-[380px] m-auto mt-[500px]">
          <BtnOutlined text="Cancel"></BtnOutlined>
          <BtnPrimary text="Create Advert"></BtnPrimary>
        </div>
      </main>
    </div>
  );
};

EditAdvert.Layout = BaseLayout;
export default EditAdvert;
