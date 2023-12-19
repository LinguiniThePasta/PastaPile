import Navbar from "../components/Navbar.tsx";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
// @ts-ignore
import Articles from "Homepage.tsx";
import {sampleArticles} from "../utils/sampleArticles.ts";
import {useEffect, useState} from "react";
import {baseURL} from "../utils/config.ts";
function Projects() {
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

    return (
        <>
            <Navbar />
            <div className={"py-6"}></div>
            <span className={"flex justify-center text-5xl font-bold"}>All of my Articles</span>
            {projects.map((article) => {
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