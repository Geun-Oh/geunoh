import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { useEffect, useState } from "react";
import FirebaseClient from "../models/firebase_client";
import { InAuthUser } from "../models/in_auth_user";
/**
 * 전체 흐름을 알아보면
 * 처음 useFirebaseAuth 함수에서 팝업을 열고 유저 정보를 받아 이를 signInResult에 담아 POST 메서드로 /api/member.add로 보낸다.
 * member.add 내에 있는 함수인 handler에서는 req를 받아 POST인지를 확인하고 이것이 맞다면 MemberCtrl로 req를 보낸다.
 * 그러면 Member.Ctrl에서는 req에서 필수적인 uid나 email이 누락되었는지 여부를 확인한 뒤 MemberModel로 넘긴다.
 * 그러면 MemberModel에서는 최종적으로 유저를 추가한다. add함수에 uid, email, displayName, photoURL을 보내주면
 * 이를 firebase에 유저 데이터로 추가하여 준다.
 */

/**firebase 유저 인증 기능을 담은 커스텀 훅. */
export const useFirebaseAuth = () => {
  /**인증된 유저 정보를 담는 변수와 이를 변경하는 함수 */
  const [authUser, setAuthUser] = useState<InAuthUser | null>(null);
  /**로딩 여부를 담는 변수와 아를 변경하는 함수 */
  const [loading, setLoading] = useState(true);

  /**구글 로그인이 실제로 구현된 함수 */
  const signInWithGoogle = async (): Promise<void> => {
    const provider = new GoogleAuthProvider();
    try {
      const signInResult = await signInWithPopup(
        FirebaseClient.getInstance().Auth,
        provider
      );
      if (signInResult.user) {
        console.info(signInResult.user);
        const res = await fetch("https://3000-geunoh-geunoh-e6igz5vdugx.ws-us64.gitpod.io/api/member.add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: signInResult.user.uid,
            email: signInResult.user.email,
            displayName: signInResult.user.displayName,
            photoURL: signInResult.user.photoURL,
          }),
        });
        console.info({ res, status: res.status });
        const resData = await res.json();
        console.info(resData);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  /**유저를 로그아웃시킨 뒤, authUser의 정보를 비우고 로딩 여부를 true로 변경한다. */
  const signOut = () => FirebaseClient.getInstance().Auth.signOut().then(clear);

  /**유저정보가 변경됨을 감지하면 실행될 함수 */
  const authStateChaged = async (authState: User | null) => {
    if (authState === null) {
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
  };

  useEffect(() => {
    const unsubscribe =
      FirebaseClient.getInstance().Auth.onAuthStateChanged(authStateChaged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithGoogle,
    signOut,
  };
};
