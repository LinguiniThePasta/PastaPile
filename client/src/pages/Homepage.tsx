import Navbar from "../components/Navbar.tsx";
import Banner from "../components/Banner.tsx";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect, useState } from "react";
import {sampleArticles} from "../utils/sampleArticles.ts";
import {baseURL} from "../utils/config.ts";
import featureRandom from "../utils/featureRandom.ts";

function Homepage() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function fetchProjects() {
            try {
                console.log("pppb");
                //use ${baseUrl}/blogdb/ when you're ready to host this online or something
                const response = await fetch(`${baseURL}/blogdb/`, {
                    method: "GET",
                    headers: {},
                }).then(resp => resp.json());


                // if (!response.ok) {
                //     const text = await response.text();
                //     console.error('Bad response:', text);
                //     return;
                // }
                //console.log("ccc: ", response);
                // //below is testing code to see what the text of the response is.
                const records = await response;
                setProjects(records);
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            }
        }
        fetchProjects();
    }, [projects.length]);

    console.log('Sample Article: ', sampleArticles[0]);
    console.log('Project: ', projects[0]);

    return (
        <>
            <Navbar />
            <div className={"w-full"}>
                {projects.length > 0 &&
                    <Banner Articles={projects[featureRandom(projects.length)]} />
                }
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
