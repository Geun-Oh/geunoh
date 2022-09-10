import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { ServiceLayout } from "../components/service_layout";

export const UserHomePage: NextPage = () => {
    return (
        <ServiceLayout title="user home" minH="100vh" backgroundColor="gray.50">
            <Box maxW="md" mx="auto" pt="6">
                test
            </Box>
        </ServiceLayout>
    )
}