import { Avatar, Box, Flex, Text, Textarea, Button, useToast, FormControl, Switch, FormLabel } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { ServiceLayout } from "../../components/service_layout";
import Resizetextarea from 'react-textarea-autosize';
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth_user_context";
import { InAuthUser } from "../../models/in_auth_user";
import axios, { AxiosPromise, AxiosResponse } from "axios";

interface Props {
    userInfo: InAuthUser | null;
}




// const userInfo = {
//     uid: "test",
//     email: "kandy1002@naver.com",
//     displayName: "Geun-Oh",
//     photoURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACqCAMAAADGFElyAAAAbFBMVEUAAAD///+5ubns7OzNzc3y8vKzs7NfX1+QkJBNTU0/Pz9zc3MaGhqYmJiAgIB2dnYTExNZWVni4uLGxsZFRUXS0tJsbGwqKiqjo6M4ODiKiorY2NjBwcEICAj29vbn5+cfHx8vLy+srKydnZ1rkYR2AAAC/UlEQVR4nO3aW5OiMBCG4W5UEA8zKp6POPP//+PieEoC1HqxThbyPhc7Gtyqrq9IoAMiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAyo4nvChriMPBdQVMkvgtoiuHZdwUNkS59V9AQo7XvCpoi4rr3mjXL+WuGX74raIjzzHcFTdFJfVfQENnYdwUNsT35ruCXzaOKU+MjssWS7J2plupqsH8cv3/4+J2ivUhUh6XBWLOuaS8yO9o/OW5lvrgd7ujtw2L7S1X7kGimpcG4Uxpa6d78mi2ML1Hvn5f1H0p0cMrcwYqk5FM/n1+2at6ch5JUuinNv6qkJNLV/eNGrcY4lKSmMtaDPViZlBwfd5odayYGlJTMuvZgdVJzve0cRM7KFkpS6WW5tudfdVLFuTe9/Ble/zwFlFSxQluDNUnJ7hLJSN3GOKSkZGfNv7qkRIvL5Kx0MKikJuY9QH1SQx2utfQwJqikitslYzA+bvsG4847Vi13P2ElJZkx/2LtmIxeeKPuHYUEl5QY86929hWL1HFRGgwtqURH98HapGLdLMvTL7SkJHqcLXVJJbq9pDV3hoNLSo73+VeT1EF/suy4R0NJ6nmGpPf5V5PU7np9HNgbMG5SxYo/auNbHWZS8nWbf9VJje9dzNZpfuykvlbTaLxv3yNTKynpXbd3K5N6NMgiXc3NI05S+XciG+sHrWAnNbjOv8qkjsbjPbUe9TlJnfM4a+E2sZ2UrHeXf6uSyjQ3/5f56oaR1CEvkjoXcTnbDS3gJCWny/yrSOrDagxlbVwyn0lNYul+ZNKPl9lK2sZN6qx5kVRvmliKLsa53s2Oz67meU6lMlnml7eqRtI6blLS3/30wTY5uc9BV/rsE6Pa5qfddi+uxuVOOTi99q0xbzLd+a6gMb77vitojC6vTr9osv/7b/Bj2sJu5E36G98VNAav5L8qb/Prdf9W2sZ9y/do377J23BSvWrSvr1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7A73zF94TJhF7AAAAAElFTkSuQmCC",
// }

const UserHomePage: NextPage<Props> = ({ userInfo }) => {
    // const [userInfo, setUserInfo] = useState<Object | null>(null);
    // useEffect(() => {
    //     async function getRes() {
    //         try {
    //             const d: AxiosPromise<any> = await axios(`https://3000-geunoh-geunoh-e6igz5vdugx.ws-us64.gitpod.io/api/user_info/a01091634257`).then(res => res.data);
    //             console.log(d);
    //             setUserInfo(d);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getRes();
    // }, [])
    const [message, setMessage] = useState<string>("");
    const [isAnonymous, setIsAnonymous] = useState<boolean>(true);
    const toast = useToast();
    const { authUser } = useAuth();
    if (userInfo === null) {
        return <p>사용자를 찾을 수 없습니다.</p>;
    }
    return (
        <ServiceLayout title="user home" minH="100vh" backgroundColor="gray.50">
            <Box maxW="md" mx="auto" pt="6">
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2" bg="white">
                    <Flex p="6">
                        <Avatar size="lg" src={userInfo.photoURL ?? "https://bit.ly/broken-link"} mr="2" />
                        <Flex direction="column" justify="center">
                            <Text fontSize="md">{userInfo.displayName}</Text>
                            <Text fontSize="xs">{userInfo.email}</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb="2" bg="white">
                    <Flex align="center" p="2">
                        <Avatar size="xs" src={isAnonymous ? "https://bit.ly/broken-link" : authUser?.photoURL ?? "https://bit.ly/broken-link"} mr="2" />
                        <Textarea bg="gray.100" border="none" placeholder="무엇이 궁금한가요?" resize="none" minH="unset" overflow="hidden" fontSize="xs" maxRows={7} as={Resizetextarea} value={message} onChange={(e) => {
                            if (e.currentTarget.value) {
                                const lineCount = (e.currentTarget.value.match(/[^\n]*\n[^\n]*/gi)?.length ?? 1) + 1;
                                if (lineCount > 7) {
                                    toast({
                                        title: "최대 7줄 입력가능합니다.",
                                        position: "top-right",
                                    });
                                    return;
                                }
                            }
                            setMessage(e.currentTarget.value)
                        }} />
                        <Button bgColor="#FF886C" color="white" colorScheme="yellow" variant="solid" size="sm" disabled={message.length === 0}>등록</Button>
                    </Flex>
                    <FormControl display="flex" alignItems="center" mt="1" mx="2" mb="2">
                        <Switch size="sm" colorScheme="orange" id="anonymous" mr="1" isChecked={isAnonymous} onChange={() => {
                            if (authUser === null) {
                                toast({ title: "로그인이 필요합니다.", position: "top-right" });
                                return;
                            }
                            setIsAnonymous(prev => !prev);
                        }} />
                        <FormLabel htmlFor="anonymous" mb="0" fontSize="xx-small">
                            Anonymous
                        </FormLabel>
                    </FormControl>
                </Box>
            </Box>
        </ServiceLayout>
    )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
    const { screenName } = query;
    console.info(screenName);
    if (screenName === undefined) {
        return {
            props: {
                userInfo: null,
            }
        }
    }
    try {
        // const protocol = process.env.PROTOCOL || 'http';
        // const host = process.env.HOST || 'localhost';
        // const port = process.env.PORT || '3000';
        // const baseURL = "https://3000-geunoh-geunoh-e6igz5vdugx.ws-us64.gitpod.io";
        // SSR에서는 fetch 메서드를 사용할 수 없으므로 기타 라이브러리를 이용해야 한다.
        // const URL = `http://3000-geunoh-geunoh-e6igz5vdugx.ws-us64.gitpod.io/api/user_info/${screenName}`;
        // console.info(URL);
        const userInfoRes: AxiosPromise<InAuthUser> = axios(`http://3000-geunoh-geunoh-e6igz5vdugx.ws-us64.gitpod.io/api/user_info/a01091634257`).then(res => res.data);
        console.info(userInfoRes);
        return {
            props: {
                userInfo: (await userInfoRes).data ?? null,
            }
        }
    } catch (err) {
        console.log(err);
        return {
            props: {
                userInfo: null,
            }
        }
    }
}

export default UserHomePage;