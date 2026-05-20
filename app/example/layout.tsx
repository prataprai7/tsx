export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <div className="border p-4">Global Header</div>
                {children}
            <div className="border p-4">Global Footer</div>
        </section>
    );
}