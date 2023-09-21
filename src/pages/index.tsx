import { ReactElement } from "react";

import { NextPageWithLayout } from "./_app";
import AddPostForm from "@/components/AddPost/AddPostForm";
import RootLayout from "@/components/Layouts/RootLayout";
import LatestThree from "@/components/Home/LatestThree";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="my-20">
      <AddPostForm />
      <LatestThree />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
