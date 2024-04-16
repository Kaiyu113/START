import { usePathname } from "next/navigation";
import TopNav from "./includes/TopNav";
import SideNavMain from "./includes/SideNavMain";
export default function MainLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <TopNav />
      <div
        className={`flex justify-between mx-auto w-full lg:px-2.5 px-0  ${
          pathname == "/" ? "max-w-[1140px]" : ""
        }
        }`}
      >
        <SideNavMain />
        {children}
      </div>
    </>
  );
}
