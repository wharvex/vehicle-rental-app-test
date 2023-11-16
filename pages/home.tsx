import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const router = useRouter();

  const onImageHeaderPageLogoClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1664px] overflow-hidden flex flex-col items-center justify-start">
      <Layout
        layoutGap="unset"
        layoutBoxSizing="border-box"
        layoutBoxSizing1="border-box"
        headerPageBoxSizing="border-box"
        headerPageBoxSizing="border-box"
        headerPageBoxSizing="border-box"
        headerPageBoxSizing="border-box"
        layoutFlex="1"
        onImageHeaderPageLogoClick={onImageHeaderPageLogoClick}
      />
    </div>
  );
};

export default Home;
