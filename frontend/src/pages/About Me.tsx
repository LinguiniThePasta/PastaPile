import Navbar from "../components/Navbar.tsx";

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
            <div className={"py-6"}></div>
            <div className={"pl-40 flex-row-reverse pb-10"}>
                <div className={"flex text-5xl font-bold pb-10"}>Interests</div>
                <div className={"w-2/3"}>
                    I'm interested in Computer Graphics, Operating Systems, Machine Learning, and Game Development.
                    I'm always open to learning new technologies, and as of December 2023, I'm trying to move more into standalone
                    application development. I'm looking to learn more about OpenGL, OS Dev, and Unity.
                    I am eager to apply these skills in future projects and contribute to the advancement of the technology landscape.
                </div>
            </div>
            <div className={"pl-40 flex-col"}>
                <div className={"text-5xl font-bold pb-10"}>Contact Me!</div>
                <div className={"py-10"}>
                    <input className={"w-96 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} placeholder={"Email"}/>
                </div>
                <div className={""}>
                    <input className={"w-96 h-44 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} placeholder={"Your Message Here"}/>
                </div>
                <button className={"rounded-lg px-6 py-4 font-inter text-lg my-10 ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"}>Contact Me</button>
            </div>


        </>
    )
}

export default AboutMe;
