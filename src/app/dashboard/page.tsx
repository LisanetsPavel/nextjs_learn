import DashboardClientComponent from 'pages/app/dashboard/components/DashboardClientComponent';
import Link from 'next/link';
import { mockItems } from 'pages/app/dashboard/utils/mockData';


export default function dashboard() {
    return <div>
        Dashboard............
        <DashboardClientComponent />
        <div className="m-3 bg-gray-100 rounded w-6/12 gap-2 flex-col flex p-2">
            { mockItems.map(item => {
                return <Link key={item.id} href={`/dashboard/${item.name}`}>
                <div className="p-2 border rounded bg-gray-200  hover:bg-amber-100" >
                    <span>I am item with name: { item.name }. Click to visit me</span>
                </div>
                </Link>
            }) }
        </div>
    </div>
}
