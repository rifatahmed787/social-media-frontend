import { useGetLatestMediasQuery } from "@/redux/features/media/mediaApi";
import Button from "../UI/Button";
import { IMedia } from "@/Types/Media";
import { useRouter } from "next/router";
import LatestThreeCard from "../UI/LatestThreeCard";

const LatestThree = () => {
  const router = useRouter();
  // Get media query
  const {
    data: medias,
    isLoading,
    // isError,
    // error,
  } = useGetLatestMediasQuery({});

  const media_list_data = medias?.data;

  return (
    <div className="max-w-[1170px] overflow-hidden mx-auto p-4">
      <div
        className="flex flex-col sm:flex-row items-center  sm:justify-between
			gap-6 sm:gap-20"
      >
        <h1 className="text-primary font-anton text-[20px] md:text-[40px] font-normal leading-[50px] relative after:absolute after:content-normal after:bg-primary after:w-full after:h-0.5 after:bottom-2">
          Most liked media
        </h1>
        <Button
          title="All Media"
          className="px-3 py-2 bg-primary"
          onClickHandler={() => router.push("/media")}
        />
      </div>
      <div className="mt-10 md:mt-14">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-items-center">
              {media_list_data?.length &&
                media_list_data?.map((media: IMedia) => (
                  <LatestThreeCard media={media} key={media?._id} />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LatestThree;
