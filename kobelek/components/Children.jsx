// import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
};

function Children() {
    const children = [
        {
            name: "Кан Полина",
            text: "Здравствуйте уважаемые работники фонда. Я мама Кан Полины Евгеньевны из г Тараза, обращаюсь к Вам с криком о помощи.",
            img: "/img/children/child1.png",
        },
        {
            name: "Кудинова Ангелина",
            text: "Здравствуйте. Пишет Вам Юркова Александра Витальевна (22.09.1984), проживающая в городе Павлодар.",
            img: "/img/children/child2.png",
        },
        {
            name: "Александра Игнатенко",
            text: "Меня зовут Евгения Игнатенко. Я мама девочки-бабочки Игнатенко Александры. Наша доченька родилась 1 сентября 2012 года.",
            img: "/img/children/child3.png",
        },
        {
            name: "Сидиров Тимур",
            text: "Здравствуйте ,я мама Сидирова Тимура 07.02.2014 года. .Беременность проходила хорошо, когда я родила он крикнул сразу, с весом 3,400кг.",
            img: "/img/children/child4.png",
        },
        {
            name: "Понеполяк Михаил",
            text: "Здравствуйте! Меня зовут Мари­йя. Я мама ребенка ­с врождённым Рецессивн­о Дистрофическим булл­ёзным эпидермолизом.",
            img: "/img/children/child5.png",
        },
        {
            name: "Райкова Ольга",
            text: "Здравствуйте! Меня зовут Райкова Олеся. У меня есть дочь Райкова Ольга. Живём мы г.Семей, Восточно-Казахстанской области. Дочь родилась 5 сентября 2008 года. Это первый и единственный мой ребёнок.",
            img: "/img/children/child6.png",
        },
    ];
    return (
        <div className="pb-[100px]">
            <div className="text-[32px] text-center md:text-left font-bold md:font-normal md:text-[50px]">
                Наши дети-бабочки
            </div>
            <div className="flex flex-wrap justify-between gap-6 lg:gap-[40px] pt-6">
                {children.map((child) => (
                    <Card
                        key={child.name}
                        width={["fit-content", 320, 370]}
                        height="540px"
                        rounded="30px"
                        background="#e89361"
                        className="w-fit"
                    >
                        <CardBody>
                            <Flex
                                justify="center"
                                direction="column"
                                align="center"
                            >
                                <Image
                                    src={child.img}
                                    alt={child.name}
                                    rounded="full"
                                    width="220px"
                                    height="220px"
                                />
                                <Text className="pt-4 text-[28px] font-bold text-white">
                                    {child.name}
                                </Text>
                                <Text className="py-4 text-[18px] text-center text-white">
                                    {child.text}
                                </Text>
                            </Flex>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Children;
