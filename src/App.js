import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import { Root } from './Root';
import { Home } from './Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="/destination" element={<Home />} />
            <Route path="/crew" element={<p>crew</p>} />
            <Route path="/technology" element={<p>technology</p>} />
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
