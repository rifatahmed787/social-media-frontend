import google from "../../src/assets/google.png";
import apple from "../../src/assets/apple.png";
import Image from "next/image";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className=" bg-gray-900 rounded-tl-[150px]">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3"> Download our SocialInk app </h3>
          <p> Stay connect. All day, every day. </p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
              <Image src={google} width={20} height={15} alt={""} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base"> Google Play Store </p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
              <Image src={apple} width={20} height={15} alt={""} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on </p>
                <p className="text-sm md:text-base"> Apple Store </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <span className="block text-sm text-gray-500 sm:text-center">
            Copyright &copy; {getCurrentYear()}{" "}
            <a href="#" className="hover:underline font-bold text-secondary">
              SocialInk™
            </a>
            . All Rights Reserved.
          </span>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
