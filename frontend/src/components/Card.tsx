// @ts-ignore
function Card( {Articles: article} ) {
    return (
        <>
            <a href={article.URL} className="flex rounded-lg mx-auto bg-gray-100 h-44 w-10/12 transform items-center justify-between outline-none ring-2 ring-gray-200 transition-all duration-200 ease-in-out hover:outline-none hover:ring-2 hover:ring-black hover:scale-105 hover:shadow-lg">
                <span className={"flex flex-col px-5"}>
                    <span className={"flex text-xl break-words pt-10 pb-5"}>{article.Title}</span>
                    <span className={"flex pb-5 text-gray-500"}>
                        <span className={"text-sm"}>{article.Text}</span>
                    </span>
                    <span className={"flex pb-10 justify-between"}>
                        <span className={"text-sm text-gray-500"}>{article.Date}</span>
                        <button className="text-sm font-bold">
                            <span className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300">Read More</span>
                        </button>
                    </span>
                </span>
                <span className={"p-4 pr-10 h-full"}><img src={article.Picture} className={"h-full w-full object-cover"}/></span>
            </a>
        </>
    )
}
export default Card;
