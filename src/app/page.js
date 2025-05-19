import Image from "next/image";
import HoverImage from "./components/HoverImage";


export default function Home() {
  return (
    <div className="bg-[#1A1A1A] text-white font-[var(--font-cantata)] scroll-smooth">
      
      {/* --- Fixed Nav Bar --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] flex items-center justify-between px-6 py-2 border-b border-[#282828]">
        <div className="flex items-center space-x-4">
          <a
            href="https://linkedin.com/in/kevinye0525"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={35}
              height={35}
              className="transition duration-300 ease-in-out group-hover:brightness-50"
            />
          </a>
          <a
            href="https://github.com/kzy0525"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={41}
              height={41}
              className="transition duration-300 ease-in-out group-hover:brightness-50"
            />
          </a>
        </div>
        <div className="flex space-x-6 text-lg font-semibold">
          <a href="#about" className="duration-300 ease-in-out hover:brightness-50">About</a>
          <a href="#projects" className="duration-300 ease-in-out hover:brightness-50">Projects</a>
          <a href="#skills" className="duration-300 ease-in-out hover:brightness-50">Skills</a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="flex flex-col items-center text-center mt-15 px-4">
        <h1 className="text-[70px] mt-15">Kevin Ye</h1>
        <p className="text-[30px] text-gray-300 py-5">Computer Engineering at Queen’s University</p>
        <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-2 border-white mt-8">
          <Image
            src="/headshot.png"
            alt="Kevin Ye"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      </main>

      {/* --- About Section --- */}
      <section id="about" className="text-center px-6 py-30 max-w-4xl mx-auto">
        <h2 className="text-[32px] font-bold mb-6">01. About Me</h2>
        <p className="text-gray-300 leading-relaxed py-5">
          I’m from Vancouver, BC and I am currently a Computer Engineering student at Queen’s University. 
          I am interested in software engineering, artificial intelligence, and UX design. As I continue to learn 
          and gain experience, this site will be updated with current projects along with my contact information, 
          skills, and resume. In my free time, I enjoy playing badminton, travelling, and doing the NYT Wordle.
          Feel free to reach out at ye.kevin@queensu.ca!
        </p>
        <div className="flex flex-wrap justify-center py-5 gap-6">
          <Image src="/tofu.png" alt="Dog" width={250} height={250} className="rounded-lg" />
          <Image src="/beach.png" alt="Beach lift" width={250} height={250} className="rounded-lg" />
          <Image src="/violin.png" alt="Piano" width={250} height={250} className="rounded-lg" />
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="px-6 py-5 max-w-full mx-auto font-[var(--font-cantata)]">
        <h2 className="text-center text-[32px] font-bold mb-4">02. Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-15 gap-y-5 max-w-xl mx-auto mt-15">
          {/* --- Project 1 --- */}
          <a
            href="https://github.com/kzy0525/Hyperloop-Object-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-[300px] h-[415px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/image.png"
              alt="qhdt"
              fill
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50 rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
              <p className="text-sm text-gray-300 mb-1">Sept 2024</p>
              <h3 className="text-2xl font-semibold">Machine Vision Sensor System</h3>
              <p className="text-sm text-gray-300 mt-1">Hardware, Full-stack</p>
            </div>
          </a>

          {/* --- Project 2 --- */}
          <a
            href="https://github.com/kzy0525/Final-290-Code"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-[300px] h-[415px] rounded-2xl overflow-hidden shadow-lg mt-[-80px]"
          >
            <Image
              src="/atmos.png"
              alt="Atmos"
              fill
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50 rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
              <p className="text-sm text-gray-300 mb-1">Jan 2025</p>
              <h3 className="text-2xl font-semibold">Atmos</h3>
              <p className="text-sm text-gray-300 mt-1">Hardware, Full-stack</p>
            </div>
          </a>

          {/* --- Project 3 --- */}
          <a
            href="https://www.inqubate.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-[300px] h-[415px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/inqubateweb.png"
              alt="University Club Website"
              fill
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50 rounded-2xl"
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
            className="relative group w-[300px] h-[415px] rounded-2xl overflow-hidden shadow-lg mt-[-80px]"
          >
            <Image
              src="/nomad.png"
              alt="Nomad"
              fill
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50 rounded-2xl"
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