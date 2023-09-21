import RootLayout from "@/components/Layouts/RootLayout";
import FullMediaDetails from "@/components/MediaDetails/FullMediaDetails";
import React, { ReactElement } from "react";

const MediaId = () => {
  return (
    <div className="mt-16">
      <FullMediaDetails />
    </div>
  );
};

export default MediaId;

MediaId.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
