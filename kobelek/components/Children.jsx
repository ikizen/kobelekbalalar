// import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Flex } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

function Children() {
  const children = [
    {
      name: 'Кан Полина',
      text: 'Здравствуйте! Меня зовут Кан Полина.',
      img: '/img/children/child1.JPG',
    },
    {
      name: 'Кан Татьяна',
      text: 'Здравствуйте! Меня зовут Кан Татьяна.',
      img: '/img/children/child2.JPG',
    },
    {
      name: 'Нурмуканова Танзиля',
      text: 'Здравствуйте! Меня зовут  Нурмуканова Танзиля.',
      img: '/img/children/child3.JPG',
    },
    {
      name: 'Жарылкосынова Нурзере',
      text: 'Здравствуйте! Меня зовут Жарылкосынова Нурзере.',
      img: '/img/children/child4.JPG',
    },
    {
      name: 'Анапия Манзура',
      text: 'Здравствуйте! Меня зовут Анапия Манзура.',
      img: '/img/children/child5.JPG',
    },
    {
      name: 'Игнатенко Александра ',
      text: 'Здравствуйте! Меня зовут Игнатенко Александра.',
      img: '/img/children/child6.JPG',
    },
  ];
  return (
    <div className="pb-[100px]">
      <div className="text-[32px] text-center md:text-left font-bold md:font-normal md:text-[50px]">
        Наши дети-бабочки
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-4 lg:gap-[40px] pt-6">
        {children.map((child) => (
          <Card
            key={child.name}
            width={['auto', 300, 300]}
            height="380px"
            rounded="30px"
            background="#e89361"
            className="w-auto"
          >
            <CardBody>
              <Flex justify="center" direction="column" align="center">
                <Image
                  src={child.img}
                  alt={child.name}
                  rounded="full"
                  width="200px"
                  height="200px"
                  className="mt-[20px] shadow"
                />
                <Text className="pt-4 text-center text-[28px] font-bold text-white">
                  {child.name}
                </Text>
                {/* <Text className="py-4 text-[18px] text-center text-white">
                  {child.text}
                </Text> */}
              </Flex>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Children;
