import { useEffect, useState } from "react";

/**
 * Navbar — the top menu bar.
 * Two small pieces of state:
 *  - menuOpen: is the mobile menu open? (toggled by the hamburger button)
 *  - scrolled: has the user scrolled down? (used to give the navbar a
 *    solid background instead of a transparent one over the hero image)
 */
export default function Navbar({ brand, links, basePath = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // On the homepage, "#about" scrolls to the section on the current page.
  // On any other page (e.g. /careers), it needs to be "/#about" so it
  // takes the visitor back to the homepage first. Only anchor links are
  // rewritten — regular page links like "/careers" pass through as-is.
  function resolveHref(href) {
    return href.startsWith("#") ? `${basePath}${href}` : href;
  }

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
        <a href={resolveHref("#hero")} className="navbarParentNode__brand">
          <img src={brand.emblem} alt="" className="navbarParentNode__emblem" />
          <span className="navbarParentNode__brandText">
            {brand.shortName}
            <small>{brand.name}</small>
          </span>
        </a>

        <nav className={`navbarParentNode__links ${menuOpen ? "navbarParentNode__links--open" : ""}`}>
          {links.map((item) => (
            <a key={item.href} href={resolveHref(item.href)} className="navbarParentNode__link" onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href={resolveHref("#contact")} className="navbarParentNode__cta" onClick={closeMenu}>
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
