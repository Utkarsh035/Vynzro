import { HiOutlineArrowRight } from 'react-icons/hi2';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import Tilt3D from '../ui/Tilt3D';
import '../../styles/testimonials.css';

/**
 * CTA section — replaces testimonials since the company is brand new.
 * This will convert to real testimonials once clients come in.
 */
export default function Testimonials() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-inner">
        <SectionHeader
          label="Partner With Us"
          title="Be Our First Success Story"
          subtitle="We're looking for visionary businesses and startups to partner with. Let's build something extraordinary together."
        />

        <ScrollReveal>
          <Tilt3D intensity={3} scale={1.005}>
            <div className="cta-card">
              <div className="cta-card-emoji">🤝</div>
              <h3>Early Adopter Advantage</h3>
              <p>
                As one of our founding clients, you'll receive dedicated attention, priority support,
                and competitive pricing. We're invested in making your project a showcase of what Vynzro can do.
              </p>
              <button
                className="hero-btn-primary"
                onClick={() => scrollTo('#contact')}
                id="testimonials-cta-btn"
              >
                Start a Conversation <HiOutlineArrowRight />
              </button>
            </div>
          </Tilt3D>
        </ScrollReveal>
      </div>
    </section>
  );
}
