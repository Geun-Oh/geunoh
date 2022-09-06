import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { useEffect, useState } from "react"
import FirebaseClient from "../models/firebase_client";
import { InAuthUser } from "../models/in_auth_user"

/**firebase 유저 인증 기능을 담은 커스텀 훅. */
export const useFirebaseAuth = () => {
    /**인증된 유저 정보를 담는 변수와 이를 변경하는 함수 */
    const [authUser, setAuthUser] = useState<InAuthUser | null>(null);
    /**로딩 여부를 담는 변수와 아를 변경하는 함수 */
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = async (): Promise<void> => {
        const provider = new GoogleAuthProvider();
        try {
            const signInResult = await signInWithPopup(FirebaseClient.getInstance().Auth, provider);
            if(signInResult.user) {
                console.info(signInResult.user);
                const res = await fetch("/api/member.add", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({ uid: signInResult.user.uid, email: signInResult.user.email, displayName: signInResult.user.displayName, photoURL: signInResult.user.photoURL })
                });
                console.info({ status: res.status });
                const resData = await res.json();
                console.info(resData);
            }
        } catch(err) {
            console.log(err);
        }
    }
    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    }

    /**유저를 로그아웃시킨 뒤, authUser의 정보를 비우고 로딩 여부를 true로 변경한다. */
    const signOut = () => FirebaseClient.getInstance().Auth.signOut().then(clear);
    
    /**유저정보가 변경됨을 감지하면 실행될 함수 */
    const authStateChaged = async (authState: User | null) => {
        if(authState === null) {
            setAuthUser(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        setAuthUser({
            uid: authState.uid,
            email: authState.email,
            photoURL: authState.photoURL,
            displayName: authState.displayName,
        });
        setLoading(false);
    }

    useEffect(() => {
        const unsubscribe = FirebaseClient.getInstance().Auth.onAuthStateChanged(authStateChaged);
        return () => unsubscribe();
    }, [])

    return {
        authUser,
        loading,
        signInWithGoogle,
        signOut,
    }
}