import React from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { GlobalStyle } from './components/GlobalStyle';
import { Routes, Route, useNavigate } from "react-router-dom"

const WorksView = React.lazy(() => import("./Views/WorksView"));
const DashboardView = React.lazy(() => import("./Views/DashboardView"));
const BlogView = React.lazy(() => import("./Views/BlogView"));
const ContactView = React.lazy(() => import("./Views/ContactView"));

export const App = () => {
  const navigationData = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const navigate = useNavigate();

  return (
    <div className="App">
      <GlobalStyle />
      <Header navigationData={navigationData} />
      <body>
        <React.Suspense fallback={<h3>Loading ....</h3>}>
          <Routes>
            <Route path="/" element={<DashboardView />} />
            <Route path="/works" element={<WorksView />} />
            <Route path="/blog" element={<BlogView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="*" element={
              <div>
                <h1>Page not found</h1>
                <h1>ERROR 404</h1>
                <button onClick={() => navigate("/")}>Go to Homepage</button>
              </div>
            } />
          </Routes>
        </React.Suspense>
      </body>
      <Footer />
    </div>
  );
};

