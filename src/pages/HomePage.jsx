import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    console.log("[Mounted] HomePage");
    return () => {
      console.log("[Unmounted] HomePage");
    };
  }, []);
  return <h2>This is Home Page</h2>;
};
export default HomePage;
