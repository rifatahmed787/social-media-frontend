import { useAppDispatch, useAppSelector } from "@/hooks/reduxHook";
import { useCookies } from "react-cookie";
import { userLoggedOut } from "@/redux/features/auth/authSlice";
import Image from "next/image";
import ICONS from "@/Shared/AllIcons";
import Button from "../Button";

const Account = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [_cookies, _setCookie, removeCookie] = useCookies(["auth_details"]);

  // handle logout
  const handleLogout = () => {
    dispatch(userLoggedOut());
    // dispatch(apiSlice.util.invalidateTags(["courseVideos"]));
    removeCookie("auth_details", { path: "/" });
  };

  return (
    <>
      <Button
        onClickHandler={handleLogout}
        className="  text-white bg-primary px-4  py-2 "
        title="Log Out"
      />
    </>
  );
};

export default Account;
