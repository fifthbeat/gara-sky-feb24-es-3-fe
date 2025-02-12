import Header from "@components/Header";
import { Outlet } from "react-router";
import cn from "classnames";
import "./styles.css";

type Props = {
  fullWidth?: boolean;
};

const Layout = ({ fullWidth }: Props) => {
  return (
    <div className="layout">
      <Header />

      <main className={cn("layout__content", "container-wrapper", fullWidth ? "layout__content--full-width" : "")}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
