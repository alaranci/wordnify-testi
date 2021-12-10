import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { useState } from "react";

export default function Home() {
  interface IWordsEx {
    verse: string;
    mins: string;
  }
  interface IWords {
    id: string;
    risa: number;
    word: string;
    desc: string[];
    mean: string[];
    ex: IWordsEx[];
    vi: string[];
  }

  const [words, setWords] = useState<any>([]);

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getWords = async () => {
    const wordCollection = collection(db, "very");
    const wordSnapshot = await getDocs(wordCollection);
    const wordList = wordSnapshot.docs.map((word) => word.data());
    setWords(wordList);
  };

  return (
    <div>
      Home
      <button onClick={getWords}>Click me</button>
      {words.map((word: IWords) => {
        return (
          <div key={word.id}>
            <h1>{word.word}</h1>
            <p>{word.vi}</p>
          </div>
        );
      })}
    </div>
  );
}
