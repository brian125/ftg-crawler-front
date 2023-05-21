import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const GeneralLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default GeneralLayout;