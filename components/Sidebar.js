import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faTableCells, faChartPie, faTable, faMap, faFileAlt, faCog } from '@fortawesome/free-solid-svg-icons'
import CollapseMenu from './CollapseMenu'

const sidebarItems = [
    {icon: faTableCells, header: 'Dashboard', items: ['commerce', 'analytics', 'crypto', 'project', 'helpdesk', 'monitoring', 'fitness']},
    {icon: faChartPie, header: 'Charts', items: ['apex', 'chartjs', 'chartist', 'google']},
    {icon: faTable, header: 'Tables', items: ['basic', 'advanced', 'responsive']},
    {icon: faMap, header: 'Maps', items: ['google', 'vector', 'leaflet']},
    {icon: faFileAlt, header: 'Pages', items: ['profile', 'invoice', 'pricing', 'gallery', 'faq', 'knowledgebase', 'register', 'login', 'error404', 'error500', 'maintenance']},
    {icon: faCog, header: 'Utilities', items: ['typography', 'color', 'shadow', 'icons', 'spinners', 'grid', 'tags', 'progress', 'popup', 'navs', 'scroll', 'ratings', 'search', 'accordion', 'popover', 'tooltip', 'chat', 'card', 'calendar', 'carousel', 'list', 'pagination', 'popover', 'timeline', 'tree', 'typography', 'color', 'shadow', 'icons', 'spinners', 'grid', 'tags', 'progress', 'popup', 'navs', 'scroll', 'ratings', 'search', 'accordion', 'popover', 'tooltip', 'chat', 'card', 'calendar', 'carousel', 'list', 'pagination', 'popover', 'timeline', 'tree']},
    {icon: faFileAlt, header: 'Documentation', items: ['introduction', 'file-structure', 'installation', 'customization', 'changelog', 'theming', 'rtl', 'support', 'license']},
    {icon: faCog, header: 'Support', items: ['documentation', 'changelog', 'support', 'license']},
    {icon: faCog, header: 'License', items: ['documentation', 'changelog', 'support', 'license']},
];

function Sidebar() {
    return (
        <div className="min-h-full bg-gray-800 text-white flex-auto self-stretch" style={{
            minWidth: "230px",
            maxWidth: "230px",
        }}>
            <div className="items-wrapper">
                <div className="nav-item px-3 py-2 flex items-center justify-center border-b-2 border-black">
                    <button className="w-full flex items-center gap-2 p-2 bg-white text-gray-800 rounded-md">
                        <FontAwesomeIcon icon={faAdd} size='lg'/>
                        <span className="font-medium capitalize text-lg">
                            Add Item
                        </span>
                    </button>
                </div>
                {sidebarItems.map((item, index) => (
                    <CollapseMenu key={index} icon={item.icon} header={item.header} items={item.items} collapse={Boolean(index==1)} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
