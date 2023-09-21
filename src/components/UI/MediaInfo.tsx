import { IMedia } from "@/Types/Media";
import { useAppSelector } from "@/hooks/reduxHook";

const MediaInfo = ({ media_info }: { media_info: IMedia | undefined }) => {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);

  return (
    <div
      className={`h-full w-full min-h-[200px] border-[5px] border-white bg-[#EAE3D1] p-9`}
    >
      {/* title */}
      <h2 className=" text-primary font-anton text-[40px] font-normal leading-[50px]">
        {media_info?.owner}
      </h2>
      {/* ratings */}
      <div className="flex items-center justify-start mt-5">
        <p className="text-lg">{media_info?.like?.length}</p>
      </div>
      {/* Description */}
      <div className=" mt-7">
        <p className="text-primary text-[20px] font-inter font-medium leading-[30px]">
          DESCRIPTION :
        </p>

        <p
          className={`text-[#656565] text-[16px] font-inter font-medium leading-[25px] mt-[6px] `}
        >
          {media_info?.description}
        </p>
      </div>
    </div>
  );
};

export default MediaInfo;
