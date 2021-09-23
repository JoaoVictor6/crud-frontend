import { useRouter } from "next/router"

const Home = () => {
  const router = useRouter()
  
  function handleClick() {
    router.push('/login')
  }
  return (
      <>
      <h1 onClick={handleClick}>Login</h1>
      </>
  )
}

export default Home
