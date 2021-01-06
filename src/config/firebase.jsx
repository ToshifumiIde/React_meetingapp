import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAdyt3l_xYSwnsiFtHFPkx66Bp2t-AlO8k",
  authDomain: "toshifumiide-idobatakaigi.firebaseapp.com",
  databaseURL: "https://toshifumiide-idobatakaigi-default-rtdb.firebaseio.com",
  projectId: "toshifumiide-idobatakaigi",
  storageBucket: "toshifumiide-idobatakaigi.appspot.com",
  messagingSenderId: "211846729017",
  appId: "1:211846729017:web:c8e88e68eea76ef0926ce8",
  measurementId: "G-1HKPFK7411",
};
firebase.initializeApp(firebaseConfig);//firebaseの初期化処理（configのオブジェクトを渡している）
const database = firebase.database();  //初期化したのち、リアルタイムデータベースを「全体・丸ごと」参照して、定数databaseに格納。
//「全体・丸ごと」参照していた先から、特定の名前空間に対するリファレンス（参照）を作る必要がある。
//今回はmeetingsという参照先を参照する定数を次の行で作成。
const meetingRef = database.ref("meetings");

export const pushMessage = ({ name , text }) => {
  meetingRef.push({name , text});
};
