import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { Container } from './style';
import colorBrand from 'src/color';
export type ErrorField = {
  isInvalid: boolean,
  messageError: string
}

interface inputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  idForInput: string;
  labelText: string;
  ErrorField: ErrorField;
}

export default function Input({ idForInput, labelText, ErrorField, ...props }: inputProps):JSX.Element {
	return (
		<>
			<Container>
				<label htmlFor={idForInput}>{labelText}</label>
				<input
					style={{
						borderColor: ErrorField.isInvalid
							? colorBrand.ErrorColor
							: colorBrand.GreySaturated
					}}
					id={idForInput}
					{...props}
				/>
				{ErrorField.isInvalid && (
					<span>*{ErrorField.messageError || 'User is invalid'}</span>
				)}
			</Container>
		</>
	);
}
