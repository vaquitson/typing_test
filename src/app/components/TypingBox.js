"use client";

import React, { useState, useEffect } from 'react';
import Letter from './Letter.js';
import Button from './Button.js';
import './../globals.css'
import { generadorDeFrases } from './../commonWords.js';


//var testFrase = generadorDeFrases()

var startTime
var startHoursToSeconds 
var startMinutesToSeconds 
var startSeconds 
var tot_start

var finishTime
var finishHoursToSeconds 
var finishMinutesToSeconds 
var finishSeconds 
var tot_finish

var wpm_

export default function TypingBox() {
  const [inputText, setInputText] = useState(""); // texto de la cajita
  const [letterArray, setLetterArray] = useState([]); // array con el componente de letras
  const [key, setKey] = useState("");  // tecla del usuraio
  const [typingStart, setTypingStart] = useState(0)
  const [wpm, setWpm] = useState(0)
  const [testFrase, setTestFrase] = useState("")

  const changeTypingState = () =>{
    if (typingStart === 0){
      console.log("new date")
      setInputText("")
      startTime = new Date()

      startHoursToSeconds = startTime.getHours()*3600
      startMinutesToSeconds = startTime.getMinutes()*60
      startSeconds = startTime.getSeconds()
      tot_start = startHoursToSeconds + startMinutesToSeconds + startSeconds

      setTestFrase(generadorDeFrases())
      setTypingStart(1);
    } else {
      setInputText("")
      setTypingStart(0);
    }
  }
  

  const convertFraseToLetterArray = (frase, curKey) => {
    const letters = frase.split("").map((letter, index) => {
      if (typingStart == 0){
        return <Letter key={index} letter={letter} writingStatus={-2} />;
      }

      if (letter === inputText[index] && index < inputText.length) {
        return <Letter key={index} letter={letter} writingStatus={1} />;

      } else if (letter !== inputText[index] && index < inputText.length) {

        return <Letter key={index} letter={letter} writingStatus={0} />;
      } else {

        return <Letter key={index} letter={letter} writingStatus={-1} />;
      }
    });
    setLetterArray(letters);

    if (inputText.length === testFrase.length && typingStart === 1){
      finishTime = new Date()

      finishHoursToSeconds = finishTime.getHours()*3600
      finishMinutesToSeconds = finishTime.getMinutes()*60
      finishSeconds = finishTime.getSeconds()
      tot_finish = finishHoursToSeconds + finishMinutesToSeconds + finishSeconds
      
      wpm_ = Math.trunc((30*60)/(tot_finish - tot_start))
      setWpm(wpm_)

      changeTypingState();
    }
  };


  useEffect(() => {
    convertFraseToLetterArray(testFrase, key);
  }, [typingStart, key, inputText]); 


  useEffect(() => {
    function handleKeyPress(event) {
      const pressedKey = event.key;

      if (pressedKey === "Backspace") {
        setInputText((prevText) => prevText.slice(0, -1));
      } else if (pressedKey.length === 1) {
        console.log("hola");
        setInputText((prevText) => prevText + pressedKey);
      }
      setKey(pressedKey);
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []); 

  return (
    <div>
      <div className="flex justify-center text-xl font-bold pt-6 pb-0">
        {typingStart == 0 ? wpm : ""}
      </div>


      <h1 className="ml-10 mb-1">Typing Box</h1>
           <div id="typingBox" className="rounded-lg px-2 py-2 mx-10">
        {letterArray}
      </div>
      <div className="flex justify-center">
        <Button text="start" onClick={changeTypingState}></Button>
      </div>
    </div>
  );
}

