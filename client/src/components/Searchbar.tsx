import React from "react";
import {baseURL} from "../utils/config.ts";
import {Link, useNavigate} from "react-router-dom"; // import useNavigate
import SearchRes from "../pages/SearchRes.tsx";

function Searchbar() {
    const [searchText, setSearchText] = React.useState("");
    const [projects, setProjects] = React.useState("");
    const navigate = useNavigate(); // use useNavigate instead of useHistory

    async function searchHandler(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            console.log("pppb");
            const response = await fetch(`${baseURL}/blogdb/search`, {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(searchText)
            }).then(resp => resp.json());

            const records = await response;
            setProjects(records);

            // navigate to the SearchRes page with projects as a state parameter
            navigate('/SearchRes', { state: { projects: records } }); // use navigate function
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
