import { Head } from "@inertiajs/react";

type LayoutProps = {
    children: React.ReactNode,
    title: string
}

export default function MainLayout({ children, title }: LayoutProps ){
    return <>
        <Head title={title}/>
        <main>
            <div>Main Layout</div>
            {children}
        </main>
    </>
}