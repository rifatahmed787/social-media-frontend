/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import TextArea from "../UI/Form_items/TextArea";
import FileInput from "../UI/Form_items/FileInput";
import Button from "../UI/Button";
import ICONS from "@/Shared/AllIcons";
import ToastContainer from "../UI/Toast";

// import { useAppSelector } from "@/hooks/reduxHook";
// import { useAddBookMutation } from "@/redux/features/book/bookApi";

// import { useUploderMutation } from "@/redux/features/upload/uploadApi";
// import { DarkModeContext } from "../DarkModeContext/DarkModeContext";

const AddPostForm = () => {
  // user details
  //   const { user } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  // Add book mutation hook
  //   const [addBok, { data: new_book_data, isError, error, isSuccess }] =
  //     useAddBookMutation();
  //   const [uploader, { isError: uploadError, error: uploadingError }] =
  //     useUploderMutation();

  // Alert State
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [AlertType, setAlertType] = useState<"success" | "error" | "warning">(
    "success"
  );
  const [AlertMessages, setAlertMessages] = useState("");

  // form state
  const [book_form, setBookForm] = useState({
    image: "",

    description: "",
    added_by: "",
  });

  // file state
  const [file, setFile] = useState<File | undefined>();

  // formSubmitHandler
  const formSubmitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // let imageUrl = "";
    // if (file) {
    //   // console.log("this is the file data", file);
    //   const formData = new FormData();
    //   formData.append("image", file);

    //   try {
    //     const uploadResponse = await uploader({ data: formData });
    //     console.log("this is the url data", uploadResponse);
    //     if (uploadResponse) {
    //       if ("data" in uploadResponse) {
    //         imageUrl = uploadResponse.data.images[0];
    //       } else {
    //         console.error("Upload error:", uploadResponse.error);
    //       }
    //     }
    //   } catch (error) {
    //     console.error("Error uploading file:", error);
    //   }
    // }

    const book_data = { ...book_form };

    // the properties of book_data
    // book_data.added_by = user?._id as string;

    // the cover_image property
    const book_data_with_cover_image = {
      ...book_data,
      //   cover_image: imageUrl,
    };

    // addBok(book_data_with_cover_image);
    setIsLoading(false);
  };

  // Input handler
  const inputChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    key: string
  ) => {
    if (key == "keynotes") {
      setBookForm((prev) => ({
        ...prev,
        [key]: e.target.value.split(","),
      }));
    } else {
      setBookForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    }
  };

  // error and success handling
  //   useEffect(() => {
  //     if (isError && error && "data" in error) {
  //       setIsAlertOpen(true);
  //       setAlertType("error");
  //       const error_messages = get_error_messages(error);
  //       setAlertMessages(error_messages);
  //     } else if (isSuccess) {
  //       setIsAlertOpen(true);
  //       setAlertType("success");
  //       setAlertMessages(new_book_data?.message);
  //     }
  //   }, [error, isError, isSuccess]);
  //   useEffect(() => {
  //     if (uploadError && uploadingError) {
  //       setIsAlertOpen(true);
  //       setAlertType("error");
  //     }
  //   });

  return (
    <div className="flex justify-center">
      <form
        onSubmit={formSubmitHandler}
        className={`my-4  md:mx-0 flex max-w-lg rounded-xl w-full flex-col gap-4 bg-[#FFFFFF] px-7 md:px-14 py-6`}
      >
        <h1 className="text-primary font-anton text-[20px] md:text-[30px] font-normal leading-[30px] md:leading-[50px] letter-spacing text-center">
          Add new book
        </h1>
        <div className="space-y-6 block relative">
          {/* Title */}

          {/* Description */}
          <TextArea
            placeHolder="W"
            currentValue={book_form.description}
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
