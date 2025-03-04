import React, { Fragment, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import ModalOverLay from "./component/ModalOverLay";

import "./App.css";
import EmptyLayout from "./Layouts/EmptyLayout";
import { publicRouters } from "./routes/routes";
import { ScrolledPastContext } from "./component/Context/ScrolledPastProvder";

function App() {
  const { scrolledPast, bound } = useContext(ScrolledPastContext);

  return (
    <Router>
      <div className="App">
        <NavBar isFixed={true} scrolledPast={scrolledPast} bound={bound} />
        <Routes>
          {publicRouters.map((route, index) => {
            const Page = route.component;
            let Layout = EmptyLayout;

            if (route.layout) {
              Layout = route.layout;
            } else {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page {...route.props} />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
        {/* 
        // <Route path="/" element={<Home ref={ref} bound={bound} />} />
        //   <Route path="/profile" element={<Profile />} />
        //   <Route path="/projects" element={<Projects />} />
        //   <Route path="/stories" element={<Stories />} />
        //   <Route path="/chat" element={<Chat />} />
        //   <Route path="/temp" element={<ThreePicture />} />
        //   <Route path="/chatadmin" element={<ChatAdmin />} />
        // */}
        <ModalOverLay />
      </div>
    </Router>
  );
}

export default App;
