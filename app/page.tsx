"use client";

import MainLayouts from "./layouts/MainLayouts";
import ClientOnly from "./components/ClientOnly";
import PostMain from "./components/PostMain";

export default function Home() {
  return (
    <>
      <MainLayouts>
        <div className="mt-[80px]  w-[calc(100%-90px)] max-w-[690px] ml-auto">
          <ClientOnly>
            <PostMain
              post={{
                id: "123",
                user_id: "234",
                video_url: "/jellyfish.mp4",
                text: "string",
                created_at: "string",
                profile: {
                  user_id: "string",
                  name: "string",
                  image: "string",
                },
              }}
            />
          </ClientOnly>
        </div>
      </MainLayouts>
    </>
  );
}
