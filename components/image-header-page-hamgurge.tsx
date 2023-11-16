import type { NextPage } from "next";

type ImageHeaderPageHamgurgeType = {
  image?: string;
};

const ImageHeaderPageHamgurge: NextPage<ImageHeaderPageHamgurgeType> = ({
  image,
}) => {
  return (
    <div className="flex flex-col items-start justify-start p-2.5">
      <img
        className="relative w-[60px] h-[42px] object-cover"
        alt=""
        src={image}
      />
    </div>
  );
};

export default ImageHeaderPageHamgurge;
