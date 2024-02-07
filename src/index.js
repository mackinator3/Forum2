import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
} from "react-router-dom";
import ErrorPage from "./Components/error-page";
import Anime from "./Components/Anime";
import StarWars from "./Components/StarWars"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/Anime",
        element: <Anime />,
        errorElement: <ErrorPage />
    },
    {
        path: "/StarWars",
        element: <StarWars />,
        errorElement: <ErrorPage />
    },
    { basename: "/base" }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
