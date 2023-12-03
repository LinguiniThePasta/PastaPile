import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import Contact from "../components/Contact.tsx";

function AboutMe() {
    return (
        <>
            <Navbar />
            <div className={"flex justify-between items-center bg-gray-100 py-10"}>
                <span className={"flex-col pl-40"}>
                    <div className={"flex text-5xl font-bold py-12"}>Hi, I'm Lingyu</div>
                    <div className={"w-2/3"}>
                        I'm a junior at Purdue University working on my Computer Science Degree.
                        This page is made so I can showcase all of my personal projects in tech,
                        as well as just misc projects that I do in other fields.
                    </div>
                </span>
                <span className={"mr-64"}>
                    <img src={"../src/assets/ProfilePicture.jpg"}  className={"rounded-lg"} alt="Profile" />
                </span>
            </div>
            <div className={"flex flex-col items-end justify-end pr-64 py-24 "}>
                <div className={"text-5xl font-bold pb-10"}>Interests</div>
                <div className={"w-1/3 text-right"}>
                    I'm interested in Computer Graphics, Operating Systems, Machine Learning, and Game Development.
                    I'm always open to learning new technologies, and as of December 2023, I'm trying to move more into standalone
                    application development. I'm looking to learn more about OpenGL, OS Dev, and Unity.
                    I am eager to apply these skills in future projects and contribute to the advancement of the technology landscape.
                </div>
            </div>

            <Contact />
            <Footer />

        </>
    )
}

export default AboutMe;
