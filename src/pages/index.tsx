import { ReactElement } from "react";
import RootLayout from "../../components/Layouts/RootLayout";
import { NextPageWithLayout } from "./_app";
import AddPostForm from "../../components/AddPost/AddPostForm";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="">
      <AddPostForm />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
