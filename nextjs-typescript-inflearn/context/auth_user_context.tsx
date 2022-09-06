import React, { createContext, useContext } from "react";
import { useFirebaseAuth } from "../hooks/use_firebase_auth";
import { InAuthUser } from "../models/in_auth_user";
/**
 * Context 생성만에 집중하는 곳이다.
 * 세부적인 구글 로그인 로직을 구현하는 것은
 * use_firebase_auth 훅으로 분리하여 진행한다.
 */


/**AuthUserContext에 대한 인터페이스 */
interface InAuthUserContext {
    /**User DB에서 가져올 정보들을 담은 인터페이스 */
    authUser: InAuthUser | null;
    /**로그인 여부가 진행중인지 체크 */
    loading: boolean;
    /**구글로그인을 하는 함수 */
    signInWithGoogle: () => void;
    /**구글로그아웃을 하는 함수 */
    signOut: () => void;
}

/**User관리를 위한 Context
 * 
 * 유저의 정보를 담고,
 * 로딩중인지 여부를 담고,
 * 구글 로그인 함수를 담고,
 * 구글 로그아웃 함수를 담는다.
 */
const AuthUserContext = createContext<InAuthUserContext>({
    authUser: null,
    loading: true,
    signInWithGoogle: async () => ({ user: null, credential: null }),
    signOut: () => {},
});

/**해당 AuthUserContext를 제공하는 Provider */
export const AuthUserProvider = ({children}: {children: React.ReactNode}) => {
    /**firebase 유저 인증 기능을 제공하는 함수 */
    const auth = useFirebaseAuth();
    return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
};

export const useAuth = () => useContext(AuthUserContext);