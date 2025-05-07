import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#1A1A1A] text-white font-[var(--font-cantata)] scroll-smooth">
      
      {/* --- Fixed Nav Bar --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <a href="https://linkedin.com/in/kevinye0525" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
          </a>
          <a href="https://github.com/kzy0525" target="_blank" rel="noopener noreferrer">
            <Image src="/github.png" alt="GitHub" width={40} height={40} />
          </a>
        </div>
        <div className="flex space-x-6 text-lg font-semibold">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="flex flex-col items-center text-center mt-20 px-4 space-y-6">
        <h1 className="text-[60px]">Kevin Ye</h1>
        <p className="text-[20px] text-gray-300">Computer Engineering at Queen’s University</p>
        <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-white">
          <Image
            src="/headshot.png"
            alt="Kevin Ye"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
          {/* 🔧 Hover Test */}
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Hover me
          </button>


      </main>

      {/* --- About Section --- */}
      <section id="about" className="text-center px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-[32px] font-bold mb-6">01. About Me</h2>
        <p className="text-gray-300 leading-relaxed mb-10">
          I’m from Vancouver, BC and I am currently a Computer Engineering student at Queen’s University. 
          I am interested in software engineering, artificial intelligence, and UX design. As I continue to learn 
          and gain experience, this site will be updated with current projects along with my contact information, 
          skills, and resume. In my free time, I enjoy playing badminton, travelling, and doing the NYT Wordle. 
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Image src="/tofu.png" alt="Dog" width={250} height={250} className="rounded-lg" />
          <Image src="/beach.png" alt="Beach lift" width={250} height={250} className="rounded-lg" />
          <Image src="/violin.png" alt="Piano" width={250} height={250} className="rounded-lg" />
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="text-center px-6 py-20 max-w-6xl mx-auto font-[var(--font-cantata)]">
        <h2 className="text-[32px] font-bold mb-4">02. Projects</h2>
        <p className="text-white mb-12">Some past projects I’ve worked on</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center">
          {/* --- Project 1 --- */}
          <a
            href="https://example.com/machine-vision"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full max-w-sm rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/qhdt.png"
              alt="Machine Vision Sensor System"
              width={400}
              height={400}
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
              <p className="text-sm text-gray-300 mb-1">Feb 2024</p>
              <h3 className="text-2xl font-semibold">Machine Vision Sensor System</h3>
              <p className="text-sm text-gray-300 mt-1">ML, Full-stack</p>
            </div>
          </a>

          {/* --- Project 2 --- */}
          <a
            href="https://example.com/atmos"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full max-w-sm rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/atmos.png"
              alt="Atmos"
              width={400}
              height={400}
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
              <p className="text-sm text-gray-300 mb-1">Jan 2024</p>
              <h3 className="text-2xl font-semibold">Atmos</h3>
              <p className="text-sm text-gray-300 mt-1">Hardware, Full-stack</p>
            </div>
          </a>

          {/* --- Project 3 --- */}
          <a
            href="https://example.com/club-site"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full max-w-sm rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/inqubateweb.png"
              alt="University Club Website"
              width={400}
              height={400}
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
              <p className="text-sm text-gray-300 mb-1">Nov 2023</p>
              <h3 className="text-2xl font-semibold">University Club Website</h3>
              <p className="text-sm text-gray-300 mt-1">UX, Front-end</p>
            </div>
          </a>

          {/* --- Project 4 --- */}
          <a
            href="https://example.com/nomad"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-full max-w-sm rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/nomad.png"
              alt="Nomad"
              width={400}
              height={400}
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
              <p className="text-sm text-gray-300 mb-1">March 2024</p>
              <h3 className="text-2xl font-semibold">Nomad</h3>
              <p className="text-sm text-gray-300 mt-1">UX</p>
            </div>
          </a>
        </div>
      </section>
            
    </div>
  );
}

