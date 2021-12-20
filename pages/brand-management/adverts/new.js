import React from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import Link from "next/link";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import Padding from "../../../components/Layouts/Padding";
import Upload from "../../../components/Upload";

const CreateNewAdvert = () => {
  return (
    <Padding>
      <div className="w-[981px]">
        <header className=" flex items-center mb-[62px]">
          <Link href={"/brand-management/adverts/"}>
            <span className="icon-arrow-circle-left text-[32px] text-black-default cursor-pointer"></span>
          </Link>
          <h1 className="display_3_heavy ml-[13px] mr-auto">Create New Advert</h1>
          <BtnIcon text="Delete Advert" color="#F03738" link=" " icon={<span className="icon-trash-alt"></span>}></BtnIcon>
        </header>
        <main className="min-h-[664px] rounded-3xl border-my-border-color--1 bg-gray-lightest-1 p-[48px]">
          <h2 className="text-2xl text-black-default">Create new advert goes here</h2>
          <Upload></Upload>
          <div className="flex gap-4 w-[380px] m-auto mt-[500px]">
            <BtnOutlined text="Cancel" link={"/brand-management/adverts"}></BtnOutlined>

            <BtnPrimary text="Create Advert" link={"/brand-management/adverts/success"}></BtnPrimary>
          </div>
        </main>
      </div>
    </Padding>
  );
};

CreateNewAdvert.Layout = BaseLayout;
export default CreateNewAdvert;
