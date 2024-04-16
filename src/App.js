import React, { useState } from 'react';
import MyCard from './myComponent/myCard';

function App() {

  const [allData, setAllData] = useState([
    {
      id: 1,
      text: "Giyū Tomioka - Water Hashira",
      image: "https://media.licdn.com/dms/image/C4E12AQHMRUxMMXIqsg/article-inline_image-shrink_1000_1488/0/1644431137298?e=2147483647&v=beta&t=H1gLBRYsKB7EixIhQe1D1y9CvFm98Za5VY5c0eE2VqU",
    },
    {
      id: 2,
      text: "Tengen Uzui - Sound Hashira",
      image: "https://media.licdn.com/dms/image/C4E12AQEKHlZLz1tK1g/article-inline_image-shrink_1000_1488/0/1644431306248?e=2147483647&v=beta&t=GA6xmEaeAmSMaSkiXVjxToyw49woKPpA-C9K6PtwfGs",
    },
    { 
      id: 3,
      text: "Shinobu Kochō - Insect Hashira",
      image: "https://media.licdn.com/dms/image/C4E12AQFjw82aKOeK9A/article-inline_image-shrink_1000_1488/0/1644431432172?e=2147483647&v=beta&t=FM9gVr_C2cZblh5teoHJduEOunxXYkkPambe8xeO6Z8",
    },
    {
      id: 4,
      text: "Muichirō Tokitō - Mist Hashira",
      image: "https://media.licdn.com/dms/image/C4E12AQHo6g1Gq0gcTg/article-inline_image-shrink_1000_1488/0/1644431502872?e=2147483647&v=beta&t=lJ1BFSbNASyR1ZhvdwIUc3THdWoUjZAjML-wi4MnY_0",
    },
    {
      id: 5,
      text: "Obanai Iguro - Serpent Hashira",
      image: "https://media.licdn.com/dms/image/C4E12AQGE07zKJBx-Rg/article-inline_image-shrink_1000_1488/0/1644431570348?e=2147483647&v=beta&t=SZiYlDTHBOuOf1fUPgiEioGwuimjZCL6vBb-A9Q3WG4",
    },
    {
      id: 6,
      text: "Mitsuri Kanroji - Love Hashira",
      image: "https://media.licdn.com/dms/image/C4E12AQHKaUwLJZsVxA/article-inline_image-shrink_1000_1488/0/1644431639411?e=2147483647&v=beta&t=hhxPmpjwlSgGbtAkM102ivmVa1AgjY7SwuJE-CZSk6Q",
    },
    {
      id: 7,
      text: "Sanemi Shinazugawa - Wind Hashira",
      image: "https://media.licdn.com/dms/image/C4E12AQH6b4yfKwssvA/article-inline_image-shrink_1000_1488/0/1644431700876?e=2147483647&v=beta&t=J9guDGxUAId8JAHH83sgKPQJuvMHTpViB88g9s-njfg",
    },
    {
      id: 8,
      text: "Gyōmei Himejima - Stone Hashira",
      image: "https://media.licdn.com/dms/image/C4E12AQF1-Kh1ZsLJ1A/article-inline_image-shrink_400_744/0/1644431761066?e=2147483647&v=beta&t=GgrjjE4kiJDOUWlNcTOm7SSMHwb8zOKYg62wnl7F984",
    },
    {
      id: 9,
      text: "Kyōjurō Rengoku - Flame Hashira",
      image: "https://media.licdn.com/dms/image/C4E12AQEnhA3qj_SE6A/article-inline_image-shrink_400_744/0/1644431235133?e=2147483647&v=beta&t=YHCQP1Vt6UoXdll-BtYg5LSten7f3Bo23TJa14Gumq0",
    },
  ]);

  const [allData2, setAllData2] = useState([
    {
      id: 1,
      text: "Tanjiro Kamado",
      image: "https://rukminim2.flixcart.com/image/850/1000/kyvvtzk0/poster/o/h/q/medium-tanjiro-kamado-demon-slayer-kimetsu-no-yaiba-anime-matte-original-imagbygdj7ghnwyy.jpeg?q=20&crop=false",
    },
    {
      id: 2,
      text: "Nezuko Kamado",
      image: "https://www.waifuworld.shop/wp-content/uploads/2023/10/maxresdefault-17.jpg",
    },
    { 
      id: 3,
      text: "Zenitsu Agatsuma",
      image: "https://cdn.shopify.com/s/files/1/0400/9767/7479/files/Zenitsu-Agatsuma-Thunder-Breathing-Techinque.png?v=1678807114",
    },
    {
      id: 4,
      text: "Inosuke Hashibara",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/08/Demon-Slayer-Inosuke-Hashibira-3.jpg",
    },
    {
      id: 5,
      text: "Kanao Tsuyuri",
      image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/09/kimetsu-no-yaiba-header-kanao.png",
    },
    {
      id: 6,
      text: "Genya Shinazugawa",
      image: "https://images-ng.pixai.art/images/orig/c3eb3bfb-e231-4696-913f-264ec7d30a88",
    },
    {
      id: 7,
      text: "Murata",
      image: "https://www.siliconera.com/wp-content/uploads/2021/05/Murata-Demon-Slayer-Hinokami-Kepputan.jpg?fit=640%2C360",
    },
  ]);

  return (
    <MyCard datav={allData} datav2={allData2} /> // Changed component name
  );
}

export default App;

