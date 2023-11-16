import type { NextPage } from "next";
import RadioChoice from "./radio-choice";

const MenuRadioChoices: NextPage = () => {
  return (
    <div className="rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start">
      <RadioChoice text="Albany" />
      <RadioChoice text="Rhinebeck" />
      <RadioChoice text="Poughkeepsie" />
      <RadioChoice text="White Plains" />
    </div>
  );
};

export default MenuRadioChoices;
