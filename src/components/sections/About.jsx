import { HiOutlineEye, HiOutlineRocketLaunch, HiOutlineHeart, HiOutlineStar } from 'react-icons/hi2';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import SpotlightCard from '../ui/SpotlightCard';
import Tilt3D from '../ui/Tilt3D';
import '../../styles/about.css';

const missionCards = [
  {
    icon: <HiOutlineEye />,
    title: 'Our Vision',
    description: 'To become a globally recognized technology partner that shapes the digital future for businesses of all sizes.',
  },
  {
    icon: <HiOutlineRocketLaunch />,
    title: 'Our Mission',
    description: 'Deliver innovative, reliable, and scalable technology solutions that create measurable impact.',
  },
  {
    icon: <HiOutlineHeart />,
    title: 'Our Values',
    description: 'Innovation, integrity, excellence, and client-centricity guide every decision we make.',
  },
  {
    icon: <HiOutlineStar />,
    title: 'Our Promise',
    description: 'World-class quality, transparent communication, and unwavering commitment to your success.',
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <SectionHeader
          label="Who We Are"
          title="A Young Company With Bold Ambitions"
          subtitle="Founded by a 20-year-old visionary, Vynzro is redefining what a modern IT company looks like."
        />

        <div className="about-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '780px', margin: '3rem auto 0' }}>
          <ScrollReveal>
            <div className="about-text">
              <p>
                At <span className="about-highlight">Vynzro</span>, we believe age is no barrier to excellence.
                Born in 2026 from a passion for technology and a drive to innovate, we bring fresh perspectives
                to the IT industry combined with relentless execution.
              </p>
              <p>
                We're a brand-new company — and that's our superpower. No legacy baggage, no outdated processes.
                Just a dedicated team of engineers, designers, and strategists ready to build technology
                that's <span className="about-highlight">exceptional from day one</span>. Our first product is
                already under active development, with more in the pipeline.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="about-mission-cards">
          {missionCards.map((card, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Tilt3D intensity={4} scale={1.01}>
                <SpotlightCard className="mission-card">
                  <div className="mission-card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </SpotlightCard>
              </Tilt3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
