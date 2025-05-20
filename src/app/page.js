import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#1A1A1A] text-white scroll-smooth">
      
      {/* --- Fixed Nav Bar --- */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] flex items-center justify-between px-6 py-2 border-b border-[#282828]">
        <div className="flex items-center space-x-50">
          {/* <a
            href="https://linkedin.com/in/kevinye0525"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="transition duration-300 ease-in-out group-hover:brightness-50"
            />
          </a> */}
          {/* <a
            href="https://github.com/kzy0525"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={50}
              height={50}
              className="transition duration-300 ease-in-out group-hover:brightness-50"
            />
          </a> */}
        </div>
        <div className="flex space-x-6 text-lg">
          <a href="#about" className="cantata py-2 duration-300 ease-in-out hover:brightness-50">About</a>
          <a href="#projects" className="cantata py-2 duration-300 ease-in-out hover:brightness-50">Projects</a>
          <a href="#skills" className="cantata py-2 duration-300 ease-in-out hover:brightness-50">Skills</a>
          <a href="#resume" className="cantata py-2 duration-300 ease-in-out hover:brightness-50">Resume</a>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <main className="flex flex-col items-center text-center mt-15 px-4">
        <h1 className="cantata text-[70px] mt-15">Kevin Ye</h1>
        <p className="cantata text-[25px] mt-2">Computer Engineering at Queen’s University</p>
        <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-2 border-white mt-10">
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
      <section id="about" className="text-center px-6 py-30 max-w-4xl mx-auto font-[var(--font-cantata)]">
        <h2 className="cantata text-[32px] py-6">01. About Me</h2>
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
        <h2 className="cantata text-center text-[32px] mb-4">02. Projects</h2>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-15 gap-y-5 max-w-xl mx-auto mt-35"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-full max-w-7xl mx-auto px-4 mt-35">

          {/* --- Project 1 --- */}
          <a
            href="https://github.com/kzy0525/Hyperloop-Object-Detection"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-[300px] h-[415px] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
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
            className="relative group w-[300px] h-[415px] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 mt-[-80px]"
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
            className="relative group w-[300px] h-[415px] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
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
            className="relative group w-[300px] h-[415px] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105 mt-[-80px]"
          >
            <Image
              src="/nomad.png"
              alt="Nomad"
              fill
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50 rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
              <p className="text-sm text-gray-300 mb-1">Mar 2024</p>
              <h3 className="text-2xl font-semibold">Nomad</h3>
              <p className="text-sm text-gray-300 mt-1">UX</p>
            </div>
          </a>

          {/* --- Project 5 --- */}
          <a
            href="https://github.com/kzy0525/Motion-Classification-Model"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group w-[300px] h-[415px] rounded-2xl overflow-hidden shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src="/292.png"
              alt="292"
              fill
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-50 rounded-2xl"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-300 bg-black/20">
              <p className="text-sm text-gray-300 mb-1">Mar 2025</p>
              <h3 className="text-2xl font-semibold">Motion Classification Model</h3>
              <p className="text-sm text-gray-300 mt-1">Back-end</p>
            </div>
          </a>
        </div>
      </section>

      {/* --- Skills Section --- */}
      <section id="skills" className="text-center px-6 py-20 max-w-6xl mx-auto">
        <h2 className="cantata text-[32px] mb-6">03. Skills</h2>
        <p className="text-gray-300 text-lg">Languages, Frameworks and Libraries</p>

        <div className="flex flex-wrap justify-center gap-12 mt-14">
          {[
            { src: "js.png", name: "JavaScript" },
            { src: "html.png", name: "HTML" },
            { src: "css.png", name: "CSS" },
            { src: "C.png", name: "C" },
            { src: "python.png", name: "Python" },
            { src: "java.png", name: "Java" },
            { src: "tf.png", name: "TensorFlow" },
            { src: "react.png", name: "React" },
            { src: "sql.png", name: "SQL" },
            { src: "Node.js.png", name: "Node.js" },
            { src: "arduino.png", name: "Arduino" },
            { src: "Selenium.png", name: "Selenium" },
            { src: "figma.png", name: "Figma" },
          ].map(({ src, name }, i) => (
            <div
              key={i}
              className="group relative w-[100px] h-[100px] transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <Image src={`/${src}`} alt={name} fill className="object-contain" />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-2 text-xs bg-black text-white rounded opacity-50 group-hover:opacity-100 transition duration-300 pointer-events-none">
                {name}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* --- Contact & Resume Section --- */}
      <section id="contact" className="text-center px-6 py-20 max-w-6xl mx-auto">
        <h2 className="cantata text-[32px] mb-6">04. Contact & Resume</h2>

        <p className="text-gray-300 text-lg">
          Feel free to connect with me or check out my resume below!
        </p>

        {/* Resume Link */}
        <a
          href="https://drive.google.com/file/d/14zagliotB2y-JqALpBNn8HvbUmy2GnTb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 py-2 mt-10 rounded-md text-[20px] font-semibold transition duration-300 hover:brightness-50"
        >
          Resume PDF
        </a>

        {/* Contact Icons */}
        <div className="flex flex-wrap justify-center gap-12 text-[20px] text-white mt-10">
          {/* GitHub */}
          <a
            href="https://github.com/kzy0525"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src="/github.png"
              alt="GitHub"
              width={50}
              height={50}
              className="transition duration-300 ease-in-out group-hover:brightness-50"
            />
          </a>

          {/* Email */}
          <a
            href="mailto:ye.kevin@queensu.ca"
            target="_blank"
            className="group"
          >
            <Image
              src="/mail.png"
              alt="email"
              width={50}
              height={50}
              className="transition duration-300 ease-in-out group-hover:brightness-50"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/kevinye0525"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="transition duration-300 ease-in-out group-hover:brightness-50"
            />
          </a>
        </div>
      </section>
    </div>
  );
}