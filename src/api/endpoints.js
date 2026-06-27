/**
 * Centralized API endpoint constants.
 * Update these to match your Spring Boot @RequestMapping paths.
 */
const ENDPOINTS = {
  // Contact
  CONTACT_SUBMIT: '/contact',

  // Services
  SERVICES_LIST: '/services',
  SERVICES_BY_ID: (id) => `/services/${id}`,

  // Products
  PRODUCTS_LIST: '/products',
  PRODUCTS_BY_ID: (id) => `/products/${id}`,

  // Testimonials
  TESTIMONIALS_LIST: '/testimonials',

  // Newsletter
  NEWSLETTER_SUBSCRIBE: '/newsletter/subscribe',

  // Auth (future)
  AUTH_LOGIN: '/auth/login',
  AUTH_REGISTER: '/auth/register',
  AUTH_REFRESH: '/auth/refresh',
  AUTH_LOGOUT: '/auth/logout',
  AUTH_SESSION: '/auth/session',
};

export default ENDPOINTS;
