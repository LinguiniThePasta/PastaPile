// @ts-ignore
import TruncateText from "../utils/TextUtils.ts";

// @ts-ignore
function Card({Articles: article} ) {
    return (
        <>
            <a href={article.url} className="flex rounded-lg mx-auto bg-gray-100 h-44 w-10/12 transform items-center justify-between outline-none ring-2 ring-gray-200 transition-all duration-200 ease-in-out hover:outline-none hover:ring-2 hover:ring-black hover:scale-105 hover:shadow-lg">
                <span className={"flex flex-col px-5"}>
                    <span className={"flex text-xl break-words pt-10 pb-5"}>{article.title}</span>
                    <span className={"flex pb-5 text-gray-500"}>
                        <span className={"text-sm"}>{TruncateText(article.body, 250)}...</span>
                    </span>
                    <span className={"flex pb-10"}>
                        <span className={"text-sm text-gray-500"}>{article.date}</span>
                        <button className="text-sm font-bold px-10">
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">Read More</span>
                        </button>
                    </span>
                </span>
                <span className={"p-4 pr-10 h-full"}><img src={article.picture} className={"h-full w-full object-cover"}/></span>
            </a>
        </>
    )
}
export default Card;
