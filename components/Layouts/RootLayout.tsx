import { ReactNode } from "react";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar/Navbar";
import { Provider } from "react-redux";
import store from "@/redux/store";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      {/* navbar */}
      <div>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </div>
      <div className="h-screen">{children}</div>

      {/* footer */}
      <div className="mt-auto ">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
