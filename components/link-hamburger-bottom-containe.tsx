import type { NextPage } from "next";

type LinkHamburgerBottomContaineType = {
  linkText?: string;
};

const LinkHamburgerBottomContaine: NextPage<
  LinkHamburgerBottomContaineType
> = ({ linkText = "Link / Hamburger / Bottom" }) => {
  return (
    <div className="w-[340px] flex flex-row items-center justify-center py-[50px] px-0 box-border text-center text-21xl text-black font-body-medium">
      <a className="[text-decoration:none] relative tracking-[0.5px] leading-[100%] font-medium text-[inherit] flex items-center justify-center w-[340px] shrink-0">
        {linkText}
      </a>
    </div>
  );
};

export default LinkHamburgerBottomContaine;
