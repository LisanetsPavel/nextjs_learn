'use client'

import { useRouter } from 'next/navigation';

export default function DashboardClientComponent() {
    const router = useRouter()

    return <div className="p-3">
       <div>I am DashboardClientComponent</div>
        <button className="bg-white p-2 m-1 rounded" type="button" onClick={() => router.push('/')}>
            go home
        </button>
    </div>
}
