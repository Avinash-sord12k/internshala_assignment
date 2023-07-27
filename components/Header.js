import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faBars, faGear, faTable } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return (
        <nav className='max-width'>
            <div className="max-width flex items-center justify-between px-6 py-3 bg-black text-white">
                <div className="menu flex items-center justify-center gap-4
                font-normal">
                    <div className="flex items-baseline gap-1 font-medium capitalize tracking-wide px-2 py-1 cursor-pointer rounded hover:bg-gray-700">
                        <FontAwesomeIcon size={'xs'} icon={faHome} />
                        <span className="text-sm">home</span>
                    </div>
                    <div className="flex items-baseline gap-1 font-medium capitalize tracking-wide px-2 py-1 cursor-pointer rounded hover:bg-gray-700">
                        <FontAwesomeIcon size={'xs'} icon={faBars} />
                        <span className="text-sm">content</span>
                    </div>
                    <div className="flex items-baseline gap-1 font-medium capitalize tracking-wide px-2 py-1 cursor-pointer rounded hover:bg-gray-700">
                        <FontAwesomeIcon size={'xs'} icon={faTable} />
                        <span className="text-sm">category</span>
                    </div>
                    <div className="flex items-baseline gap-1 font-medium capitalize tracking-wide px-2 py-1 cursor-pointer rounded hover:bg-gray-700">
                        <FontAwesomeIcon size={'xs'} icon={faGear} />
                        <span className="text-sm">settings</span>
                    </div>
                </div>
                <div>
                    <div className="flex justify-end bg-white rounded-full gap-1 text-black p-1 pr-2 cursor-pointer">
                        <div className="avatar-wrapper w-6 h-6 rounded-full overflow-hidden">
                            <img className="avatar" src="https://avatars.githubusercontent.com/u/25126281?v=4" alt="avatar" />
                        </div>
                        <div className="avatar-name flex items-center justify-start">
                            <span className="text-sm font-medium capitalize tracking-wide">Avinash Jha</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
