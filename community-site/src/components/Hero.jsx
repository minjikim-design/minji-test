export default function Hero({ data }) {
  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__meta">
          <div className="hero__eyebrow">
            <span className="pill">NEWSLETTER</span>
            <span className="hero__issue">Issue No. {data.issue}</span>
            <span className="hero__dot" aria-hidden>·</span>
            <span className="hero__date">{data.date}</span>
          </div>
          <h1 className="hero__title" style={{ whiteSpace: "pre-line" }}>
            {data.title}
          </h1>
          <p className="hero__subtitle">{data.subtitle}</p>
          <p className="hero__excerpt">{data.excerpt}</p>
          <div className="hero__actions">
            <a href="#read" className="btn btn--solid btn--lg">
              최신호 읽기
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#subscribe" className="btn btn--ghost btn--lg">구독 신청</a>
            <span className="hero__readtime">{data.readTime}</span>
          </div>
        </div>

        <div className="hero__cover" aria-hidden="true">
          <div className="cover cover--editorial">
            <div className="cover__label" style={{ color: "rgb(0, 156, 50)" }}>
              <span>COWORK.CITY</span>
              <span>NO. {String(data.issue).padStart(2, "0")}</span>
            </div>
            <div className="cover__art">
              <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="stripes" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
                    <rect width="8" height="8" fill="transparent" />
                    <line x1="0" y1="0" x2="0" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.18" />
                  </pattern>
                </defs>
                <rect width="400" height="500" fill="url(#stripes)" />
                <circle cx="120" cy="200" r="88" fill="currentColor" opacity="0.08" />
                <circle cx="120" cy="200" r="88" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="210" y="150" width="140" height="220" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="30" y1="420" x2="370" y2="420" stroke="currentColor" strokeWidth="1" />
                <line x1="30" y1="440" x2="250" y2="440" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <div className="cover__title">
              <div className="cover__kicker">{data.category.toUpperCase()}</div>
              <div className="cover__headline" style={{ whiteSpace: "pre-line" }}>
                {data.title}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__ticker" aria-hidden="true">
        <div className="ticker__track">
          <span>코워크시티 뉴스레터</span><span>·</span>
          <span>매주 토요일 발행</span><span>·</span>
          <span>독립 워커를 위한 에디토리얼</span><span>·</span>
          <span>Issue {data.issue}</span><span>·</span>
          <span>코워크시티 뉴스레터</span><span>·</span>
          <span>매주 토요일 발행</span><span>·</span>
          <span>독립 워커를 위한 에디토리얼</span><span>·</span>
          <span>Issue {data.issue}</span><span>·</span>
        </div>
      </div>
    </section>
  );
}
