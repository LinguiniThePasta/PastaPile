import React from "react";

function Contact() {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = {
            email: email,
            message: message
        }
        //Send the email to me
        console.log("sent to: " + email + ", message: " + message);
    }
    return (
        <>
            <div className={"pl-40 flex-col bg-gray-100"}>
                <form onSubmit={handleSubmit}>
                    <div className={"text-5xl font-bold py-10"}>Contact Me!</div>
                    <div className={"py-10"}>
                        <input onChange={event => setEmail(event.target.value)} className={"w-96 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} type={"email"} placeholder={"Email"}/>
                    </div>
                    <div className={""}>
                        <textarea onChange={event => setMessage(event.target.value)} className={"w-96 h-44 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} placeholder={"Your Message Here"}/>
                    </div>
                    <button className={"rounded-lg px-6 py-4 font-inter text-lg my-10 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"}>Contact Me</button>
                </form>
            </div>
        </>
    )
}

export default Contact;