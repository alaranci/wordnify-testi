import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";

export default function Home() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getWords = async () => {
    const wordCollection = collection(db, "very");
    const wordSnapshot = await getDocs(wordCollection);
    const wordList = wordSnapshot.docs.map((word) => word.data());
    console.log(wordList);
  };

  return (
    <div>
      Home
      <button onClick={getWords}>Click me</button>
    </div>
  );
}
