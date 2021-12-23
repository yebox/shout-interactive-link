import { useState } from "react";
import BaseLayout from "../../../components/Layouts/BaseLayout";
import Padding from "../../../components/Layouts/Padding";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import BrandsTable from "../../../components/Tables/BrandManagement/BrandsTable";
import ManagerSwitcher from "../../../components/ManagerSwitcher";
import ManageAffiliatesTable from "../../../components/Tables/SuperAdmin/ManageAffiliatesTable";

import ModalContainer from "../../../components/ModalContainer";
import Dialog from "@mui/material/Dialog";

const Managers = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  function toggle() {
    console.log("toggleing...");
    open ? setOpen(false) : setOpen(true);
  }

  return (
    <Padding>
      <ManagerSwitcher></ManagerSwitcher>
      <Dialog onClose={toggle} open={open}>
        <ModalContainer actionText="Delete" onClose={toggle} headerText="Delete Accounts" icon={<span className="icon-trash-alt border text-[15px] font-bold text-black-default"></span>}>
          <p className="body_light text-black-light text-center">Are you sure you want to delete the selected accounts?</p>
        </ModalContainer>
      </Dialog>

      <div className="w-[873px]">
        <header className="flex justify-between mb-[82px] items-center">
          <div>
            <h2 className="display_3_heavy">Manage Affiliates</h2>
            <p className="subheader_light w-[400px]">Here, you can manage Shout’s affiliates.</p>
          </div>
          <BtnIcon text="Create New Manager" link="/super-admin/managers/new" icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
        </header>
        <div className="flex  items-end mb-[15px] items-center">
          {!show && (
            <a
              onClick={() => {
                setShow(true);
              }}
              className="text-[#14B363] body_light underline cursor-pointer"
            >
              Select
            </a>
          )}
          {show && (
            <a
              onClick={() => {
                setShow(false);
              }}
              className="text-[#14B363] body_light underline cursor-pointer"
            >
              Clear Selection
            </a>
          )}
          {show && (
            <a
              onClick={() => {
                toggle();
              }}
              className="text-[#F03738] body_light underline cursor-pointer ml-[40px]"
            >
              Delete Selection
            </a>
          )}
          <input
            className="border ml-auto h-[48px] w-[362px] px-[16px] focus:border-gray-default text-[14px] rounded-2xl border-gray-default placeholder:text-gray-default"
            placeholder="Search..."
          ></input>
        </div>
        {/* <BrandsTable></BrandsTable> */}
        <ManageAffiliatesTable showSelect={show}></ManageAffiliatesTable>

        {/* <BtnPrimary text="Create" loading={false}></BtnPrimary>
      <BtnOutlined text="Outlined"></BtnOutlined>
      <StatCard text="Adverts Running" value="14"></StatCard> */}
      </div>
    </Padding>
  );
};

Managers.Layout = BaseLayout;
export default Managers;
