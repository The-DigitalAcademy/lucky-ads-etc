import Post from "./components/post/Post";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App(){
    return(
<Router>
    <TopBar/>
    <Switch>
    <Route path="/" exact component={Home} />
            <Post/>
            
    </Switch>
           
</Router>
        
            
       
    );
}


export default App;


