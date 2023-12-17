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
            try {
                console.log("pppb");
                const response = await fetch("http://localhost:5000/blogdb/", {
                    method: "GET",
                    headers: {},
                });

                if (!response.ok) {
                    const text = await response.text();
                    console.error('Bad response:', text);
                    return;
                }
                //below is testing code to see what the text of the response is.
                const text = await response.text();
                console.log('Bad response:', text);
                const records = await response.json();
                console.log("ccc: " + records);
                setProjects(records);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
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
