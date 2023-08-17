import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Ammar, if you haven&apos;t already gathered that by
              now. I&apos;m a coach turned software engineer from Egypt.
              I specialize in the Front end, primarily NextJs and React, but
              love building with whatever tools are right for the job.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I currently work as a freelancer on Upwork. I also toss in my ¢2
              with the backend systems teams from time to time (as i strongly familiar with backend technologies).
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>

              Outside of work, I still love to exercise, spend some quality time with my family, and of course, mess around with whatever I am learning.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m actively looking for new positions where I can join a team to utilize my
              love for code and building stuff. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
