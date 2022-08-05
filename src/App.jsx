import Post from "./components/post/Post";
import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/home/Home";


function App(){
    return(
        <>
            <TopBar/>
            <Homepage />
            <Post/>
        </>
    );
}


export default App;
