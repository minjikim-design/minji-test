import { useState } from "react";

export default function NewsletterSection({ data, variant = "grid" }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("전체");

  const categories = ["전체", "인터뷰", "아티클", "리포트", "에세이"];

  const filtered = data.archive.filter((item) => {
    const matchCat = category === "전체" || item.category === category;
    const matchQ = !query || item.title.includes(query);
    return matchCat && matchQ;
  });

  return (
    <section className="newsletter" id="newsletter" data-variant={variant}>
      <header className="section-header">
        <div className="section-header__label">
          <span className="dash" aria-hidden>—</span>
          <span>아카이브</span>
        </div>
        <h2 className="section-header__title">지난 호 모아보기</h2>
        <p className="section-header__desc">
          매주 토요일 발행되는 코워크시티의 에디토리얼. 일하는 사람의 이야기, 공간과 리듬에 대한 관찰, 독립 워커를 위한 리포트.
        </p>
      </header>

      <div className="archive-controls">
        <div className="archive-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="text"
            placeholder="제목으로 검색"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="archive-filter" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              className="chip"
              data-active={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {variant === "magazine" && <MagazineLayout items={filtered} />}
      {variant === "grid" && <GridLayout items={filtered} />}
      {variant === "timeline" && <TimelineLayout items={filtered} />}

      {filtered.length === 0 && (
        <div className="archive-empty">검색 결과가 없습니다.</div>
      )}
    </section>
  );
}

function MagazineLayout({ items }) {
  if (!items.length) return null;
  const [feature, ...rest] = items;
  return (
    <div className="mag">
      <article className="mag__feature" tabIndex="0">
        <div className="mag__feature-media" data-tone={feature.tone}>
          <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
            <rect width="400" height="300" fill="currentColor" opacity="0.06" />
            <circle cx="280" cy="150" r="100" fill="currentColor" opacity="0.10" />
            <rect x="40" y="60" width="180" height="180" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <span className="mag__badge">Issue {feature.issue}</span>
        </div>
        <div className="mag__feature-body">
          <div className="item-meta">
            <span className="item-meta__cat">{feature.category}</span>
            <span className="item-meta__sep">·</span>
            <span>{feature.date}</span>
            <span className="item-meta__sep">·</span>
            <span>{feature.readTime}</span>
          </div>
          <h3 className="mag__feature-title">{feature.title}</h3>
          <a href="#" className="read-link">
            읽기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </article>

      <ul className="mag__list">
        {rest.map((it) => (
          <li key={it.issue} className="mag__row">
            <span className="mag__row-num">{String(it.issue).padStart(2, "0")}</span>
            <div className="mag__row-body">
              <div className="item-meta item-meta--small">
                <span className="item-meta__cat">{it.category}</span>
                <span className="item-meta__sep">·</span>
                <span>{it.date}</span>
              </div>
              <h4 className="mag__row-title">{it.title}</h4>
            </div>
            <span className="mag__row-time">{it.readTime}</span>
            <span className="mag__row-arrow" aria-hidden>→</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GridLayout({ items }) {
  return (
    <div className="grid-variant">
      {items.map((it) => {
        const card = (
          <article className="card" tabIndex="0">
            <div className="card__media" data-tone={it.tone}>
              <svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
                <rect width="400" height="240" fill="currentColor" opacity="0.05" />
                <rect x="30" y="40" width="120" height="160" fill="currentColor" opacity="0.10" />
                <circle cx="280" cy="120" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span
                className={`card__issue${it.badgeColor ? ` card__issue--${it.badgeColor}` : ""}`}
              >
                {it.badge ?? `#${it.issue}`}
              </span>
            </div>
            <div className="card__body">
              <div className="item-meta">
                <span className="item-meta__cat">{it.category}</span>
                <span className="item-meta__sep">·</span>
                <span>{it.readTime}</span>
              </div>
              <h3 className="card__title">{it.title}</h3>
              <div className="card__foot">
                <span>{it.date}</span>
                <span className="card__arrow" aria-hidden>→</span>
              </div>
            </div>
          </article>
        );
        return it.href ? (
          <a
            key={it.issue}
            href={it.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            {card}
          </a>
        ) : (
          <div key={it.issue}>{card}</div>
        );
      })}
    </div>
  );
}

function TimelineLayout({ items }) {
  return (
    <ol className="timeline">
      {items.map((it, i) => (
        <li key={it.issue} className="timeline__row" tabIndex="0">
          <div className="timeline__left">
            <div className="timeline__issue">No. {String(it.issue).padStart(3, "0")}</div>
            <div className="timeline__date">{it.date}</div>
          </div>
          <div className="timeline__center" aria-hidden>
            <span className="timeline__node" />
            {i < items.length - 1 && <span className="timeline__line" />}
          </div>
          <div className="timeline__right">
            <div className="item-meta">
              <span className="item-meta__cat">{it.category}</span>
              <span className="item-meta__sep">·</span>
              <span>{it.readTime}</span>
            </div>
            <h3 className="timeline__title">{it.title}</h3>
            <a href="#" className="read-link read-link--sm">
              읽기
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}
