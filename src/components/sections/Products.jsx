import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { products } from '../../data/staticData';
import SpotlightCard from '../ui/SpotlightCard';
import Tilt3D from '../ui/Tilt3D';
import '../../styles/products.css';

const iconMap = {
  HiOutlineRocketLaunch: <HiOutlineRocketLaunch />,
};

const statusLabel = {
  live: 'Live',
  beta: 'Beta',
  'coming-soon': 'Coming Soon',
  'in-development': 'In Development',
};

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products-inner">
        <SectionHeader
          label="Our Products"
          title="What We're Building"
          subtitle="Our debut product is under active development — launching Q4 2026."
        />

        <div className="products-grid">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <Tilt3D intensity={3} scale={1.005}>
                <SpotlightCard className="product-card">
                  <div className="product-card-inner-layout">
                    <div className="product-card-image">
                      <span className="product-card-image-icon">
                        {iconMap[product.icon] || <HiOutlineRocketLaunch />}
                      </span>
                      <span className={`product-badge ${product.status}`}>
                        {statusLabel[product.status]}
                      </span>
                    </div>
                    <div className="product-card-body">
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      {product.launchDate && (
                        <p style={{
                          fontSize: 'var(--text-sm)',
                          fontWeight: 600,
                          color: 'var(--accent-indigo)',
                          marginBottom: 'var(--space-md)',
                        }}>
                          🚀 Expected Launch: {product.launchDate}
                        </p>
                      )}
                      <div className="product-tech-stack">
                        {product.techStack.map((tech) => (
                          <span className="tech-tag" key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </Tilt3D>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
