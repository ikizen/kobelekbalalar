import Header from "/components/Header/Header.jsx";
import Footer from "/components/Footer.jsx";
function Contacts() {
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
export default Contacts;
