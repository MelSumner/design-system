// eslint-disable-next-line no-undef
module.exports = {
  mode: 'jit',
  purge: ['**/*.hbs'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: 'var(--white)',
        black: 'var(--black)',
        'gray-7': 'var(--gray-7)',
        'gray-6': 'var(--gray-6)',
        'gray-5': 'var(--gray-5)',
        'gray-4': 'var(--gray-4)',
        'gray-3': 'var(--gray-3)',
        'gray-2': 'var(--gray-2)',
        'gray-1': 'var(--gray-1)',
        brand: 'var(--brand)',
        'brand-secondary': 'var(--brand-secondary)',
        'brand-logomark': 'var(--brand-logomark)',
        'brand-accent': 'var(--brand-accent)',
        'brand-link': 'var(--brand-link)',
        'brand-link-on-dark': 'var(--brand-link-on-dark)',
        'brand-text-on-primary': 'var(--brand-text-on-primary)',
        'brand-gradient': 'var(--brand-gradient)',
        'info-l2': 'var(--info-l2)',
        'info-l1': 'var(--info-l1)',
        info: 'var(--info)',
        'info-d1': 'var(--info-d1)',
        'warning-l2': 'var(--warning-l2)',
        'warning-l1': 'var(--warning-l1)',
        warning: 'var(--warning)',
        'warning-d1': 'var(--warning-d1)',
        'danger-l2': 'var(--danger-l2)',
        'danger-l1': 'var(--danger-l1)',
        danger: 'var(--danger)',
        'danger-d1': 'var(--danger-d1)',
        'success-l2': 'var(--success-l2)',
        'success-l1': 'var(--success-l1)',
        success: 'var(--success)',
        'success-d1': 'var(--success-d1)',
        visited: 'var(--visited)',
        'visited-d1': 'var(--visited-d1)',
        'code-dark': 'var(--code-dark)',
        'code-light': 'var(--code-light)',
        'code-light-transparent': 'var(--code-light-transparent)',
        'code-comments': 'var(--code-comments)',
        'code-strings': 'var(--code-strings)',
        'code-numbers': 'var(--code-numbers)',
        'code-operators': 'var(--code-operators)',
        'code-properties': 'var(--code-properties)',
        'code-control': 'var(--code-control)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '8rem',
        xl: '10rem',
        '2xl': '12rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};