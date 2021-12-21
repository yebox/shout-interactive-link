import BaseLayout from "../../../components/Layouts/BaseLayout";
import Padding from "../../../components/Layouts/Padding";
import BtnIcon from "../../../components/Buttons/BtnIcon";
import BrandsTable from "../../../components/Tables/BrandManagement/BrandsTable";
import ManagerSwitcher from "../../../components/ManagerSwitcher";
const Managers = () => {
  return (
    <Padding>
      <ManagerSwitcher></ManagerSwitcher>

      <div className="w-[873px]">
        <header className="flex justify-between mb-[82px] items-center">
          <div>
            <h2 className="display_3_heavy">Manage Affiliates</h2>
            <p className="subheader_light w-[400px]">Here, you can manage Shout’s affiliates.</p>
          </div>
          <BtnIcon text="Create New Manager" link="/super-admin/managers/new" icon={<span className="icon-plus-circle"> </span>}></BtnIcon>
        </header>
        <div className="flex justify-between items-end mb-[15px] items-center">
          <a className="text-[#14B363] body_light underline cursor-pointer">Select</a>
          <input className="border h-[48px] w-[362px] px-[16px] focus:border-gray-default text-[14px] rounded-2xl border-gray-default placeholder:text-gray-default" placeholder="Search..."></input>
        </div>
        <BrandsTable></BrandsTable>

        {/* <BtnPrimary text="Create" loading={false}></BtnPrimary>
      <BtnOutlined text="Outlined"></BtnOutlined>
      <StatCard text="Adverts Running" value="14"></StatCard> */}
      </div>
    </Padding>
  );
};

Managers.Layout = BaseLayout;
export default Managers;
