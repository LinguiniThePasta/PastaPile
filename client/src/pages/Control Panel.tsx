import React, {useState} from "react";
import ArchiveArticle from "../components/ArchiveArticle.tsx";

function ControlPanel() {
    const [buttonChosen, setButtonChosen] = useState(-1);
    //TODO: Make it so that the respective interfaces pop out when called
    //TODO: If you try to change the option while you've made changes in the current option, give them a warning that everything will be lost
    return (
        <>
            <div className={"h-44"}></div>
            <div className={"flex justify-center text-5xl font-bold py-10"}>
                Welcome, Lingyu! Choose what to do:
            </div>
            <div className={"h-20"}></div>
            <div className={"flex justify-center items-center"}>
                <button onClick={setButtonChosen(0)} className={"rounded-lg px-6 py-4 font-inter text-lg mx-10 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"}>Delete Post</button>
                <button onClick={setButtonChosen(1)} className={"rounded-lg px-6 py-4 font-inter text-lg mx-10 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"}>Edit Post</button>
                <button onClick={setButtonChosen(2)} className={"rounded-lg px-6 py-4 font-inter text-lg mx-10 transition-all delay-75 duration-300 ease-in-out ring-2 ring-gray-200 hover:outline-none hover:ring-2 hover:ring-black"}>Add Post</button>
            </div>
            <div>
                <ArchiveArticle />
            </div>
        </>
    )
}
export default ControlPanel
