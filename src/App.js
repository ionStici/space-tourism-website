import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import { Root } from './Root';
import { Home } from './Home';
import { Destinations } from './components/Destinations';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />

            <Route path="/destination" element={<Destinations />} />
            <Route path="/destination/:planet" element={<Destinations />} />

            <Route path="/crew" element={<Home />} />
            <Route path="/technology" element={<Home />} />
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
