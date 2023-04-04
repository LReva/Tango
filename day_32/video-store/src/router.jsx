import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Inventory from "./components/Inventory";
import Details, {filmLoad} from "./components/Details"

const router = createBrowserRouter([
    {
        path: "/",
        element: < App />,
        children: [
            {
                index: true,
                element: <Inventory/>,
            },
            {
                path: "film/:id",
                element: < Details/>,
                loader:filmLoad
            }
        ],
    },
]);

export default router;