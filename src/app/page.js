import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1> Who is Favour Salako?</h1>
        <div >
          <h2 className={styles.border}>About Me</h2>
          <p>
            I am a full-stack developer with a passion for creating web
            applications. I enjoy learning new technologies and building
            projects that solve real-world problems and increases access to technology for everyone.
            I am versed in technologies like:
            <ul className={styles.break}>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Java</li>
              <li>Python</li>
              <li>AWS</li>
              <li>SQL</li>
            </ul>

            <p className={styles.break}>
              I am always down for opportunities to collaborate and work on exciting projects. I am also open to learning new technologies and tools, so if you have any suggestions, feel free to reach out to me. I am also open to mentorship opportunities, as I believe that the best way to learn is by teaching others.
            </p>

          </p>

        </div>

        <div>
          <h2 className={styles.border}>My Experiences & Education</h2>
            <b className={styles.sub_header}>Education</b>
            <ol type="none">
              <pre>
                I graduated from the University of South Florida with a major in Information Technology May 2024
              </pre>
            </ol>

            <b className={styles.sub_header}>Experience</b>
            <ol >
              <li>Revature  </li>
              <li>360 Advanced</li>
              <li>Snaap transportation</li>
            </ol>
            
          
        </div>
        <div>
          <h2 className={styles.border}>My Projects </h2>
            <ul>
              <li>AI-hairstyler : Worked alongside a team of 4 to use the Barbershop AI model with flutter to create an app that allowed a user to change the colour & style of uploaded pictures</li>
              <li>A transactional mailer with Resend & React</li>
              <li>The Cow & Bull game in C#</li>
            </ul>
            <p className={styles.break}>
            AI is here to stay, as it's effeciency cannot be ignored. Hence, I am researching and learning more on LLMs, how they can be used to increase productivity while reducing repetitive work. The best way to do so is by building with it
            Which is why I am working on projects in Cursor, and also learning how to use Langraph to build AI agents (3/7/2025).
            </p>
          
        </div>

        <div>
          <h2 className={styles.border}>Entrepreneurship</h2>

          <ul>
            <li> <b><u><a href="https://taskrocky.com/" target="_blank"> TaskRocky </a></u></b> </li>
            <li> <b><u><a href="https://www.springworthbooks.com/" target ="_blank"></a> Sprigworth Books </u></b></li>
          </ul>
        </div>

        <div>
          <h2 className={styles.border}>Certifications Attained</h2>
          <ul>
            <li> <b>AWS Certified <u><a href="https://www.credly.com/badges/93c931a6-eb43-425b-8c7b-4bf66beceb89/public_url" target="_blank"> Cloud Practitioner </a></u></b> -: I gained knowledge on the fundamentals of the cloud, especially AWS's services and when to use them.   </li>
            <li> <b>Certified <u><a href="https://www.credly.com/badges/988dc4ef-b3b6-4b76-8dd7-0d31d61c4843/public_url" target="_blank"> Solutions Architect Associate </a></u></b> -: There is a lot to unpack with this but it exceeded just knowing about AWS's services, 
              at its core is knowing which of the numerous AWS services would fit a specific business need while also deferring to the well architected framework to build a scalable, secure, and fault-resistant architecture. </li>
            <li> <b>Microsoft Power Platform App Maker PL-900</b> -: I learnt about the offering of power platform, from power i, to power apps, to power automate, to copilot studio, and also power pages, and when and how to use them.</li>
          </ul>
        </div>

        <div>
          <h2 className={styles.border}>My Hobbies</h2>
          <p>I enjoy reading for reading sake, and also to learn new things, I enjoy watching movies and shows, (any and all genre, name it, i'm ready), 
            I also enjoy sleeping - a lot. In terms of athletics, I like playing soccer, and love table-tennis</p>
        </div>
      </main>

      <footer className={styles.footer}>

      <p>If you would love to chat, or connect, let's get in touch </p>

        <ol>
          <a
            href="https://www.linkedin.com/in/favour-salako-picnic/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin.png"
              alt="linkedin icon"
              width={50}
              height={50}
            />
            LinkedIn
          </a>
          <p className={styles.break}></p>
          <a
            href="https://github.com/salakofavour"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.png"
              alt="github icon"
              width={50}
              height={50}
            />
            Github
          </a>

          <p className={styles.break}></p>

        </ol>
        
      </footer>
    </div>
  );
}
