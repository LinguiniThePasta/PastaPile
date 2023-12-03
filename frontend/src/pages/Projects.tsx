import Navbar from "../components/Navbar.tsx";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
// @ts-ignore
import Articles from "Homepage.tsx";
import {sampleArticles} from "../utils/sampleArticles.ts";
function Projects() {
    return (
        <>
            <Navbar />
            <div className={"py-6"}></div>
            <span className={"flex justify-center text-5xl font-bold"}>All of my Articles</span>
            {sampleArticles.map((article) => {
                return (
                    <>
                        <div className={"py-6"}></div>
                        <Card Articles={article} />
                    </>
                );
            })}
            <Footer />
        </>
    )
}

export default Projects;