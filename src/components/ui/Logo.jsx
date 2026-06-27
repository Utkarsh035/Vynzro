import { Link } from 'react-router-dom';
import '../../styles/logo.css';

export default function Logo({ inverse = false, className = '' }) {
  return (
    <Link
      to="/"
      className={`vynzro-brand-logo-img ${inverse ? 'inverse' : ''} ${className}`}
      aria-label="Vynzro Home"
    >
      <img
        src={`${import.meta.env.BASE_URL}vynzro-wordmark.png`}
        alt="Vynzro Logo"
        className="logo-img"
      />
    </Link>
  );
}
