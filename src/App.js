import "./App.css";
import React, { useState } from "react";
import SideMenu from "./Components/SideMenu/SideMenu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

const Content = () => {
  return <h1>Content</h1>;
};

const Courses = () => {
  return <h1>Content/Courses</h1>;
};

const Videos = () => {
  return <h1>Content/Videos</h1>;
};

const Design = () => {
  return <h1>Design</h1>;
};

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/content" component={Content} />
            <Route exact path="/content/courses" component={Courses} />
            <Route exact path="/content/videos" component={Videos} />
            <Route exact path="/design" component={Design} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
