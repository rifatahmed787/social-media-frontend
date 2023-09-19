import { ReactNode } from "react";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar/Navbar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      <div className="flex-grow">{children}</div>

      {/* footer */}
      <div className="mt-auto ">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
