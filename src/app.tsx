import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { HomePage } from './pages/home'
import { TripDetailsPage } from './pages/trip-details'
import { NotFoundErrorPage } from "./pages/error-pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundErrorPage />
  },
  {
    path: '/trips/:tripId',
    element: <TripDetailsPage />
  }
]);

export function App() {
  return <RouterProvider router={router} />
}

