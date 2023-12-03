import Navbar from "../components/Navbar.tsx";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
// @ts-ignore
import Articles from "Homepage.tsx";
function Projects() {
    let art: Articles = {
        URL: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
        Title: "asdfasasdffffffffffffasdsfasdfsdasdfasdfadfadsfdshsfdgherty",
        Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis euismod velit vitae mollis. In mauris dui, vehicula id lacus ut, sagittis sodales justo. Pellentesque enim massa, ultrices eget purus eget, ",
        Picture: "https://images.thedirect.com/media/article_full/gumball.jpg",
        Date: "10 May 2023"
    };
    return (
        <>
            <Navbar />
            <div className={"py-6"}></div>
            <span className={"flex justify-center text-5xl font-bold"}>All of my Articles</span>
            <div className={"py-6"}></div>
            <Card Articles={art} />
            <div className={"py-6"}></div>
            <Card Articles={art} />
            <div className={"py-6"}></div>
            <Card Articles={art} />
            <div className={"py-6"}></div>
            <Card Articles={art} />
            <div className={"py-6"}></div>
            <Card Articles={art} />
            <div className={"py-6"}></div>
            <Card Articles={art} />
            <div className={"py-6"}></div>
            <Card Articles={art} />
            <Footer />
        </>
    )
}

export default Projects;