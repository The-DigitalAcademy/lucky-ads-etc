import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    // <Router>
    //   <Topbar />
    //   <Switch>
    //     <Route exact path="/">
    //       <Homepage />
    //     </Route>
    //     <Route path="/posts">
    //       <Homepage />
    //     </Route>
    //     <Route path="/register">
    //       {currentUser ? <Homepage /> : <Register />}
    //     </Route>
    //     <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
    //     <Route path="/post/:id">
    //       <Single />
    //     </Route>
    //     <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
    //     <Route path="/settings">
    //       {currentUser ? <Settings /> : <Login />}
    //     </Route>
    //   </Switch>
    // </Router>

    <div className="App">
    <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lucky-ads-etc" element={<Homepage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Register />} />
        <Route path="/about" element={<Sidebar />} />
      </Routes>
    </div>

  );
}

export default App;
