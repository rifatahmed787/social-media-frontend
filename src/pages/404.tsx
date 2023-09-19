import Link from "next/link";
import styles from "../styles/ErroprPages.module.css";
import { useRouter } from "next/router";
import { Button } from "flowbite-react";

const ErrorPage = () => {
  const router = useRouter();

  // setTimeout(() => {
  //   router.push("/");
  // }, 5000);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h3 className="font-semibold text-2xl py-2 text-center ">Error</h3>
        <h1
          className={`font-semibold text-5xl py-2 text-center ${styles.error}`}
        >
          404
        </h1>
        <div className="font-semibold text-2xl py-2 text-center">
          Ooops!!! The page is not found
        </div>
        <Link href="/" className="back-home flex justify-center mt-2">
          <Button>Back To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
