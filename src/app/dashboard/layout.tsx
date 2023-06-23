export default function DashboardLayout({
                                            children, // will be a page or nested layout
                                        }: {
    children: React.ReactNode
}) {
    return (
        <section className="bg-amber-100">
            <nav></nav>
            <h2>DashboardLayout header</h2>
            {children}
        </section>
    )
}
