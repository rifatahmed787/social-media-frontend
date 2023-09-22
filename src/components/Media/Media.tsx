import { IMedia } from "@/Types/Media";
import { useGetMediasQuery } from "@/redux/features/media/mediaApi";
import MediaCard from "../UI/MediaCard";

const Media = () => {
  const { data: mediaData, isLoading, isError, error } = useGetMediasQuery({});

  const media_lis_data = mediaData?.data?.data;

  return (
    <div className="w-11/12 md:w-2/5 mx-auto mt-20 mb-4">
      {isLoading ? (
        <div className="h-screen">loading.....</div>
      ) : (
        <div className="my-3 bg-[#FFFFFF] rounded-lg">
          {!isError &&
            !error &&
            media_lis_data?.length > 0 &&
            media_lis_data.map((media: IMedia) => {
              return <MediaCard key={media?._id} media={media} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Media;
