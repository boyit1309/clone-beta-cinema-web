import "./bootstrap.min.css";
import "antd/dist/antd.min.css";
import DefaultLayout from "./layout/DefaultLayout";
import HomePageLayout from "./layout/HomePageLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./config/appRouter";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <AppRouters />; */}
          {publicRoutes.map((route, index) => {
            const Layout =
              route.layout === null
                ? Fragment
                : route.layout === "HomePageLayout"
                ? HomePageLayout
                : DefaultLayout;

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                exact
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
