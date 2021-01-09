import firebase from "firebase";

const {
REACT_APP_FIREBASE_API_KEY,
REACT_APP_FIREBASE_AUTH_DOMAIN,
REACT_APP_FIREBASE_DATABASE_URL,
REACT_APP_FIREBASE_PROJECT_ID,
REACT_APP_FIREBASE_STORAGE_BUCKET,
REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
REACT_APP_FIREBASE_APP_ID,
REACT_APP_FIREBASE_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);//firebaseの初期化処理（configのオブジェクトを渡している）
const database = firebase.database();  //初期化したのち、リアルタイムデータベースを「全体・丸ごと」参照して、定数databaseに格納。
//「全体・丸ごと」参照していた先から、特定の名前空間に対するリファレンス（参照）を作る必要がある。
//今回はmeetingsという参照先を参照する定数を次の行で作成。
export const meetingsRef = database.ref("meetings");

export const pushMessage = ({ name , text }) => {
  meetingsRef.push({name , text});
};
