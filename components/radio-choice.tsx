import type { NextPage } from "next";
import ContentRadioChoice from "./content-radio-choice";

type RadioChoiceType = {
  text?: string;
};

const RadioChoice: NextPage<RadioChoiceType> = ({ text }) => {
  return (
    <div className="h-11 flex flex-row items-center justify-start py-0 px-[15px] box-border gap-[20px] self-stretch">
      <div className="overflow-hidden flex flex-row items-start justify-start p-0.5">
        <img
          className="relative w-[19.5px] h-[19.5px]"
          alt=""
          src="/vector-stroke.svg"
        />
      </div>
      <ContentRadioChoice text="Location" />
    </div>
  );
};

export default RadioChoice;
