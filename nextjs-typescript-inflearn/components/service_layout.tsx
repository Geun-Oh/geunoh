import Head from "next/head";

interface LayoutProps {
    title: string;
    children: React.ReactNode;
}

export const ServiceLayout = ({ title = "blahx2", children }: LayoutProps) => {

    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    )
}