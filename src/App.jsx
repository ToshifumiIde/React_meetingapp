import React, {useState} from 'react'
import {SignIn} from "./components/SignIn";
import {Main} from "./components/Main";
import config from "./config.json";


export const App = () => {
  const [name , setName] =useState("");
  console.log(`YourName is ${name}`);

  if(config.signInEnabled && name === ""){
    return <SignIn setName={setName}/> ;
  } else{
    return <Main name={name}/>;
  }

};