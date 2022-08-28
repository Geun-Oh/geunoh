import { Box, Button } from "@chakra-ui/react"

export const GoogleLoginButton = () => {
    return (
        <Box width="full">
            <Button size="lg" width="full" maxW="md" borderRadius="full" bgColor="#4285F4" color="white" colorScheme="blue" leftIcon={<img src="/google.svg" alt="google logo" style={{ backgroundColor: "white" , padding: "8px" }}/>}>구글 계정으로 시작하기</Button>
        </Box>
    )
}