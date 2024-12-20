import { FC, useEffect, useState } from "react";
import { RecommendationShelf, ServerApi } from "@/api";
import _ from "lodash";
import { PLEX } from "@/constants";
import qs from "qs";
import { Slider } from "@/components/slider";

export const VideoCarousel: FC<RecommendationShelf & { shuffle?: boolean }> = ({
  shuffle,
  dir,
  library,
  link,
  title,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Plex.Metadata[] | null>(null);

  useEffect(() => {
    setIsLoading(true);
    ServerApi.library({
      key: library,
      directory: dir,
    })
      .then((res) => {
        const media = res?.data.MediaContainer.Metadata;
        if (!media) return;
        setItems(shuffle ? _.shuffle(media) : media);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dir, library, shuffle]);

  const token = localStorage.getItem("token");

  return (
    <div className="w-[100%] pb-5 overflow-x-hidden">
      <p className="px-20 font-bold text-2xl mb-5">{title}</p>
      {items && items.length > 5 && (
        <Slider
          slides={items.map((item) => ({
            id: item.key,
            title: item.title,
            image:
              item.type === "episode"
                ? `${PLEX.server}/photo/:/transcode?${qs.stringify({
                    width: 300,
                    height: 170,
                    url: `${item.thumb}?X-Plex-Token=${token}`,
                    minSize: 1,
                    upscale: 1,
                    "X-Plex-Token": token,
                  })}`
                : `${PLEX.server}/photo/:/transcode?${qs.stringify({
                    width: 300,
                    height: 170,
                    url: `${item.art}?X-Plex-Token=${token}`,
                    minSize: 1,
                    upscale: 1,
                    "X-Plex-Token": token,
                  })}`,
            subtitle: <></>,
          }))}
        />
      )}
    </div>
  );
};
