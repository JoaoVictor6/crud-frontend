import { Container } from '@PagesStyles/HomePage';
import Menu from '@components/Menu';
import Head from 'next/head';
export default function Home(): JSX.Element{
	return (
		<>
			<Head>
				<title>Home - Crud</title>
			</Head>
			<Container>
				<Menu />
			</Container>
		</>
	);
}