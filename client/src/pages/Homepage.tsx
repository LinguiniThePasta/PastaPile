import Navbar from "../components/Navbar.tsx";
import Banner from "../components/Banner.tsx";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect, useState } from "react";
import {sampleArticles} from "../utils/sampleArticles.ts";

function Homepage() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch(`http://localhost:5000/projects`, {
                method: "GET",
                headers: {},
            });
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const records = await response.json();
            console.log(records);
            console.log("hjoasdf");
            setProjects(records);
        }
        fetchProjects();
    }, [projects.length]);

    return (
        <>
            <Navbar />
            <div className={"w-full"}>
                <Banner Articles={sampleArticles[0]} />
            </div>
            <div className={"py-6"}></div>
            <span className={"flex justify-center text-2xl font-bold"}>Articles You Might Be Interested In:</span>

            {projects.map((project) => {
                return (
                    <>
                        <div className={"py-6"}></div>
                        <Card Articles={project} />
                    </>
                );
            })}

            <Footer />
        </>
    )
}

export default Homepage;
