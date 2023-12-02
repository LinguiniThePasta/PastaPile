import './App.css'
import Navbar from "./components/Navbar.tsx";
import Banner from "./components/Banner.tsx";
interface Articles {
    Title: string;
    Picture: string;
}
function App() {
    let art: Articles = {
        Title: "asdfasasdffffffffffffasdsfasdfsdasdfasdfadfadsfdshsfdghertyhfgbdfadsf",
        Picture: "https://images.thedirect.com/media/article_full/gumball.jpg",
    };
  return (
    <>
        <Navbar></Navbar>
        <div className={"w-full"}>
            <Banner Articles={art}></Banner>
        </div>
    </>
  )
}

export default App
