import NavigationBar from "../components/NavigationBar";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

export default {
    navigation: {
        path: '/',
        element: <NavigationBar />,
    },
    homepage: {
        path: '/',
        element: <HomePage />,
    }
}

export const errorElement = <ErrorPage />;