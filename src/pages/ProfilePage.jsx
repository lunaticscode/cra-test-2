import { useEffect } from "react";

const ProfilePage = () => {
  useEffect(() => {
    console.log("[Mounted] ProfilePage");
    return () => {
      console.log("[Unmounted] ProfilePage");
    };
  }, []);
  return <h2>This is Profile Page</h2>;
};
export default ProfilePage;
