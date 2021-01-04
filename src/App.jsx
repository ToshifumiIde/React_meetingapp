import React, {useState} from 'react'
import {SignIn} from "./components/SignIn";
import {Main} from "./components/Main";


export const App = () => {
  const [name , setName] =useState("");
  console.log(`YourName is ${name}`);

  if(name === ""){
    return <SignIn setName={setName}/> ;
  } else{
    return <Main name={name}/>;
  }

};