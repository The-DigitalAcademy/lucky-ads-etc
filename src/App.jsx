import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Sidebar from "./components/sidebar/Sidebar";

import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    
    <div className="App">
    <Topbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/lucky-ads-etc" element={<Homepage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Register />} />
        <Route path="/about" element={<Sidebar />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Post/:postId" element={<Single />} />
        
      </Routes>
    </div>

  );
}

export default App;
