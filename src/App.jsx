import React, {useState} from 'react'
import {SignIn} from "./components/SignIn";

export const App = () => {
  const [name , setName] =useState("");
  console.log(`YourName is ${name}`);

  return (
    <>
      <SignIn setName={setName}/>
    </>
  )
};