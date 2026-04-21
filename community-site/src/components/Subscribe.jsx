import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="subscribe" id="subscribe">
      <div className="subscribe__inner">
        <div className="subscribe__text">
          <div className="subscribe__eyebrow">
            <span className="dash" aria-hidden>—</span>
            <span>SUBSCRIBE</span>
          </div>
          <h2 className="subscribe__title">
            매주 토요일 아침,<br />
            <em>일하는 리듬</em>을 배달해드려요.
          </h2>
          <p className="subscribe__desc">
            독립 워커와 팀을 위한 인터뷰·아티클·리포트. 광고 없이, 읽을 만한 한 꼭지만.
          </p>
        </div>

        {submitted ? (
          <div className="subscribe__done">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <div>
              <strong>구독 신청이 완료됐어요.</strong>
              <span>{email}로 환영 메일을 보냈습니다.</span>
            </div>
          </div>
        ) : (
          <form className="subscribe__form" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="이메일 주소"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn--solid">구독하기</button>
          </form>
        )}

        <div className="subscribe__stats">
          <div><strong>2,418</strong><span>구독자</span></div>
          <div><strong>42</strong><span>호 발행</span></div>
          <div><strong>96%</strong><span>오픈율</span></div>
        </div>
      </div>
    </section>
  );
}
