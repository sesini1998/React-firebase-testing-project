import { useEffect, useState } from 'react';
// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import 'firebase/database';
import {getDatabase , ref , get , push , onValue} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAXR0sh_vf6yfRMcz_jBGQnXWIva8uFeg0",
    authDomain: "ecg-signal-data.firebaseapp.com",
    databaseURL: "https://ecg-signal-data-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ecg-signal-data",
    storageBucket: "ecg-signal-data.appspot.com",
    messagingSenderId: "341514934731",
    appId: "1:341514934731:web:9ea980f7539aa260543e4e",
    measurementId: "G-927HBPEEWH"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const databaseRef = ref(database ,'sample');
    console.log(database);
    // const fetchData = () => {
    //   databaseRef.on('value', (snapshot) => {
    //     const items = snapshot.val();
    //     const itemsArray = items ? Object.values(items) : [];
    //     setData(itemsArray);
    //   });
    // };

    // fetchData();

    // return () => {
    //   databaseRef.off('value');
    // };
  }, []);

  return (
    <div>
      <h1>Firebase Realtime Database Example</h1>
      {/* <ul>
        {data.map((item) => (
          <li key={item.id}>
            {`Item ID: ${item.id}, Name: ${item.name}`}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Test;
