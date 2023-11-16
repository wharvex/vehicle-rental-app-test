import type { NextPage } from "next";
import MainContentHero from "./main-content-hero";
import MainContentCardsGroup from "./main-content-cards-group";
import MainContentGeneric from "./main-content-generic";

const Main: NextPage = () => {
  return (
    <main className="bg-aliceblue flex flex-col items-center justify-start gap-[20px] self-stretch flex-1">
      <MainContentHero mainContentHeroFlexShrink="0" />
      <MainContentCardsGroup />
      <MainContentGeneric mainContentGenericBackground="linear-gradient(180deg, #ebf5ff, #92c9f9)" />
    </main>
  );
};

export default Main;
