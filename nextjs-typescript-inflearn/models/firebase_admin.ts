import * as admin from 'firebase-admin';

interface Config {
  credential: {
    privateKey: string;
    clientEmail: string;
    projectId: string;
  };
}

export default class FirebaseAdmin {
  public static instance: FirebaseAdmin;

  private init = false;

  public static getInstance(): FirebaseAdmin {
    if (FirebaseAdmin.instance === undefined || FirebaseAdmin.instance === null) {
      // 초기화 진행
      FirebaseAdmin.instance = new FirebaseAdmin();
      // 환경을 초기화한다.
      FirebaseAdmin.instance.bootstrap();
    }
    return FirebaseAdmin.instance;
  }

  private bootstrap(): void {
    const haveApp = admin.apps.length !== 0;
    if (haveApp) {
      this.init = true;
      return;
    }

    const config: Config = {
      credential: {
        projectId: process.env.projectId || '',
        clientEmail: process.env.clientEmail || '',
        privateKey: (process.env.privateKey || '').replace(/\\n/g, '\n'),
      },
    };
    admin.initializeApp({ credential: admin.credential.cert(config.credential) });
    console.info('bootstrap firebase admin');
  }

  /** firestore를 반환 */
  public get Firestore(): FirebaseFirestore.Firestore {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.firestore();
  }

  public get Auth(): admin.auth.Auth {
    if (this.init === false) {
      this.bootstrap();
    }
    return admin.auth();
  }
}

// import * as admin from 'firebase-admin';

// interface Config {
//     credential: {
//         privateKey: string;
//         clientEmail: string;
//         projectId: string;
//     };
// }

// /**
//  * 싱글톤 패턴을 이용해 파이어베이스 어드민 클래스 인스턴스를 제작함.
//  */

// export default class FirebaseAdmin {
//     public static instance: FirebaseAdmin;

//     private init = false;

//     public static getInstance(): FirebaseAdmin {
//         if(FirebaseAdmin.instance === undefined || FirebaseAdmin.instance === null) { // 만일 해당 어드민클래스가 없다면
//             FirebaseAdmin.instance = new FirebaseAdmin(); // 새로 인스턴스를 생성함
//             FirebaseAdmin.instance.bootstrap(); // 인스턴스 내에 있는 bootstrap함수를 실행함
//         }
//         return FirebaseAdmin.instance;
//     }

//     private bootstrap(): void { // 환경을 초기화할 때 사용할 메서드
//         const haveApp = admin.apps.length !== 0; // 앱이 등록되어있는지 확인하는 것
//         if(haveApp) { // 앱이 존재한다면
//             this.init = true; // 앱이 초기화되었는지 여부를 true로 만들고 종료
//             return;
//         }

//         const config: Config = { // 앱이 없다면
//             credential: {
//                 projectId: process.env.projectId || "",
//                 clientEmail: process.env.clientEmail || "",
//                 privateKey: (process.env.privateKey || "").replace(/\\n/g, '\n'), // 원래 개행이 있던 문자열이 json 포맷 시에 한 줄로 되었으므로 다시 개행을 넣어줌.
//             }
//         };
//         admin.initializeApp({ credential: admin.credential.cert(config.credential) });
//     }

//     public get Firestore(): FirebaseFirestore.Firestore {
//         if(this.init === false) {
//             this.bootstrap();
//         }
//         return admin.firestore();
//     }

//     public get Auth(): admin.auth.Auth {
//         if(this.init === false) {
//             this.bootstrap();
//         }
//         return admin.auth();
//     }
// }