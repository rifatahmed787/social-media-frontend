/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import TextArea from "../UI/Form_items/TextArea";
import FileInput from "../UI/Form_items/FileInput";
import Button from "../UI/Button";
import ICONS from "@/Shared/AllIcons";
import ToastContainer from "../UI/Toast";
import { useAddMediaMutation } from "@/redux/features/media/mediaApi";
import { useUploderMutation } from "@/redux/features/upload/uploadApi";
import { get_error_messages } from "@/lib/error_message";
import { useAppSelector } from "@/hooks/reduxHook";

const AddPostForm = () => {
  // user details
  const { user } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  // Add media mutation hook
  const [addMedia, { data: new_media_data, isError, error, isSuccess }] =
    useAddMediaMutation();
  const [uploader, { isError: uploadError, error: uploadingError }] =
    useUploderMutation();

  console.log(user);

  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");

  // form state
  const [media_form, setMediaForm] = useState({
    image: "",
    owner: "",
    description: "",
    userImage: "",
    added_by: "",
    like: [],
    comments: [],
  });

  // file state
  const [file, setFile] = useState<File | undefined>();

  // formSubmitHandler
  const formSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    let imageUrl = "";
    if (file) {
      // console.log("this is the file data", file);
      const formData = new FormData();
      formData.append("image", file);

      try {
        const uploadResponse = await uploader({ data: formData });
        console.log("this is the url data", uploadResponse);
        if (uploadResponse) {
          if ("data" in uploadResponse) {
            imageUrl = uploadResponse.data.images[0];
          } else {
            console.error("Upload error:", uploadResponse.error);
          }
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    const media_data = { ...media_form };

    // the properties of media_data
    media_data.added_by = user?._id as string;
    media_data.userImage = user?.imageUrl as string;
    media_data.owner = `${user?.name?.firstName || ""} ${
      user?.name?.lastName || ""
    }`;

    // the cover_image property
    const media_data_with_cover_image = {
      ...media_data,
      image: imageUrl,
    };
    console.log(media_data_with_cover_image);
    addMedia(media_data_with_cover_image);
    setIsLoading(false);
  };

  // Input handler
  const inputChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    key: string
  ) => {
    setMediaForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

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
      setAlertMessages(new_media_data?.message);
    }
  }, [error, isError, isSuccess]);
  useEffect(() => {
    if (uploadError && uploadingError) {
      setIsAlertOpen(true);
      setAlertType("error");
    }
  });

  return (
    <div className="flex justify-center bg-box-pattern">
      <form
        onSubmit={formSubmitHandler}
        className={`my-4  md:mx-0 flex max-w-lg rounded-xl w-full flex-col gap-4 bg-[#FFFFFF] px-7 md:px-14 py-6`}
      >
        <h1 className="text-primary font-anton text-[20px] md:text-[30px] font-normal leading-[30px] md:leading-[50px] letter-spacing text-center uppercase">
          Share your thoughts
        </h1>
        <div className="space-y-6 block relative">
          {/* Title */}

          {/* Description */}
          <TextArea
            placeHolder={`Post your thoughts ${user?.name?.firstName}`}
            currentValue={media_form.description}
            onChange={(e) => inputChangeHandler(e, "description")}
            required={true}
          />

          {/* Cover Image */}
          <FileInput
            label=""
            onChange={(selectedFile) => {
              console.log("Selected file:", selectedFile);
              setFile(selectedFile);
            }}
            currentFile={file}
            placeholder="Choose an image"
            required
            id="image"
            htmlFor="image"
            currentValue={""}
          />
        </div>

        {/* Submit button */}
        <Button
          type="submit"
          title="Submit"
          className="bg-primary w-full mx-auto py-[17px] md:py-[10px] px-10 md:px-14 
          text-base font-medium rounded"
          icon={isLoading && ICONS.button_loading_icon}
          isDisabled={isLoading}
        />

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
      </form>
    </div>
  );
};

export default AddPostForm;
