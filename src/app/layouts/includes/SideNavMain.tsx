import { usePathname } from "next/navigation";
import Link from "next/link";
import ManuItem from "./MenuItem";
import ManuItemFollow from "./MenuItemFollow";
import ClientOnly from "@/app/components/ClientOnly";

export default function SideNavMain() {
  const pathName = usePathname();
  return (
    <>
      <div
        id="SideNavMain"
        className={`fixed z-20 bg-white pt-[70px] h-full w-[75px] lg:border-r-0 border-r overflow-auto ${
          pathName === "/" ? "lg:w-[280px]" : "lg:w-[220px]"
        }`}
      >
        <div className="lg:w-full w-[55px] mx-auto">
          <Link href="/">
            <ManuItem
              iconString="For You"
              colorString="black"
              sizeString="25"
            />
            <ManuItem
              iconString="Following"
              colorString="black"
              sizeString="25"
            />
            <ManuItem iconString="LIVE" colorString="red" sizeString="25" />
          </Link>
          <div className="border-b lg:ml-2 mt-2" />
          <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
            Suggested accounts
          </h3>
          <ClientOnly>
            <ManuItemFollow
              user={{
                id: "1",
                post_id: "123",
                name: "user1",
                image: "/image/favicson.png",
              }}
            />
          </ClientOnly>
          <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
            See all
          </button>
          {true ? (
            <div>
              <div className="border-b lg:ml-2 mt-2" />
              <h3 className="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">
                Following accounts
              </h3>

              <div className="lg:hidden block pt-3" />
              <ClientOnly>
                <div className="cursor-pointer">
                  <ManuItemFollow
                    user={{
                      id: "1",
                      post_id: "string",
                      name: "user1",
                    }}
                  />
                </div>
              </ClientOnly>

              <button className="lg:block hidden text-[#F02C56] pt-1.5 pl-2 text-[13px]">
                See more
              </button>
            </div>
          ) : null}
          <div className="lg:block hidden text-[11px] text-gray-500">
            <p className="pt-4 px-2">
              About Newsroom KaiyuPOP Shop Contact Careers AiryCrow
            </p>
            <p className="pt-4 px-2">
              AiryCrow for Good Advertise Developers Transparency AiryCrow
              Rewards AiryCrow Browse AiryCrow Embeds
            </p>
            <p className="pt-4 px-2">
              Help Safety Terms Privacy Creator Portal Community Guidelines
            </p>
            <p className="pt-4 px-2">© 2023 AiryCrow</p>
          </div>
        </div>
      </div>
    </>
  );
}
