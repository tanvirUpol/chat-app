import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";

// firebase imports
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";

export const useCollection = (collection_name, _q) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // set up query
  const q = useRef(_q).current;

  useEffect(() => {
    let ref = collection(db, collection_name);

    if (q) {
      ref = query(ref, where(...q),orderBy('createdAt'));
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        console.log(results);
      },
      (err) => {
        console.log(err);
        setError("could not fetch the data");
      }
    );

    return () => unsubscribe();
  }, [collection_name, q]);

  return { documents, error };
};
