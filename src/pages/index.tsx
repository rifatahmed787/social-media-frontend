import { ReactElement } from "react";
import RootLayout from "../../components/Layouts/RootLayout";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="mt-16">
      <h1 className="text-5xl">Home page</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
