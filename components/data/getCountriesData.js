import india from '/public/india.png';
import usa from '/public/usa.webp';
import england from '/public/england.webp';
import japan from '/public/japan.jpg';


const countriesData = [
    { name: "India", flag: india },
    { name: "USA", flag: usa },
    { name: "England", flag: england },
    { name: "Japan", flag: japan },
]

function getCountriesData() {
    return countriesData;
}

export default getCountriesData;