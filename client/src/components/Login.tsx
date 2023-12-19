import React from "react";
import {Link} from "react-router-dom";

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    //TODO: make it so that this component will hover over the About Me Page
    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        //TODO: Go to backend, send a request to firebase, if not correct, give an error, otherwise send me to control panel
    }
    return (
        <>
            <div id={"loginPage"} className={"flex justify-center invisible"}>
                <div className={"absolute bg-gray-900 opacity-50 w-full h-full"}></div>
                <div className={"absolute flex-col my-8 bg-gray-100 w-1/3 rounded-3xl h-5/6"}>
                    <div className={"flex justify-end p-5"}>
                        <button className={""}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className={"flex-col items-center"}>
                        <div className={"flex text-5xl font-bold pt-5 pb-5 text-center "}>Whoops, you aren't meant to be here, unless you're me, of course</div>
                        <div className={"flex justify-center py-10"}>
                            <input onChange={event => setUsername(event.target.value)} className={"w-96 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} type={"text"} placeholder={"Username"}/>
                        </div>
                        <div className={"flex justify-center"}>
                            <input onChange={event => setPassword(event.target.value)} className={"w-96 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"} placeholder={"Password"}/>
                        </div>
                        <div className={"flex justify-center"}>
                            <button className={"rounded-lg px-6 py-4 font-inter text-lg my-10 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"}>Log In</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
export default Login;