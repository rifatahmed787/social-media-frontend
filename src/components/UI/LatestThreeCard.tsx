import { IMedia } from "@/Types/Media";
import { useAppSelector } from "@/hooks/reduxHook";
import { useEffect, useState } from "react";
import Image from "next/image";
import ICONS from "@/Shared/AllIcons";
import Link from "next/link";
import { useToggleLikeMediaMutation } from "@/redux/features/media/mediaApi";
import ToastContainer from "./Toast";
import { get_error_messages } from "@/lib/error_message";
import Button from "./Button";
import { useSession } from "next-auth/react";

const LatestThreeCard = ({ media }: { media: IMedia }) => {
  const { user } = useAppSelector((state) => state.auth);
  const [likePost, setLikePost] = useState(false);
  const [toggleLikeMedia, { data: like_data, isError, error, isSuccess }] =
    useToggleLikeMediaMutation();
  const { data: session } = useSession();
  // console.log(likePost);

  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");

  const handleLike = async () => {
    if (!media) {
      return;
    }

    try {
      if (session?.user?.email) {
        await toggleLikeMedia({
          mediaID: media._id,
          user: session?.user.email,
        });
      } else {
        // User has custom login
        await toggleLikeMedia({ mediaID: media._id, user });
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  useEffect(() => {
    const likedpost = media?.like.find((like) => like.userId === user?._id);

    if (likedpost) {
      setLikePost(true);

      return;
    } else {
      setLikePost(false);

      return;
    }
  }, [media?.like, user?._id, user?.email]);

  // error and success handling
  useEffect(() => {
    if (isError && error && "data" in error) {
      setIsAlertOpen(true);
      setAlertType("error");
      const error_messages = get_error_messages(error);
      setAlertMessages(error_messages);
    } else if (isSuccess) {
      setIsAlertOpen(true);
      setAlertType("success");
      setAlertMessages(like_data?.message);
    }
  }, [error, isError, isSuccess, like_data?.message]);
  return (
    <div>
      <div className="shadow-md  dark:bg-gray-900 dark:text-gray-100 overflow-y-auto">
        <div className="flex  items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            {media?.userImage ? (
              <div className="flex items-center">
                {" "}
                <Image
                  src={media?.userImage}
                  alt=""
                  className="w-10 h-10 rounded-full lg:mt-2"
                  width={10}
                  height={10}
                />
                <h3 className="pl-2 text-lg font-bold">{media?.owner}</h3>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                {ICONS.google}
                <h3 className="pl-2 text-lg font-bold">{media?.owner}</h3>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="text-md px-3 pb-5">{media?.description}</p>
        </div>
        <Image
          src={media?.image}
          alt=""
          className="object-cover object-center w-3/4 mx-auto "
          width={50}
          height={50}
        />
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center space-x-3">
              {user?._id || session?.user?.email ? (
                <button
                  type="button"
                  title="Like post"
                  onClick={() => handleLike()}
                  className="flex items-center justify-center"
                >
                  <span
                    className={`${likePost ? "text-red-700" : "text-black"}`}
                  >
                    {ICONS.heart_icon}
                  </span>
                </button>
              ) : (
                <div>
                  <Link href="/signin">
                    <button
                      type="button"
                      title="Like post"
                      className="flex items-center justify-center"
                    >
                      <span
                        className={`${
                          likePost ? "text-red-700" : "text-black"
                        }`}
                      >
                        {ICONS.heart_icon}
                      </span>
                    </button>
                  </Link>
                </div>
              )}
              <p className="text-lg">{media?.like?.length}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                title="Add a comment"
                className="flex items-center justify-center"
              >
                <span>comment icon</span>
              </button>
              <button
                type="button"
                title="Share post"
                className="flex items-center justify-center"
              >
                <span>share icon</span>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {media?.like?.slice(0, 3).map((li) => (
                  <>
                    {li?.userImage ? (
                      <Image
                        key={li?.userId}
                        alt=""
                        className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                        src={li?.userImage}
                        width={5}
                        height={5}
                      />
                    ) : (
                      <span>{ICONS.chat_icon}</span>
                    )}
                  </>
                ))}
              </div>
              <span className="text-sm">
                Liked by,
                {media?.like?.slice(0, 1).map((lik) => (
                  <>
                    <span key={lik?.userId} className="font-semibold">
                      {lik.userName} and {media?.like?.length} others
                    </span>
                  </>
                ))}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <span className="text-base font-semibold">leroy_jenkins72</span>
              Nemo ea quasi debitis impedit!
            </p>
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100"
            />
          </div>
          <div className="my-3">
            <Link href={`/media/${media?._id}`}>
              <Button
                title="View Details"
                className="bg-primary w-full mx-auto py-2  px-3  
          text-base font-medium rounded"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Toast */}
      {isAlertOpen && (
        <ToastContainer
          type={AlertType}
          messages={AlertMessages}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          className="max-w-xs w-full absolute top-0 right-0 flex justify-center z-50"
        />
      )}
    </div>
  );
};

export default LatestThreeCard;
