import { IMedia } from "@/Types/Media";
import { useAppSelector } from "@/hooks/reduxHook";
import { useGetMediaDetailsQuery } from "@/redux/features/media/mediaApi";
import { useEffect, useState } from "react";
import Image from "next/image";
import MediaInfo from "../UI/MediaInfo";
import { useRouter } from "next/router";
import Link from "next/link";

const FullMediaDetails = () => {
  const router = useRouter();
  const { mediaID } = router.query;

  // user state from redux
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  //bookDetailsSkip state
  const [mediaDetailsSkip, setMediaDetailsSkip] = useState(true);
  useEffect(() => {
    if (mediaID) {
      setMediaDetailsSkip(false);
    }
  }, [mediaID]);

  // Get books query
  const {
    data: book_details_data,
    isLoading,
    isError,
    // error,
  } = useGetMediaDetailsQuery(mediaID, { skip: mediaDetailsSkip });

  const media_details: IMedia = book_details_data?.data;

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/signin");
    }
  }, [isLoggedIn, router]);

  return (
    <div className={`min-h-screen bg-[#FAF9F5] w-full py-8 md:py-20`}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-[1170px] mx-auto grid shadow-lg grid-cols-1 md:grid-cols-2  ">
          {/*Book Image Carousel */}

          <div className="  max-h-[500px] ">
            <Image
              src={media_details?.image}
              alt=""
              width={100}
              height={100}
              className="object-cover object-center w-3/4"
            />
          </div>
          {/* Book Info */}
          <div>
            <MediaInfo media_info={media_details} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FullMediaDetails;
