import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement } from "react";

const about = () => {
  return (
    <div className="mt-20 h-screen">
      <h1 className="text-5xl">This is about seciton</h1>
    </div>
  );
};

export default about;

about.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
