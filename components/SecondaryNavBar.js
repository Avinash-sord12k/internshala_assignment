import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAdd, faGear, faSearch } from "@fortawesome/free-solid-svg-icons"

function SecondaryNavBar() {
    
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-white">
            <div className="group1 flex items-center gap-8">
                <h2 className="text-xl font-semibold">Add new post</h2>
                <h3 className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faAdd} />
                    <span>Add content</span>
                </h3>
                <h3 className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faGear} />
                    <span>Settings</span>
                </h3>
            </div>
            <form className="group2 relative">
                <input
                    className="bg-white rounded-md p-2 w-60 border border-gray-400 focus:border-gray-400 transition-all duration-300 placeholder-gray-800"
                    type="text"
                    name="search-content"
                    id="search-content"
                    placeholder="search content.." />
                <label
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-800 cursor-pointer"
                    htmlFor="search-content">
                    <FontAwesomeIcon icon={faSearch} />
                </label>
            </form>
        </div>
    )
}

export default SecondaryNavBar
