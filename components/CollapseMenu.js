"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const CollapseMenu = ({ icon, header, items }) => {
    const [collapse, setCollapse] = useState(false);
    const handleCollapse = () => {
        setCollapse(!collapse);
    };
    return (
        <div>
            <div
                className="menu-container py-1 border-t border-black"
                onClick={handleCollapse}
            >
                <div className="menu-header flex items-center gap-2 p-2 px-3">
                    <FontAwesomeIcon icon={icon} size="sm" />
                    <span className="text-sm font-thick capitalize">
                        {header}
                    </span>
                    <FontAwesomeIcon
                        icon={collapse ? faChevronUp : faChevronDown}
                        className="ml-auto"
                        size="sm"
                    />
                </div>
                <div
                    className={`menu-items overflow-hidden ${
                        collapse ? "collapsing" : "expanding"
                    }`}
                    style={{
                        maxHeight: collapse ? "500px" : "0",
                        transition: "max-height 0.5s ease-in-out",
                    }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="menu-item flex items-center pl-8 py-[.5rem]">
                            <span className="text-sm capitalize">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollapseMenu;
