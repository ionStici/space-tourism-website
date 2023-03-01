import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import { Root } from './Root';
import { Home } from './components/Home';
import { Destinations } from './components/Destinations';
import { Crew } from './components/Crew';
import { Technology } from './components/Technology';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />

            <Route path="/destination" element={<Destinations />} />
            <Route path="/destination/:planet" element={<Destinations />} />

            <Route path="/crew" element={<Crew />} />
            <Route path="/crew/:member" element={<Crew />} />

            <Route path="/technology" element={<Technology />}>
                <Route path="launch" element={<Technology />} />
                <Route path="spaceport" element={<Technology />} />
                <Route path="capsule" element={<Technology />} />
            </Route>
        </Route>
    )
);

export default function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
