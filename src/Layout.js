import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div id="layout">
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
