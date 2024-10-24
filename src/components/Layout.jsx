import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/")}>go Home</button>
      <button onClick={() => navigate("/profile")}>go Profile</button>
      <Outlet />
    </>
  );
};
export default Layout;
