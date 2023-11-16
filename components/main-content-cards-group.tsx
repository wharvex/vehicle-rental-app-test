import type { NextPage } from "next";
import CardTestimonials from "./card-testimonials";
import CardVehicles from "./card-vehicles";
import CardDates from "./card-dates";

const MainContentCardsGroup: NextPage = () => {
  return (
    <div className="bg-aliceblue w-[1440px] overflow-hidden flex flex-row items-center justify-center p-[50px] box-border gap-[50px]">
      <CardTestimonials star1="/star-11@2x.png" cardTestimonialsFlex="1" />
      <CardVehicles cardVehiclesFlex="1" />
      <CardDates calendar1="/calendar-11@2x.png" cardDatesFlex="1" />
    </div>
  );
};

export default MainContentCardsGroup;
