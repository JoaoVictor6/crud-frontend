import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { Container, TextAreaDiv, TextAreaHeader } from './style';

interface TextareaProps extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>, 
  HTMLTextAreaElement>
{
  labelText: string
  idForLabel: string
  maxChar: number
  totalChar: number
}

export default function Textarea({ 
	labelText, 
	idForLabel, 
	maxChar, 
	totalChar, 
	...props 
}: TextareaProps): JSX.Element{
	return(
		<Container>
			<TextAreaHeader>
				<label htmlFor={idForLabel}>{labelText}</label>
				<span>{totalChar}/{maxChar}</span>
			</TextAreaHeader>
			<TextAreaDiv>
				<textarea 
					{ ...props }
					spellCheck
					id={idForLabel} 
				/>
			</TextAreaDiv>
		</Container>
	);
}