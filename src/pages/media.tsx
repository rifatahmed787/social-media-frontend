import RootLayout from "@/components/Layouts/RootLayout";
import Media from "@/components/Media/Media";
import { ReactElement } from "react";

const media = () => {
  return (
    <div className="">
      <Media />
    </div>
  );
};

export default media;

media.getLayout = function getLayout(page: ReactElement) {
  // eslint-disable-next-line react/jsx-no-undef
  return <RootLayout>{page}</RootLayout>;
};
