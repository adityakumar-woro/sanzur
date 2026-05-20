import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NewsPage } from "./pages/NewsPage";
import { NewsArticlePage } from "./pages/NewsArticlePage";
import { ServicesPage } from "./pages/ServicesPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { PortfolioDetailPage } from "./pages/PortfolioDetailPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ArchivePage } from "./pages/ArchivePage";
import "./index.css";
import "../taillwind.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/archive",
    element: <ArchivePage />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetailPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/portfolio/:slug",
    element: <PortfolioDetailPage />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/blogs",
    element: <NewsPage />,
  },
  {
    path: "/blogs/:id",
    element: <NewsArticlePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
