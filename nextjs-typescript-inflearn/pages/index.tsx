import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { GoogleLoginButton } from '../components/google_login_button';
import { ServiceLayout } from '../components/service_layout';

const IndexPage: NextPage = function () {
    return (
        <ServiceLayout title="test">
            <Box maxW="md" mx="auto">
                <img src="/main_logo.svg" alt="메인 로고" />
                <Flex justify="center">
                    <Heading>#BlahBlah</Heading>
                </Flex>
            </Box>
            <Center mt="20">
                <GoogleLoginButton />
            </Center>
        </ServiceLayout>
    )

}


export default IndexPage;