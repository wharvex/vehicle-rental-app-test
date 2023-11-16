import type { NextPage } from "next";
import MenuRadioChoices from "./menu-radio-choices";
import ButtonSmallSmallGreen from "/";

const ContainerRadioChoiceMenu: NextPage = () => {
  return (
    <div className="bg-white overflow-hidden flex flex-col items-center justify-start p-2.5 gap-[20px]">
      <MenuRadioChoices />
      <ButtonSmallSmallGreen text="Go!" />
    </div>
  );
};

export default ContainerRadioChoiceMenu;
