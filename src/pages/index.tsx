import { ReactElement } from "react";
import RootLayout from "../../components/Layouts/RootLayout";
import { NextPageWithLayout } from "./_app";
import AddPostForm from "../../components/AddPost/AddPostForm";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="">
      <h1 className="text-5xl">Home page</h1>
      <AddPostForm />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
