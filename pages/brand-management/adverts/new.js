import React from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import Link from "next/link";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import Padding from "../../../components/Layouts/Padding";
import Upload from "../../../components/Upload/Upload";
import RadioBtn from "../../../components/FormElements/RadioBtn";
import UploadIndicator from "../../../components/Upload/Upload-Indicator";
import { Stack } from "@mui/material";
import Text from "../../../components/FormElements/TextField";
import Select from "../../../components/FormElements/Select";
import Calender from "../../../components/FormElements/Calender";

const CreateNewAdvert = () => {
  return (
    <Padding>
      <div className="w-[981px]">
        <header className=" flex items-center mb-[62px]">
          <Link href={"/brand-management/adverts/"}>
            <span className="icon-arrow-circle-left text-[32px] text-black-default cursor-pointer"></span>
          </Link>
          <h1 className="display_3_heavy ml-[13px] mr-auto">Create New Advert</h1>
          {/* <BtnIcon text="Delete Advert" color="#F03738" link=" " icon={<span className="icon-trash-alt"></span>}></BtnIcon> */}
        </header>
        <main className="w-[981px] min-h-[664px] rounded-3xl border-my-border-color--1 bg-gray-lightest-1 p-[48px] flex flex-col">
          <div className="flex justify-between">
            <div>
              <p className="caption_heavy text-black-default">Advert Type</p>
              <form>
                <Stack gap={"28px"}>
                  <RadioBtn></RadioBtn>
                  <Text placeholder="e.g Pepsi" label="Brand"></Text>
                  <Text placeholder="e.g #4,000,000" label="Amount"></Text>
                  <Select placeholder="www.pepsi.com" label="Link" />
                  <Calender label="Run Time"></Calender>
                </Stack>
              </form>
            </div>
            <div className="w-[350px]">
              <Upload></Upload>
              <p className="mt-[12px] mb-[48px]">
                <span className="icon-info-circle text-[13px] text-black-default bg-primary-lightest-2 p-2 rounded-full"></span>
                <span className="ml-[10px] caption_light text-black-light">All files should be submitted with an aspect ratio of [aspect ratio] and dimentions of [dimensions].</span>
              </p>
              <UploadIndicator fileName={"pepsi.co...mp4"}></UploadIndicator>
            </div>
          </div>
          <div className="flex gap-4 w-[380px] m-auto mx-auto mt-[48px]">
            <BtnOutlined text="Cancel"></BtnOutlined>
            <BtnPrimary text="Create Advert"></BtnPrimary>
          </div>
        </main>
      </div>
    </Padding>
  );
};

CreateNewAdvert.Layout = BaseLayout;
export default CreateNewAdvert;
