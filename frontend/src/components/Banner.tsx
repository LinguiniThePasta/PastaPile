// @ts-ignore
import TruncateText from "../utils/TextUtils.ts";

function Banner({Articles: article} ) {
    return (
        <>
            <div className="bg-gray-100 relative flex justify-between items-stretch overflow-hidden min-h-[500px] max-h-[700px]">
                <span className="absolute flex flex-col pl-32 justify-center bg-gray-100 break-words w-2/4 hover:w-3/4 transition-all delay-150 duration-200 ease-in-out p-4 z-10 h-full">
                    <span className={"text-5xl"}>{article.Title}</span>
                    <span className={"text-lg py-5 text-gray-500"}>{TruncateText(article.Text, 350)}...</span>
                    <span className={"flex pb-10"}>
                        <span className={"text-sm text-gray-500"}>{article.Date}</span>
                        <button className={"text-sm font-bold pl-10 relative"}>
                          <span className={"relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"}>Read More</span>
                        </button>
                    </span>
                </span>
                <span className="absolute right-0 bg-transparent z-0"><img src={article.Picture}/></span>
            </div>
        </>
    )
}
export default Banner;
