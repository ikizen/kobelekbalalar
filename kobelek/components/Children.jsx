// import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

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
            <div className="text-[50px]">Наши дети-бабочки</div>
            <div className="flex flex-wrap justify-between gap-[40px] pt-6">
                {children.map((child) => (
                    <Card
                        // boxShadow="dark-lg"
                        key={child.name}
                        width="370px"
                        height="540px"
                        rounded="30px"
                        background="#e89361"
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
                    // <div
                    //     key={child.name}
                    //     className="flex flex-col w-[360px] h-[520px] bg-white p-4 drop-shadow-child rounded-[30px]"
                    // >
                    //     <Image
                    //         src={child.img}
                    //         alt={child.name}
                    //         width={250}
                    //         height={165}
                    //         className="flex self-center pt-2 rounded-[30px]"
                    //     />
                    //     <div className="pt-4 text-[22px]">{child.name}</div>
                    //     <div className="pt-2 text-[16px]">{child.text}</div>
                    // </div>
                ))}
            </div>
        </div>
    );
}

export default Children;
