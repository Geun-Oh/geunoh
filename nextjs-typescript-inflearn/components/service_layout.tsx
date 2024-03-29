import { Box, BoxProps } from "@chakra-ui/react";
import Head from "next/head";
import { GNB } from "./GNB";

interface Props {
    title: string;
    children: React.ReactNode;
}

export const ServiceLayout: React.FC<Props & BoxProps> = ({ title = "blahx2", children, ...boxProps }: Props) => {

    return (
        <Box {...boxProps}>
            <Head>
                <title>{title}</title>
            </Head>
            <GNB />
            {children}
        </Box>
    )
}