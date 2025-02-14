import Footer from "@components/Footer";
import Header from "@components/Header";
import cn from "classnames";
import { Outlet } from "react-router";
import "./styles.css";

type Props = {
  fullWidth?: boolean;
};

const Layout = ({ fullWidth }: Props) => {
  return (
    <>
      <div className="layout">
        <Header />

        <main className={cn("layout__content", { ["layout__content--full-width"]: fullWidth })}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
