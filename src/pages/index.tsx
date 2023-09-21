import { ReactElement } from "react";

import { NextPageWithLayout } from "./_app";
import AddPostForm from "@/components/AddPost/AddPostForm";
import RootLayout from "@/components/Layouts/RootLayout";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="mt-20">
      <AddPostForm />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
