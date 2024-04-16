import { usePathname } from "next/navigation";
import TopNav from "./includes/TopNav";
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
        {children}
      </div>
    </>
  );
}
