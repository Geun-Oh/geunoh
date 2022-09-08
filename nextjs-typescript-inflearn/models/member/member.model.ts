import FirebaseAdmin from "../firebase_admin";
import { InAuthUser } from "../in_auth_user";
/**
 * 유저를 추가하는 로직이 구현된 모델이다.
 * add함수에 uid, email, displayName, photoURL을 보내면
 * 이를 firebase에 유저 데이터로 추가하여 준다.
 */


/*변경될 수 있는 변수들을 상수화한다. API콜과 같은 부분을 따로 빼서 여기에 저장한다. */

const MEMBER_COL = "members";
const SCR_NAME_COL = "screen_names";

type AddResult = { result: true; id: string } | { result: false; message: string };

async function add({ uid, email, displayName, photoURL }: InAuthUser): Promise<AddResult> {
  try {
    const addResult = await FirebaseAdmin.getInstance()
      .Firebase.collection(MEMBER_COL)
      .doc(uid)
      .set({
        uid,
        email,
        displayName: displayName ?? "",
        photoURL: photoURL ?? "",
      });
    const screenName = (email as string).replace("@gmail.com", "");
    await FirebaseAdmin.getInstance()
      .Firebase.collection(SCR_NAME_COL)
      .doc(screenName)
      .set({
        uid,
        email,
        displayName: displayName ?? "",
        photoURL: photoURL ?? "",
      });
    /**
     * 데이터베이스에 대해서 트랜젝션을 실행한다.
     * 즉 데이터를 변경하는 과정을 말하는 것!(추가, 삭제를 포함해서)
    */      
    await FirebaseAdmin.getInstance().Firebase.runTransaction(
      async (transaction) => {
        const memberRef = FirebaseAdmin.getInstance()
          .Firebase.collection(MEMBER_COL)
          .doc(uid);
        const screenNameRef = FirebaseAdmin.getInstance()
          .Firebase.collection(SCR_NAME_COL)
          .doc(screenName);
        const memberDoc = await transaction.get(memberRef);
        if (memberDoc.exists) {
          // 이미 추가된 상태
          return false;
        }
        const addData = {
          uid,
          email,
          displayName: displayName ?? "",
          photoURL: photoURL ?? "",
        };
        await transaction.set(memberRef, addData);
        await transaction.set(screenNameRef, addData);
        return true;
      }
    );
    return{ result: true, id: uid };
  } catch (err) {
    console.error(err);
    return { result: false, message: "server error" };
  }
}

const MemberModel = {
    add,
}

export default MemberModel;
