import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
    console.log("useEffect runs!");
  }, []);
  return (
    <div>
      <h1>Not found </h1>
      <Link href="/">
        <a>back to homepage</a>
      </Link>
    </div>
  );
};

export default NotFound;
