import { faBagShopping, faChartLine, faChartPie, faUser } from "@fortawesome/free-solid-svg-icons"

const cardsData = [
    { icon: faBagShopping, title: "Total Sales", value: "2,456", color: "text-blue-500" },
    { icon: faUser, title: "Total Users", value: "2,456", color: "text-green-500" },
    { icon: faChartLine, title: "Total Expenses", value: "2,456", color: "text-red-500" },
    { icon: faChartPie, title: "Total Visitors", value: "2,456", color: "text-yellow-500" },
];


export default function getCardsData() {
    return cardsData;
}