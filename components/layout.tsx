import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import HeaderPage from "./header-page";
import Main from "./main";
import FooterPage from "./footer-page";

type LayoutType = {
  /** Style props */
  layoutGap?: CSSProperties["gap"];
  layoutBoxSizing?: CSSProperties["boxSizing"];
  layoutBoxSizing1?: CSSProperties["boxSizing"];
  headerPageBoxSizing?: CSSProperties["boxSizing"];
  layoutFlex?: CSSProperties["flex"];

  /** Action props */
  onImageHeaderPageLogoClick?: () => void;
};

const Layout: NextPage<LayoutType> = ({
  layoutGap,
  layoutBoxSizing,
  layoutBoxSizing1,
  headerPageBoxSizing,
  layoutFlex,
  onImageHeaderPageLogoClick,
}) => {
  const layoutStyle: CSSProperties = useMemo(() => {
    return {
      gap: layoutGap,
    };
  }, [layoutGap]);

  const headerPageStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: layoutBoxSizing,
    };
  }, [layoutBoxSizing]);

  const imageHeaderPageHamgurgeStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: layoutBoxSizing1,
    };
  }, [layoutBoxSizing1]);

  const iconRadioChoiceUnselectStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: headerPageBoxSizing,
    };
  }, [headerPageBoxSizing]);

  const mainContentGenericStyle: CSSProperties = useMemo(() => {
    return {
      flex: layoutFlex,
    };
  }, [layoutFlex]);

  return (
    <div
      className="bg-aliceblue w-[1440px] overflow-y-auto flex flex-col items-start justify-start gap-[50px] flex-1"
      style={layoutStyle}
    >
      <HeaderPage
        image="/image@2x.png"
        image1="/image1@2x.png"
        headerPageBoxSizing="border-box"
        headerPageBackgroundImage="url('/header--page@3x.png')"
        headerPageFlexShrink="0"
        imageHeaderPageLogoCursor="pointer"
        headerPageBoxSizing="border-box"
        onImageHeaderPageLogoClick={onImageHeaderPageLogoClick}
      />
      <Main
        mainContentHeroBoxSizing="border-box"
        mainContentHeroBoxSizing1="border-box"
        mainContentHeroBoxSizing2="border-box"
        mainContentHeroBoxSizing3="border-box"
        mainFlex="unset"
      />
      <FooterPage
        footerPageBackgroundImage="url('/footer--page@3x.png')"
        footerPageFlexShrink="0"
      />
    </div>
  );
};

export default Layout;
