import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#1A1A1A] text-white font-sans scroll-smooth">
      
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
        <h1 className="text-[60px] font-[var(--font-cantata)]">Kevin Ye</h1>
        <p className="text-[20px] font-[var(--font-cantata)] text-gray-300">Computer Engineering at Queen’s University</p>
        <div className="w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-white">
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
      <section id="about" className="text-center px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-[32px] font-[var(--font-cantata)] font-bold mb-6">01. About Me</h2>
        <p className="text-gray-300 font-[var(--font-cantata)] leading-relaxed mb-10">
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
      <section id="projects" className="text-center px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-[32px] font-[var(--font-cantata)] font-bold mb-4">02. Projects</h2>
        {/* Add project cards or content here later */}
        <p className="text-gray-400">Project details coming soon...</p>
      </section>
    </div>
  );
}
