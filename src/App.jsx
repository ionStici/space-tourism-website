import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Crew } from "./pages/Crew";
import { Destinations } from "./pages/Destinations";
import { Home } from "./pages/Home";
import { Technology } from "./pages/Technology";
import "./styles/index.css";
import { Layout } from "./ui/layout";
import { LaunchVehicle1, Space3, Spaceport2 } from "./ui/technologies";
import { paths } from "./data/paths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={paths.home} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={paths.destination} element={<Destinations />} />
      <Route path={paths.destination + "/:planet"} element={<Destinations />} />
      <Route path={paths.crew} element={<Crew />} />
      <Route path={paths.crew + "/:member"} element={<Crew />} />
      <Route path={paths.technology} element={<Technology />}>
        <Route path="launch" element={<LaunchVehicle1 />} />
        <Route path="spaceport" element={<Spaceport2 />} />
        <Route path="space" element={<Space3 />} />
      </Route>
      <Route path={paths.technology + "/:backup"} element={<Technology />} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}
