import React from "react";
import {baseURL} from "../utils/config.ts";
import {Link} from "react-router-dom";
import SearchRes from "../pages/SearchRes.tsx";

function Searchbar() {
    const [searchText, setSearchText] = React.useState("");
    const [projects, setProjects] = React.useState([]);
    async function searchHandler(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            console.log("pppb");
            //use ${baseUrl}/blogdb/ when you're ready to host this online or something
            console.log(JSON.stringify(searchText));
            const response = await fetch(`${baseURL}/blogdb/search`, {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify( {searchText} )
            });
            console.log(response);

            //const records = await response.json();
            //setProjects(records);
        } catch (error) {
            console.error('Failed to fetch projects:', error);
        }
    }
    return (
        <>
            <form onSubmit={searchHandler}>
                <span className={"flex items-center justify-between"}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 p-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                    <input onChange={event => {setSearchText(event.target.value)}} className={" w-0 text-gray-900 text-md rounded-lg p-3 transition-all delay-75 duration-300 ease-in-out hover:outline-none hover:ring-2 hover:ring-black invisible md:visible md:w-48 lg:w-96"} placeholder={"Search..."}/>
                </span>
            </form>

        </>
    )
}
export default Searchbar;