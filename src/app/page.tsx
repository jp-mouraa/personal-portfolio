import Image from "next/image"
import profilePic from "../public/me.png"

export default function HomePage() {
  return (
    <>
      <main>
        <h1>Olá, eu sou o João Pedro</h1>
        <Image src={profilePic} alt="jp" width={150} height={150}/> 
        <p>Desenvolvedor de IA, Cientista de Dados, etc...</p>
      </main>
    </>
  )
}