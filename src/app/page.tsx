import Image from "next/image"
import profilePic from "../public/me.png"

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">Olá, eu sou o João Pedro</h1>
      <Image src={profilePic} alt="jp" width={150} height={150} className="mx-auto rounded-full" />
      <p className="mt-4 text-gray-300">Desenvolvedor de IA, Cientista de Dados, etc...</p>
    </section>
  )
}