
"use client";

import React from 'react';

export default function Letter({letter, writingStatus}){
  var letter_color;
  if (writingStatus == 1){
    letter_color = "rgb(166, 227, 161)"
  } else if (writingStatus == 0){
   letter_color = "rgb(243, 139, 168)" 
    
  } else if (writingStatus == -1){
   letter_color = "rgb(245, 224, 220)" 
  } else if (writingStatus == -2){
    letter_color = "rgb(49, 50, 68)"
  }

  const letterStyle = {
    color: letter_color,
    "fontSize": 25
  }


  return (
    <span style={letterStyle}>{letter}</span>
  )

}
