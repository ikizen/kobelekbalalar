import Header from "/components/Header/Header.jsx";
import Footer from "/components/Footer.jsx";
import Image from "next/image";
const news = [
    {
        photo: "/news1.jpg",
        title: "Сотрудничество с Российским благотворительным фондом «Дети-бабочки»",
        text1: "Фонд «Kobelek Balalar» начинает сотрудничество с Российским благотворительным фондом «Дети-бабочки» ",
        text2: "Друзья, спешим поделиться с вами радостной новостью! Наш фонд заключил меморандум о сотрудничестве и взаимопомощи с российским благотворительным фондом «Дети-бабочки». Он помогает детям, страдающим генетическими заболеваниями кожи – буллезным эпидермолизом и ихтиозом.",
    },
];
function News() {
    return (
        <>
            <div className="min-h-screen px-[15px] md:px-[30px] lg:px-[100px] xl:px-[200px] 2xl:px-[300px]">
                <Header />
                <h1 className="h1">Новости</h1>
                <br />
                <div>
                    {news.map((news) => (
                        <div
                            key={news.title}
                            className="flex flex-col items-center md:flex-row gap-4 md:gap-10"
                        >
                            <Image
                                src={news.photo}
                                alt="photo"
                                height={340}
                                width={340}
                                className="w-auto h-[360px] md:w"
                            />
                            <div className="flex flex-col gap-2">
                                <h1 className="md:text-[36px] text-[24px] font-semibold ">
                                    {news.title}
                                </h1>
                                <div>{news.text1}</div>
                                <div>{news.text2}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default News;
