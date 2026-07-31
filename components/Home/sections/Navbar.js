import { useEffect, useState } from "react";

/**
 * Navbar — the top menu bar.
 * Two small pieces of state:
 *  - menuOpen: is the mobile menu open? (toggled by the hamburger button)
 *  - scrolled: has the user scrolled down? (used to give the navbar a
 *    solid background instead of a transparent one over the hero image)
 */
export default function Navbar({ brand, links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function checkScrollPosition() {
      setScrolled(window.scrollY > 24);
    }

    checkScrollPosition(); // run once on page load too
    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`navbarParentNode ${scrolled ? "navbarParentNode--scrolled" : ""}`}>
      <div className="navbarParentNode__inner">
        <a href="#hero" className="navbarParentNode__brand">
          <img src={brand.emblem} alt="" className="navbarParentNode__emblem" />
          <span className="navbarParentNode__brandText">
            {brand.shortName}
            <small>{brand.name}</small>
          </span>
        </a>

        <nav className={`navbarParentNode__links ${menuOpen ? "navbarParentNode__links--open" : ""}`}>
          {links.map((item) => (
            <a key={item.href} href={item.href} className="navbarParentNode__link" onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="navbarParentNode__cta" onClick={closeMenu}>
            Get a Quote
          </a>
        </nav>

        <button
          type="button"
          className={`navbarParentNode__toggle ${menuOpen ? "navbarParentNode__toggle--open" : ""}`}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
