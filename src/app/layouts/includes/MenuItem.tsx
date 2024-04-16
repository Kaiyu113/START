import { MenuItemTypes } from "@/app/type";
import { AiOutlineHome } from "react-icons/ai";
import { RiGroupLine } from "react-icons/ri";
import { BsCameraVideo } from "react-icons/bs";

export default function MenuItem({
  iconstr,
  colorstr,
  sizestr,
}: MenuItemTypes) {
  const icon = () => {
    if (iconstr === "For You")
      return <AiOutlineHome color={colorstr} size={sizestr} />;
    if (iconstr === "Following")
      return <RiGroupLine color={colorstr} size={sizestr} />;
    if (iconstr === "LIVE")
      return <BsCameraVideo color={colorstr} size={sizestr} />;
  };
  return (
    <>
      <div className="w-full flex items-center hover:bg-gray-100 p-2.5 rounded-md">
        <div className="flex items-center lg:mx-0 mx-auto">
          {icon()}
          <p
            className={`lg:block hidden pl-[9px] mt-0.5 font-semibold text-[17px] text-[${colorstr}]`}
          >
            {iconstr}
          </p>
        </div>
      </div>
    </>
  );
}
