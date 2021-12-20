import { Stack } from "@mui/material";
import React from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
// import BtnIcon from "../../../components/Buttons/BtnIcon";
import Link from "next/link";
import BtnPrimary from "../../../components/Buttons/BtnPrimary";
import BtnOutlined from "../../../components/Buttons/BtnOutlined";
import Text from "../../../components/FormElements/TextField";
import Select from "../../../components/FormElements/Select";
import RadioBtn from "../../../components/FormElements/RadioBtn";
import Padding from "../../../components/Layouts/Padding";
import Upload from "../../../components/Upload";

const EditAdvert = () => {
  return (
    <Padding>
      <header className=" flex items-center mb-[62px]">
        <Link href={"/brand-management/adverts/"}>
          <span className="icon-arrow-circle-left text-[32px] text-black cursor-pointer"></span>
        </Link>
        <h1 className="display_3_heavy ml-[13px] mr-auto">Edit Advert</h1>
        {/* <BtnIcon text="Delete Advert" color="#F03738" link=" " icon={<span className="icon-trash-alt"></span>}></BtnIcon> */}
      </header>
      <main className="min-w-[981px] min-h-[664px] rounded-3xl border-my-border-color--1 bg-gray-lightest-1 p-[48px] flex justify-between">
        <div>
          <p className="caption_heavy text-black-default">Advert Type</p>

          <form>
            <Stack gap={"28px"}>
              <RadioBtn></RadioBtn>
              <Text placeholder="e.g Pepsi" label="Brand"></Text>
              <Text placeholder="e.g #4,000,000" label="Amount"></Text>
              <Select />
            </Stack>
          </form>
          <div className="flex gap-4 w-[380px] m-auto mt-[500px]">
            <BtnOutlined text="Cancel"></BtnOutlined>
            <BtnPrimary text="Create Advert"></BtnPrimary>
          </div>
        </div>
        <div className="w-[350px]">
          <Upload></Upload>
        </div>
      </main>
    </Padding>
  );
};

EditAdvert.Layout = BaseLayout;
export default EditAdvert;
