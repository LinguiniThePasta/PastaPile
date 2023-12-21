import Navbar from "../components/Navbar.tsx";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
function Projects(props) {
    const projects = props.location.state.projects;
    return (
        <>
            <Navbar />
            <div className={"py-6"}></div>
            <span className={"flex justify-center text-5xl font-bold"}>All of my Articles</span>
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

export default Projects;