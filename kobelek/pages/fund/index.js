import Header from "/components/Header/Header.jsx";
import Footer from "/components/Footer.jsx";
import FundInfo from "../../components/Fund/FundInfo";
function Fund() {
    return (
        <>
            <div className="min-h-screen px-[15px] md:px-[30px] lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
                <Header />
                <FundInfo />
            </div>
            <Footer />
        </>
    );
}
export default Fund;
