function Contact() {
    return (
        <>
            <div className={"pl-40 flex-col bg-gray-100"}>
                <div className={"text-5xl font-bold py-10"}>Contact Me!</div>
                <div className={"py-10"}>
                    <input className={"w-96 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} type={"email"} placeholder={"Email"}/>
                </div>
                <div className={""}>
                    <input className={"w-96 h-44 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} placeholder={"Your Message Here"}/>
                </div>
                <button className={"rounded-lg px-6 py-4 font-inter text-lg my-10 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"}>Contact Me</button>
            </div>
        </>
    )
}

export default Contact;