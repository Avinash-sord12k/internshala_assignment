import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Alert() {
    return (
        <div className="p-4 border rounded border-red-600 bg-red-100 mt-4">
            <i className="inline-flex items-center justify-center w-[20px] h-[20px] border-2 rounded-full border-red-800 text-red-800">
                <FontAwesomeIcon icon={faInfo} size='xs'/>
            </i>
            <span className="ml-2 text-red-800">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptates.</span>
        </div>
    )
}

export default Alert
