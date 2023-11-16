import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ContainerHeroBodyHeader from "./container-hero-body-header";
import ContainerRadioChoiceMenu from "./container-radio-choice-menu";

type BodyHeroType = {
  /** Style props */
  bodyHeroFlexShrink?: CSSProperties["flexShrink"];
};

const BodyHero: NextPage<BodyHeroType> = ({ bodyHeroFlexShrink }) => {
  const bodyHeroStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: bodyHeroFlexShrink,
    };
  }, [bodyHeroFlexShrink]);

  return (
    <div
      className="rounded-xl bg-white w-[1000px] h-[350px] overflow-hidden flex flex-row items-center justify-center py-[25px] px-[50px] box-border gap-[75px]"
      style={bodyHeroStyle}
    >
      <ContainerHeroBodyHeader />
      <ContainerRadioChoiceMenu />
    </div>
  );
};

export default BodyHero;
