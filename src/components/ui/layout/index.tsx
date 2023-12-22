import "./Layout.scss";
import { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import LayoutFooter from "./LayoutFooter";
import LayoutHeader from "./LayoutHeader";

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;

  return (
    <>
      <LayoutHeader />
      <main className="layout">{children}</main>
      <LayoutFooter />
    </>
  );
};

export default Layout;
