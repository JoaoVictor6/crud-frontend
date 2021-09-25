import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { Container, TextAreaDiv, TextAreaHeader } from "./style";

interface TextareaProps{
  labelText: string;
  idForLabel: string;
  maxChar: number;
}

export default function Textarea({ labelText, idForLabel, maxChar }: TextareaProps){
  const [totalLetters, setTotalLetters ] = useState<number>(0)
  function textareaHandler(event: ChangeEvent<HTMLTextAreaElement>){
    const value = event.target.value.length
    if(value > maxChar)return
    setTotalLetters(value)
  }
  return(
    <Container>
      <TextAreaHeader>
        <label htmlFor={idForLabel}>{labelText}</label>
        <span>{totalLetters}/{maxChar}</span>
      </TextAreaHeader>
      <TextAreaDiv>
        <textarea 
          spellCheck
          id={idForLabel} 
          onChange={textareaHandler}
        />
      </TextAreaDiv>
    </Container>
  )
}