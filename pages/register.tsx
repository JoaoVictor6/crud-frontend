import React, { ChangeEvent, FormEvent, useState } from 'react';
import Cards from '@components/Cards';
import Textarea from '@components/Textarea';
import UploadButton from '@components/UploadButton';
import Button from '@components/Button';
import Input, { ErrorField } from '@components/Input';
import { 
	Container,
	FormTitle,
	InputDiv,
	ButtonAndAnchorSection, 
	ProfilePicture,
	ProfilePictureSection
} from '@PagesStyles/RegisterPage';

type formInput = {
	email: string
	password: string
	passwordConfirm: string
	username: string
	description: {
		totalChar: number
		text: string
	}
}

function get64base(file:FileList, cb: (base64: string | ArrayBuffer | null) => void){
	const fileBlob = file[0];
	const reader = new FileReader();
	reader.readAsDataURL(fileBlob);
	reader.onload = () => {
		cb(reader.result);
	};
	reader.onerror = (error) => {
		return `Error: ${error}`;
	};
}

export default function Register(): JSX.Element{
	const [formInputs, setFormInputs] = useState<formInput>({
		description: {
			text: '',
			'totalChar': 0
		},
		email: '',
		password: '',
		passwordConfirm: '',
		username: ''
	});
	const [emailFieldIsValid, setEmailFieldIsValid] = useState({} as ErrorField);
	const [passwordFieldIsValid, setPasswordFieldIsValid] = useState({} as ErrorField);
	const maxChar = 255;

	function submitFormHandler(event:FormEvent) {
		const { email, password } = formInputs;
		const minimunPasswordLength = 8;
		event.preventDefault();
		if(!email.length){
			setEmailFieldIsValid({ isInvalid: true, messageError: 'Empty field' });
		}
		if(password.length < minimunPasswordLength) {
			setPasswordFieldIsValid({
				isInvalid: true, 
				messageError: 'password must be at least 8 characterspassword must be at least 8 characters'
			});
			return;
		}
		setPasswordFieldIsValid({ 
			...passwordFieldIsValid,
			isInvalid: false
		});
		setEmailFieldIsValid({ 
			...emailFieldIsValid, 
			isInvalid: false
		});
	}

	function inputHandler(event: ChangeEvent<HTMLInputElement>): void{
		if(event.target.type === 'file'){
			const fileValue = event.target.files as FileList;
			get64base(fileValue, (base64) => {
				return base64;
			});
			return;
		}
		if(event.target.type === 'textarea'){
			return;
		}

		setFormInputs({
			...formInputs,
			[event.target.name]: event.target.value
		});
	}
	function textAreaHandler(event: ChangeEvent<HTMLTextAreaElement>): void{
		if(formInputs.description.totalChar === maxChar+1){
			return;
		} else {
			setFormInputs({
				...formInputs,
				description: {
					text: event.target.value,
					totalChar: event.target.value.length
				}
			});
		}
	}
	return(
		<Container>
			<Cards>
				<FormTitle className="title-section">Register</FormTitle>
				<form onSubmit={submitFormHandler}>
					<InputDiv>
						<div>
							<ProfilePictureSection>
								<ProfilePicture />
								<UploadButton 
									label="Upload image" 
									onChangeEvent={inputHandler}
								/>
							</ProfilePictureSection>

							<Input
								name="username"
								idForInput="username" 
								type="text" 
								placeholder="Digite seu nome" 
								labelText="Username"
								value={formInputs.username}
								onChange={inputHandler}
								ErrorField={emailFieldIsValid}
							/>

							<Input
								name="password"
								idForInput="password" 
								type="password" 
								placeholder="Digite sua senha" 
								labelText="Senha"
								value={formInputs.password}
								onChange={inputHandler}
								ErrorField={passwordFieldIsValid}
							/>
						</div>
						<div>
							<Textarea 
								idForLabel="description" 
								labelText="Description"
								totalChar={formInputs.description.totalChar}
								maxChar={maxChar}
								onChange={textAreaHandler}
							/>

							<Input
								name="email"
								idForInput="email" 
								type="email"
								placeholder="Digite seu email" 
								labelText="Email"
								value={formInputs.email}
								onChange={inputHandler}
								ErrorField={emailFieldIsValid}
							/>

							<Input
								name="passwordConfirm"
								idForInput="password-confirm" 
								type="password"
								placeholder="Digite sua senha novamente" 
								labelText="Confirme sua senha"
								value={formInputs.passwordConfirm}
								onChange={inputHandler}
								ErrorField={passwordFieldIsValid}
							/>
						</div>
					</InputDiv>
					<ButtonAndAnchorSection>
						<Button fullWidth placeholder="Cadastrar-se"/>
					</ButtonAndAnchorSection>
				</form>
			</Cards>
		</Container>
	);
}