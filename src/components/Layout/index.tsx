import Header from "@components/Header";
import { Outlet } from "react-router";
import cn from "classnames";
import "./styles.css";
import Footer from "@components/Footer";

type Props = {
  fullWidth?: boolean;
};

const Layout = ({ fullWidth }: Props) => {
  return (
    <div className="layout">
      <Header />

      <main className={cn("layout__content", { ["layout__content--full-width"]: fullWidth })}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
