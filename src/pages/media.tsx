import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement } from "react";

const media = () => {
  return (
    <div className="mt-">
      <h1>This is media page</h1>
    </div>
  );
};

export default media;

media.getLayout = function getLayout(page: ReactElement) {
  // eslint-disable-next-line react/jsx-no-undef
  return <RootLayout>{page}</RootLayout>;
};
