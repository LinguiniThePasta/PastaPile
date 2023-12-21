// @ts-ignore
import TruncateText from "../utils/TextUtils.ts";
// @ts-ignore
function Banner({Articles: article} ) {
    return (
        <>
            <div className="bg-gray-100 relative flex justify-between items-stretch overflow-hidden min-h-[500px] max-h-[700px]">
                <a href={article.url} className="absolute flex flex-col pl-32 justify-center bg-gray-100 break-words w-3/4 lg:w-2/4 lg:hover:w-3/4 transition-all delay-150 duration-200 ease-in-out p-4 z-10 h-full">
                    <span className={"text-5xl"}>{article.title}</span>
                    <span className={"text-lg py-5 text-gray-500 invisible w-0 h-0 md:visible md:w-auto md:h-auto"}>{TruncateText(article.body, 250)}...</span>
                    <span className={"flex pb-10"}>
                        <span className={"text-sm text-gray-500"}>{article.date}</span>
                        <button className={"text-sm font-bold pl-10 relative"}>
                          <span className={"relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"}>Read More</span>
                        </button>
                    </span>
                </a>
                <span className="absolute right-0 bg-transparent z-0 invisible w-0 h-0 lg:visible lg:w-auto lg:h-auto"><img src={article.picture}/></span>
            </div>
        </>
    )
}
export default Banner;
