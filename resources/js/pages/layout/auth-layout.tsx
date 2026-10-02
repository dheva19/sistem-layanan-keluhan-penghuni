import { Head } from "@inertiajs/react";

type LayoutProps = {
    children: React.ReactNode,
    title: string
}

export default function AuthLayout({ children, title }: LayoutProps ){
    return <>
        <Head title={title}/>
        <main className="flex w-screen min-h-screen justify-center items-center">
            {children}
        </main>
    </>
}