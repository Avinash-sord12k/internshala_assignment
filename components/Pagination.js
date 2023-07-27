"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const Pagination = ({ start, end }) => {
  return (
    <div className="mt-4 flex items-center justify-center">
      <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-4 hover:text-blue-600"/>
      {
        Array.from({ length: end - start + 1 }, (_, i) => i + start).map((page, index) => (
          <span key={index} className="px-3 py-1 mx-1 text-sm border border-gray-400 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-600">{page}</span>
        ))
      }
      <FontAwesomeIcon icon={faAngleDoubleRight} className="mx-4 hover:text-blue-600"/>
    </div>
  )
}

export default Pagination
