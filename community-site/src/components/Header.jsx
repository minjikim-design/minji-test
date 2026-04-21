import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [{ label: "뉴스레터", href: "#newsletter" }];

  return (
    <header className="site-header" data-scrolled={scrolled} data-open={open}>
      <div className="site-header__inner">
        <a href="#" className="brand" aria-label="코워크시티 홈">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="28" height="28">
              <rect x="3" y="3" width="11" height="11" rx="1.5" fill="currentColor" />
              <rect x="18" y="3" width="11" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="3" y="18" width="11" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <rect x="18" y="18" width="11" height="11" rx="1.5" fill="currentColor" />
            </svg>
          </span>
          <span className="brand__wordmark">
            cowork<span className="brand__dot">.</span>city
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="site-nav__link">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="site-header__cta">
          <a href="#login" className="btn btn--solid">
            로그인
          </a>
        </div>

        <button
          className="site-header__menu"
          aria-label="메뉴"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className="site-header__mobile">
        {nav.map((n) => (
          <a key={n.label} href={n.href} onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a href="#login" className="btn btn--solid btn--block">
          로그인
        </a>
      </div>
    </header>
  );
}
