import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type MainContentGenericType = {
  text?: string;

  /** Style props */
  mainContentGenericBackground?: CSSProperties["background"];
  mainContentGenericFlex?: CSSProperties["flex"];
};

const MainContentGeneric: NextPage<MainContentGenericType> = ({
  text = "Generic Main Content",
  mainContentGenericBackground,
  mainContentGenericFlex,
}) => {
  const mainContentGenericStyle: CSSProperties = useMemo(() => {
    return {
      background: mainContentGenericBackground,
      flex: mainContentGenericFlex,
    };
  }, [mainContentGenericBackground, mainContentGenericFlex]);

  return (
    <div
      className="flex flex-row items-center justify-center pt-0 px-[100px] pb-[70px] box-border text-center text-36xl text-black font-body-large self-stretch"
      style={mainContentGenericStyle}
    >
      <div className="relative tracking-[0.5px] leading-[100%] font-medium">
        {text}
      </div>
    </div>
  );
};

export default MainContentGeneric;
