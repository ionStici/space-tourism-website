import { Outlet } from "react-router-dom";
import { NavBar } from "./nav-bar";

export function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
