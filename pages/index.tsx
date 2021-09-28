import { useRouter } from 'next/router';
export default function Home():JSX.Element {
	const router = useRouter();
  
	function handleClick() {
		router.push('/login');
	}
	return (
		<>
			<h1 onClick={handleClick}>Login</h1>
		</>
	);
}
