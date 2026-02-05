import { colors, fonts } from '../../config/tokens';

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap');

    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      font-family: ${fonts.body};
      color: ${colors.charcoal};
      background: ${colors.cream};
      -webkit-font-smoothing: antialiased;
      line-height: 1.7;
    }

    ::selection {
      background: ${colors.gold};
      color: ${colors.white};
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }

    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-12px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gentlePulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    .animate-in { animation: fadeUp 0.7s ease-out forwards; }
    .animate-in-delay-1 { animation: fadeUp 0.7s ease-out 0.1s forwards; opacity: 0; }
    .animate-in-delay-2 { animation: fadeUp 0.7s ease-out 0.2s forwards; opacity: 0; }
    .animate-in-delay-3 { animation: fadeUp 0.7s ease-out 0.3s forwards; opacity: 0; }
    .animate-in-delay-4 { animation: fadeUp 0.7s ease-out 0.4s forwards; opacity: 0; }
    .animate-in-delay-5 { animation: fadeUp 0.7s ease-out 0.5s forwards; opacity: 0; }

    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; display: block; }

    /* Responsive utilities */
    @media (max-width: 1024px) {
      .hide-tablet { display: none !important; }
    }

    @media (max-width: 768px) {
      .hide-mobile { display: none !important; }
    }

    @media (min-width: 769px) {
      .show-mobile-only { display: none !important; }
    }
  `}</style>
);

export default GlobalStyles;
