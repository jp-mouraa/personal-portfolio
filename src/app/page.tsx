import Image from "next/image"
import profilePic from "../../public/me.png"

export default function HomePage() {
  return (
    <main>
      <div>
        <h1 className="text-4xl font-bold text-center">Hi! I am João Pedro</h1>
        <h1 className="text-4xl text-center mb-5">Welcome to my portifolio!</h1>
        <div className="flex justify-center mb-5">
          <Image src={profilePic} alt="jp" width={225} height={225} 
          className="rounded-full object-cover shadow-lg border-2 border-gray-500"/>
        </div>
        <div className="text-center mb-5">
          <p className="text-center text-gray-300 mb-4">
            • Bachelor of Data Science and Artificial Intelligence from{" "}
            <a className="text-blue-400 hover:underline"> PUCRS </a>
            <br/>
            • Master&apos;s Student in Computer Science from {" "}
            <a className="text-blue-400 hover:underline"> PUCRS </a>
            <br/>
            • Future Full Stack Specialist from {" "}
            <a className="text-blue-400 hover:underline"> PUCRS </a>
          </p>
        </div>
      </div>
    </main>
  )
}