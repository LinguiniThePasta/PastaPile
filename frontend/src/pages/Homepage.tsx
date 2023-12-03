import Navbar from "../components/Navbar.tsx";
import Banner from "../components/Banner.tsx";
import Card from "../components/Card.tsx";
import Footer from "../components/Footer.tsx";
import {sampleArticles} from "../utils/sampleArticles.ts";

function Homepage() {
    return (
        <>
            <Navbar />
            <div className={"w-full"}>
                <Banner Articles={sampleArticles[1]} />
            </div>
            <div className={"py-6"}></div>
            <span className={"flex justify-center text-2xl font-bold"}>Articles You Might Be Interested In:</span>
            {sampleArticles.map((article) => {
                return (
                    <>
                        <div className={"py-6"}></div>
                        <Card Articles={article} />
                    </>
                );
            })}
            <Footer />
        </>
    )
}
export default Homepage;