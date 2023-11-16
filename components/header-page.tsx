import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ImageHeaderPageLogo from "./image-header-page-logo";
import ImageHeaderPageHamgurge from "./image-header-page-hamgurge";

type HeaderPageType = {
  image?: string;
  image1?: string;

  /** Style props */
  headerPageBoxSizing?: CSSProperties["boxSizing"];
  headerPageBackgroundImage?: CSSProperties["backgroundImage"];
  headerPageFlexShrink?: CSSProperties["flexShrink"];
  imageHeaderPageLogoCursor?: CSSProperties["cursor"];

  /** Action props */
  onImageHeaderPageLogoClick?: () => void;
};

const HeaderPage: NextPage<HeaderPageType> = ({
  image,
  image1,
  headerPageBoxSizing,
  headerPageBackgroundImage,
  headerPageFlexShrink,
  imageHeaderPageLogoCursor,
  onImageHeaderPageLogoClick,
}) => {
  const headerPageStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: headerPageBoxSizing,
      backgroundImage: headerPageBackgroundImage,
      flexShrink: headerPageFlexShrink,
    };
  }, [headerPageBoxSizing, headerPageBackgroundImage, headerPageFlexShrink]);

  const imageHeaderPageLogoStyle: CSSProperties = useMemo(() => {
    return {
      cursor: imageHeaderPageLogoCursor,
    };
  }, [imageHeaderPageLogoCursor]);

  return (
    <header
      className="overflow-hidden flex flex-row items-center justify-between py-5 px-[100px] box-border bg-[url('/header--page1@3x.png')] bg-cover bg-no-repeat bg-[top] self-stretch"
      style={headerPageStyle}
    >
      <ImageHeaderPageLogo
        image="/image3@2x.png"
        imageHeaderPageLogoCursor="unset"
      />
      <ImageHeaderPageHamgurge image="/image2@2x.png" />
    </header>
  );
};

export default HeaderPage;
