export default function Layout(props: {
    children: React.ReactNode
    analytics: React.ReactNode
    team: React.ReactNode
}) {
    return (
        <>
            {props.children}
            <div className="flex gap-2">
                <div className="w-6/12 bg-emerald-100 h-screen p-3 rounded">
                    {props.team}
                </div>
                <div className="w-6/12 bg-fuchsia-100 p-3 rounded">
                    {props.analytics}
                </div>
            </div>
        </>
    )
}
