import type { NextPage } from "next";
import { useCallback } from "react";
import HeaderPage from "./header-page";
import Main from "./main";
import FooterPage from "./footer-page";

const Layout: NextPage = () => {
  const onImageHeaderPageLogoClick = useCallback(() => {
    // Please sync "home" to the project
  }, []);

  return (
    <div className="bg-aliceblue w-[1440px] h-[1501px] overflow-y-auto flex flex-col items-start justify-start gap-[50px]">
      <HeaderPage
        image="/image@2x.png"
        image1="/image1@2x.png"
        headerPageBoxSizing="border-box"
        headerPageBackgroundImage="url('/header--page@3x.png')"
        headerPageFlexShrink="0"
        imageHeaderPageLogoCursor="pointer"
        onImageHeaderPageLogoClick={onImageHeaderPageLogoClick}
      />
      <Main />
      <FooterPage
        footerPageBackgroundImage="url('/footer--page@3x.png')"
        footerPageFlexShrink="0"
      />
    </div>
  );
};

export default Layout;
