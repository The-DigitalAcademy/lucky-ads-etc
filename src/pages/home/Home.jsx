import Header from "../../components/Header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Homepage() {

  return (
    <>
      <Header />
      <div className="home">
        <Posts/>
        <Sidebar />
      </div>
    </>
  );
}
