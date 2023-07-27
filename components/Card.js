import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Card({icon, title, value, color}) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-md flex-1" >
      <div className={`icon ${color}`}>
        <FontAwesomeIcon icon={icon} size="2xl"/>
      </div>
      <div className="info">
        <h3 className="font-thin text-md text-gray-700 ">{title}</h3>
        <p className="font-semibold text-lg">$&nbsp;{value}</p>
      </div>
    </div>
  )
}

export default Card
