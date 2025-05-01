import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Nav Bar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        {/* Left: Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://linkedin.com/in/kevinye0525" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" width={32} height={32} />
          </a>
          <a href="https://github.com/kzy0525" target="_blank" rel="noopener noreferrer">
            <Image src="/github.png" alt="GitHub" width={32} height={32} />
          </a>
        </div>

        {/* Right: Nav Links */}
        <div className="flex space-x-6 text-lg font-semibold">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center mt-20 space-y-6 px-4">
      <h1 className="text-[96px] font-bold">Kevin Ye</h1>
        <p className="text-[36px] text-gray-300">Computer Engineering at Queen’s University</p>
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white">
          <Image
            src="/headshot.png" // replace with your actual image path in /public
            alt="Kevin Ye"
            width={192}
            height={192}
            objectFit="cover"
          />
        </div>
      </main>
    </div>
  );
}
