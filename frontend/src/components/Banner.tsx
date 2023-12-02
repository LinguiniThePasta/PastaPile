function Banner( {Articles: article} ) {
    return (
        <>
            <div className="bg-gray-100 relative flex justify-between items-stretch overflow-hidden min-h-[500px] max-h-[700px]">
                <div className="absolute flex flex-col justify-center text-5xl bg-gray-100 break-words w-2/5 hover:w-3/5 transition-all delay-75 duration-200 ease-in-out p-4 z-10 h-full">
                    <span>{article.Title}</span>
                </div>
                <span className="absolute right-0 bg-transparent z-0"><img src={article.Picture}/></span>
            </div>
        </>
    )
}
export default Banner;
