import * as admin from 'firebase-admin';

interface Config {
    credential: {
        privateKey: string;
        clientEmail: string;
        projectId: string;
    };
}

/**
 * 싱글톤 패턴을 이용해 파이어베이스 어드민 클래스 인스턴스를 제작함.
 */

export default class FirebaseAdmin {
    public static instance: FirebaseAdmin;

    private init = false;

    public static getInstance(): FirebaseAdmin {
        if(FirebaseAdmin.instance === undefined || FirebaseAdmin.instance === null) {
            FirebaseAdmin.instance = new FirebaseAdmin();
            FirebaseAdmin.instance.bootstrap();
        }
        return FirebaseAdmin.instance;
    }

    private bootstrap(): void {
        const haveApp = admin.apps.length !== 0;
        if(haveApp) {
            this.init = true;
            return;
        }

        const config: Config = {
            credential: {
                projectId: process.env.projectId || "",
                clientEmail: process.env.clientEmail || "",
                privateKey: (process.env.privateKey || "").replace(/\\n/g, '\n'), // 원래 개행이 있던 문자열이 json 포맷 시에 한 줄로 되었으므로 다시 개행을 넣어줌.
            }
        };
        admin.initializeApp({ credential: admin.credential.cert(config.credential) });
    }

    public get Firebase(): FirebaseFirestore.Firestore {
        if(this.init === false) {
            this.bootstrap();
        }
        return admin.firestore();
    }

    public get Auth(): admin.auth.Auth {
        if(this.init === false) {
            this.bootstrap();
        }
        return admin.auth();
    }
}