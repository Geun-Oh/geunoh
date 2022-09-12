import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { GoogleLoginButton } from '../components/google_login_button';
import { ServiceLayout } from '../components/service_layout';
import { useAuth } from '../context/auth_user_context';

const IndexPage: NextPage = function () {
    const { signInWithGoogle, authUser } = useAuth();
    console.info(authUser);
    return (
        <ServiceLayout title="test" backgroundColor="gray.50" minH="100vh">
            <Box maxW="md" mx="auto" pt="10">
                <img src="/main_logo.svg" alt="메인 로고" />
                <Flex justify="center">
                    <Heading>#BlahBlah</Heading>
                </Flex>
            </Box>
            <Center mt="20">
                <GoogleLoginButton onClick={signInWithGoogle} /> {/**클릭하면 구글 로그인하는 로직을 실행 */}
            </Center>
        </ServiceLayout>
    )

}


export default IndexPage;