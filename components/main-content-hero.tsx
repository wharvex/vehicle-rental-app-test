import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import BodyHero from "./body-hero";

type MainContentHeroType = {
  /** Style props */
  mainContentHeroFlexShrink?: CSSProperties["flexShrink"];
};

const MainContentHero: NextPage<MainContentHeroType> = ({
  mainContentHeroFlexShrink,
}) => {
  const mainContentHeroStyle: CSSProperties = useMemo(() => {
    return {
      flexShrink: mainContentHeroFlexShrink,
    };
  }, [mainContentHeroFlexShrink]);

  return (
    <div
      className="w-[1440px] h-[550px] overflow-hidden flex flex-row items-center justify-center py-[100px] px-2.5 box-border bg-[url('/maincontent--hero@3x.png')] bg-cover bg-no-repeat bg-[top]"
      style={mainContentHeroStyle}
    >
      <BodyHero bodyHeroFlexShrink="0" />
    </div>
  );
};

export default MainContentHero;
