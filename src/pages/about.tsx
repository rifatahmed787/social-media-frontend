import { ReactElement } from "react";
import RootLayout from "../../components/Layouts/RootLayout";

const about = () => {
  return (
    <div className="mt-16">
      <h1 className="text-5xl">This is about seciton</h1>
    </div>
  );
};

export default about;

about.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
