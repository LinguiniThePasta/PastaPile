import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import Contact from "../components/Contact.tsx";

function AboutMe() {
    return (
        <>
            <Navbar />
            <div className={"flex flex-col align-middle md:items-center md:flex-row md:justify-between bg-gray-100 py-10"}>
                <div className={"flex-col pl-28 md:pl-40 pb-10"}>
                    <div className={"text-5xl w-2/3 text-center md:text-left font-bold py-12"}>Hi, I'm Lingyu</div>
                    <div className={"w-2/3 text-center md:text-left"}>
                        I'm a junior at Purdue University working on my Computer Science Degree.
                        This page is made so I can showcase all of my personal projects in tech,
                        as well as just misc projects that I do in other fields.
                    </div>
                </div>
                <div className={"pl-28 md:pl-0 w-4/5 lg:w-3/5 md:mr-11 lg:mr-64  transition-all delay-75 duration-300 hover:scale-90"}>
                    <img src={"../src/assets/ProfilePicture.jpg"}  className={"rounded-lg"} alt="Profile" />
                </div>
            </div>


            <div className={"flex flex-col items-center md:items-end md:justify-end md:pr-20 xl:pr-64 py-24 transition-all delay-75 duration-300"}>
                <div className={"text-center pb-5 md:text-right text-5xl font-bold pb-1/10 transition-all delay-75 duration-300"}>Interests</div>
                <div className={"w-1/3 text-center md:text-right transition-all delay-75 duration-300"}>
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
