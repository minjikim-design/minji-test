import { useEffect, useState } from "react";

function useLoop(duration) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const step = (t) => {
      const p = ((t - start) % duration) / duration;
      setTick(p);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [duration]);
  return tick;
}

export default function AISummaryDemo() {
  const p = useLoop(8000);
  let state = "article";
  if (p > 0.375 && p < 0.65) state = "loading";
  if (p >= 0.65) state = "done";

  const originalText =
    "공간이 일하는 방식을 바꾼다\n\n성수동 멤버 인터뷰 — 코워크시티 성수점에서 6개월째 작업 중인 김지수 디자이너는 '공간이 주는 리듬'이 혼자 일하던 시절 가장 그리웠던 것이라고 말한다. 이번 호에서는 멤버들이 각자의 방식으로 공간을 해석하고 활용하는 법을 들여다본다.\n\n독립적으로 일하는 사람들에게 공간은 단순한 책상이 아니다. 그것은 리듬이고, 신호이고, 함께함의 증거다. 김지수는 카페에서 혼자 일할 때와 코워크시티에서 다른 사람들과 함께 일할 때의 차이를 이렇게 표현했다.";

  const summaryText =
    "코워크시티 성수점 멤버인 1인 브랜드 디자이너 김지수는 공간이 제공하는 '리듬감'이 독립 작업의 핵심 요소라고 강조한다. 카페에서의 고립된 일하기와 공유 공간에서의 함께함 사이의 심리적 차이가 일의 질을 근본적으로 변화시킨다고 본다.";

  return (
    <section className="ai-summary-section">
      <div className="ai-summary-wrapper">
        <h2 className="ai-summary-section-title">공간이 일하는 방식을 바꾼다</h2>
        <div className="ai-summary-container">
          <header className="ai-summary-header">
            <span className="ai-summary-label">AI · SUMMARY</span>
          </header>

          <div className="ai-summary-body">
            {state === "article" && (
              <div className="ai-article" style={{ animation: "fadeIn 400ms ease-out both" }}>
                <h3 className="ai-article-title">공간이 일하는 방식을 바꾼다</h3>
                <p className="ai-article-text">{originalText}</p>
                <div className="ai-summary-btn" style={{ cursor: "auto" }}>
                  <span>AI 요약</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 6l6 6-6 6M5 18h12" />
                  </svg>
                </div>
              </div>
            )}

            {state === "loading" && (
              <div className="ai-loading" style={{ animation: "fadeIn 300ms ease-out both" }}>
                <div className="ai-loading-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="ai-loading-text">AI가 요약 중입니다</span>
              </div>
            )}

            {state === "done" && (
              <div className="ai-result" style={{ animation: "fadeIn 500ms ease-out both" }}>
                <div className="ai-result-badge">✓ 요약 완료</div>
                <p className="ai-summary-text">{summaryText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
