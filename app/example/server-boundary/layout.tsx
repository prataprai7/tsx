import { Server } from "http"
import Head from "next/head"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            Server Layout Head
            {children}
            Server Layout Tail
        </section>
    );
}