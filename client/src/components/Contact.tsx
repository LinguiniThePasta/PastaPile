import React from "react";
import { Link } from "react-router-dom";
import toggleLogin from "../utils/toggleLogin.ts";
import Login from "./Login.tsx";

function Contact() {
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    //TODO: Check if I'm already logged in, if I am, just skip the step of logging in and go straight to Control Panel
    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        //Send the email to me

        console.log("sent to: " + email + ", message: " + message);
    }
    return (
        <>
            <div className={"flex flex-col items-center md:items-start pl-10 md:pl-40 bg-gray-100 transition-all delay-75 duration-300"}>
                <form onSubmit={handleSubmit} className={"flex flex-col items-center md:items-start"}>
                    <div className={"text-center md:text-right text-5xl font-bold py-10 transition-all delay-75 duration-300"}>Contact <button type={"button"}>Me!</button></div>
                    <div className={"py-10 transition-all delay-75 duration-300"}>
                        <input onChange={event => setEmail(event.target.value)} className={"w-96 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} type={"email"} placeholder={"Email"}/>
                    </div>
                    <div className={"transition-all delay-75 duration-300"}>
                        <textarea onChange={event => setMessage(event.target.value)} className={"w-96 h-44 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} placeholder={"Your Message Here"}/>
                    </div>
                    <button className={"rounded-lg px-6 py-4 font-inter text-lg my-10 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"}>Contact Me</button>
                </form>
            </div>
        </>
    )
}

export default Contact;