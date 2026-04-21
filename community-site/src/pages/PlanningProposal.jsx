import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function PlanningProposal() {
  return (
    <>
      <Header />
      <main className="proposal">
        <article className="proposal__article">
          <header className="proposal__header">
            <div className="proposal__eyebrow">
              <span className="pill pill--green">기획안</span>
              <span className="proposal__meta">Issue No. 41</span>
              <span className="proposal__dot" aria-hidden>·</span>
              <span className="proposal__meta">2026. 04. 21</span>
              <span className="proposal__dot" aria-hidden>·</span>
              <span className="proposal__meta">8분 읽기</span>
            </div>
            <h1 className="proposal__title">커뮤니티 방향성 기획안</h1>
            <p className="proposal__subtitle">
              스레드처럼 유저가 참여하는 커뮤니티가 아니라, EO·오픈애즈·요즘IT처럼 공급자가 콘텐츠를 만드는 미디어형 커뮤니티를 설계합니다.
            </p>
          </header>

          <section className="proposal__section">
            <h2>1. 커뮤니티 방향성</h2>
            <ul className="proposal__list">
              <li>스레드, X 처럼 유저가 직접 글을 올리고 참여하는 방식은 <strong>하지 않는다</strong></li>
              <li>EO, 오픈애즈, 요즘IT 처럼 <strong>공급자 역할</strong>에 집중한다</li>
            </ul>
          </section>

          <section className="proposal__section">
            <h2>2. 커뮤니티를 왜 하는가?</h2>
            <ul className="proposal__list">
              <li>코워크시티 <strong>브랜드 인지도</strong>를 올리기 위함</li>
              <li>유입 트래픽의 0.1%만 전환돼도 충분하다 — 조금씩, 꾸준히 인지도를 쌓는다</li>
            </ul>
          </section>

          <section className="proposal__section">
            <h2>3. 누구를 타겟으로?</h2>
            <ul className="proposal__list">
              <li>예비창업자</li>
              <li>N잡러, 부업러</li>
              <li>초기 창업자</li>
              <li>연령 제한 없음</li>
            </ul>
            <div className="proposal__segment">
              <h3 className="proposal__segment-title">
                <span className="proposal__segment-tag">시작 — 내국인</span>
              </h3>
              <p className="proposal__segment-desc">
                오픈 ~ 안정화 단계까지는 <strong>국내 예비창업자·N잡러·초기 창업자</strong>를 중심으로
                한국어 콘텐츠에 집중한다.
              </p>
            </div>
            <div className="proposal__segment">
              <h3 className="proposal__segment-title">
                <span className="proposal__segment-tag proposal__segment-tag--intl">확장 — 외국인</span>
              </h3>
              <p className="proposal__segment-desc">
                품질·운영이 안정화된 이후 <strong>외국인 예비창업자·창업자</strong>까지 확장.
                영어 콘텐츠 축으로 외국인 대상 정부지원사업 가이드와 연계한다.
              </p>
            </div>
          </section>

          <section className="proposal__section">
            <h2>4. 무엇을 제공할 것인가?</h2>
            <ul className="proposal__list">
              <li>사업 시작 가이드</li>
              <li>정부지원금 관련 정보</li>
              <li>세금 관련 정보</li>
              <li>창업 관련 실무 콘텐츠</li>
              <li>창업 트렌드</li>
              <li>공간 주소 (코워크시티 지점 노출)</li>
            </ul>
          </section>

          <section className="proposal__section">
            <h2>5. 실행은 어떻게?</h2>
            <ul className="proposal__list">
              <li>
                코워크시티 메인 홈페이지 상단에 <strong>같은 도메인 / 다른 경로</strong>(요즘IT 방식)로 진입점을 만든다
              </li>
              <li>
                콘텐츠는 외부 기고자 없이 <strong>내부 공급자</strong>가 직접 운영한다
              </li>
              <li>
                글쓰기 AI는 <strong>오픈클로(= 글뭉이, ChatGPT 기반 내부 봇)</strong>를 사용.
                코워크시티 사이트와 오픈클로는 별도 레포지토리로 독립 운영하고,
                <strong>Supabase를 공용 저장소</strong>로 두어 두 레포가 git 연결 없이도 콘텐츠를 주고받는다.
              </li>
              <li>
                제작 파이프라인: <em>요청 → AI 서치·글쓰기 → 1차 AI 검토 → 사람 승인 → Supabase 저장 → 사이트 자동 발행</em>
              </li>
            </ul>

            <p>
              운영 방식은 <strong>하이브리드 구조</strong>를 메인으로 삼는다.
              정기 발행은 백로그 큐, 임시 요청은 슬랙 폼으로 받아 오픈클로가 글을 생성하고,
              1차 AI 검토를 거친 뒤 슬랙 승인 버튼으로 사람이 최종 확인한다.
              승인된 글은 Supabase에 저장되며 사이트가 자동 재빌드되어 발행된다.
              완전 자동화(사람 개입 0)는 <strong>옵션이 아닌 추후 로드맵</strong>으로, 품질이 안정화된 이후 별도 단계에서 검토한다.
            </p>

            <h3 className="proposal__compare-title">메인 운영 방식 — 세팅 플랜 A/B</h3>
            <p className="proposal__segment-desc" style={{ marginBottom: 16 }}>
              두 플랜 모두 동일한 하이브리드 파이프라인(요청 → 생성 → 1차 AI 검토 → 사람 승인 → Supabase → 자동 발행)을 따른다.
              차이는 <strong>"글 생성 엔진"</strong>뿐 — Plan A는 오픈클로를, Plan B는 Claude Code를 사용한다.
              나머지 자산(Supabase·슬랙·Notion·Vercel)은 양쪽 모두 동일하게 재사용된다.
            </p>
            <div className="proposal__compare">
              <article className="proposal__card proposal__card--b">
                <div className="proposal__card-head">
                  <span className="proposal__card-tag">Plan A · 1순위</span>
                  <h4>오픈클로 (ChatGPT 기반)</h4>
                  <p className="proposal__card-sub">이미 세팅된 내부 봇 그대로 활용</p>
                </div>
                <dl className="proposal__card-body">
                  <div>
                    <dt>글 생성 엔진</dt>
                    <dd>오픈클로(글뭉이) — ChatGPT API 래퍼</dd>
                  </div>
                  <div>
                    <dt>LLM 모델</dt>
                    <dd>GPT-4o (OpenAI)</dd>
                  </div>
                  <div>
                    <dt>셋업 상태</dt>
                    <dd><strong>이미 세팅됨</strong> — 즉시 가동 가능</dd>
                  </div>
                  <div>
                    <dt>도구 연동</dt>
                    <dd>오픈클로 내부 구성 (사내 설계)</dd>
                  </div>
                  <div>
                    <dt>운영 인프라</dt>
                    <dd>오픈클로 전용 서버</dd>
                  </div>
                  <div>
                    <dt>비용</dt>
                    <dd>ChatGPT API 사용료</dd>
                  </div>
                  <div>
                    <dt>장애 대응</dt>
                    <dd>사내 지원 (오픈클로 유지보수 인력)</dd>
                  </div>
                  <div>
                    <dt>추천 상황</dt>
                    <dd>오픈클로가 안정 동작하는 평시</dd>
                  </div>
                </dl>
              </article>

              <article className="proposal__card proposal__card--planb">
                <div className="proposal__card-head">
                  <span className="proposal__card-tag">Plan B · 대체</span>
                  <h4>Claude Code (Anthropic 공식)</h4>
                  <p className="proposal__card-sub">오픈클로 이슈 시 즉시 전환</p>
                </div>
                <dl className="proposal__card-body">
                  <div>
                    <dt>글 생성 엔진</dt>
                    <dd>Claude Code (CLI · Agent SDK · MCP)</dd>
                  </div>
                  <div>
                    <dt>LLM 모델</dt>
                    <dd>Claude Sonnet / Opus (Anthropic)</dd>
                  </div>
                  <div>
                    <dt>셋업 상태</dt>
                    <dd>2~4일 신규 셋업 (API 키 + MCP 설정)</dd>
                  </div>
                  <div>
                    <dt>도구 연동</dt>
                    <dd><strong>MCP 표준</strong> — Supabase·Slack·Notion 공식 MCP</dd>
                  </div>
                  <div>
                    <dt>운영 인프라</dt>
                    <dd>GitHub Actions (무료) 또는 자체 서버</dd>
                  </div>
                  <div>
                    <dt>비용</dt>
                    <dd>Claude API + Actions 무료 티어</dd>
                  </div>
                  <div>
                    <dt>장애 대응</dt>
                    <dd>Anthropic 공식 지원 + 커뮤니티</dd>
                  </div>
                  <div>
                    <dt>추천 상황</dt>
                    <dd>오픈클로 장애·한계 발생 시 즉시 전환</dd>
                  </div>
                </dl>
              </article>
            </div>

            <div className="proposal__callout proposal__callout--tight">
              <strong>공통 재활용 자산</strong> — 두 플랜 모두 동일하게 사용:
              Supabase (DB + Webhook) · 슬랙 (Bot + Workflow + 승인 버튼) · Notion (백로그 큐) ·
              Vercel/Netlify (Deploy Hook) · 1차 검토 프롬프트 · SEO/GEO 메타 구성.
              <strong> 글 생성 엔진만 교체되므로 플랜 전환 비용이 낮다.</strong>
            </div>

            <div className="proposal__callout proposal__callout--tight">
              <strong>권장 전개</strong> — 오픈 이후 <strong>Plan A (오픈클로)</strong>로 본 운영을 시작하고,
              이슈 발생 시 <strong>Plan B (Claude Code)</strong>로 즉시 전환.
              안정화되면 <strong>자동화 단계</strong>로 진입.
              (자동화는 선택지가 아닌 <strong>로드맵 상의 다음 단계</strong>)
            </div>

            <div className="proposal__question">
              <span className="proposal__question-tag">[?중간 질문]</span>
              <ul className="proposal__list proposal__list--question">
                <li>
                  <strong>24시간 자동 업로드 필요한가?</strong>
                  <ul className="proposal__sublist">
                    <li>사람이 중간 검증은 필요함 → 퀄리티 좋아지면 추후 자동화 단계에서 24시간 자동화로 전환</li>
                  </ul>
                </li>
              </ul>
            </div>

            <details className="proposal__details">
              <summary className="proposal__details-summary">
                <span className="proposal__details-caret" aria-hidden>▸</span>
                <span>Plan A 세부 보기 <em>(전체 파이프라인 · 요청 2-트랙)</em></span>
              </summary>
              <div className="proposal__details-inner">
                <h4 className="proposal__details-subtitle">전체 파이프라인 (8단계)</h4>
                <div className="proposal__pipeline">
                  <div className="proposal__pipeline-row">
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">1</span>
                      <strong>요청</strong>
                      <span>Notion 백로그 큐 (정기)<br />+ 슬랙 폼 (임시)</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">2</span>
                      <strong>생성</strong>
                      <span>오픈클로(ChatGPT)<br />서치 + 글쓰기</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">3</span>
                      <strong>1차 AI 검토</strong>
                      <span>팩트·톤 점수<br />JSON 리턴</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">4</span>
                      <strong>사람 승인</strong>
                      <span>슬랙 승인/반려 버튼<br />(Interactive Message)</span>
                    </div>
                  </div>
                  <div className="proposal__pipeline-row">
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">5</span>
                      <strong>저장</strong>
                      <span>Supabase posts<br />status: published</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">6</span>
                      <strong>재빌드 트리거</strong>
                      <span>Supabase Webhook<br />→ Vercel Deploy Hook</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">7</span>
                      <strong>정적 빌드</strong>
                      <span>글마다 정적 HTML<br />SEO + GEO 최적</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">8</span>
                      <strong>노출</strong>
                      <span>코워크시티<br />커뮤니티 페이지</span>
                    </div>
                  </div>
                </div>

                <h4 className="proposal__details-subtitle">요청은 어떻게? — 2-트랙 운영</h4>
                <div className="proposal__compare">
                  <article className="proposal__card proposal__card--a">
                    <div className="proposal__card-head">
                      <span className="proposal__card-tag">트랙 A · 정기 발행 (80%)</span>
                      <h4>Notion 백로그 큐</h4>
                      <p className="proposal__card-sub">Cron으로 매일 자동 pop</p>
                    </div>
                    <dl className="proposal__card-body">
                      <div>
                        <dt>운영 방식</dt>
                        <dd>주 1회 팀 회의에서 백로그에 주제 추가 → 매일 9시 cron이 맨 위 항목 pop</dd>
                      </div>
                      <div>
                        <dt>저장소</dt>
                        <dd>Notion DB 또는 구글 시트</dd>
                      </div>
                      <div>
                        <dt>필드</dt>
                        <dd>주제 · 카테고리 · 우선순위 · 발행예정일 · 상태</dd>
                      </div>
                      <div>
                        <dt>목적</dt>
                        <dd>발행 리듬 유지 (주 5편 이상 안정적으로)</dd>
                      </div>
                    </dl>
                  </article>

                  <article className="proposal__card proposal__card--b">
                    <div className="proposal__card-head">
                      <span className="proposal__card-tag">트랙 B · 임시 요청 (20%)</span>
                      <h4>슬랙 워크플로우 폼</h4>
                      <p className="proposal__card-sub">제출 시 즉시 오픈클로 실행</p>
                    </div>
                    <dl className="proposal__card-body">
                      <div>
                        <dt>운영 방식</dt>
                        <dd>슬랙에서 <code>/요청</code> 입력 → 폼 팝업 → 제출 시 봇이 즉시 작업</dd>
                      </div>
                      <div>
                        <dt>폼 필드</dt>
                        <dd>주제 · 카테고리 · 핵심 키워드 · 타겟 · 톤 · 길이 · 비고</dd>
                      </div>
                      <div>
                        <dt>장점</dt>
                        <dd>입력 누락 방지 (필수 필드 강제) + 데이터 정형화로 로그 분석 가능</dd>
                      </div>
                      <div>
                        <dt>목적</dt>
                        <dd>트렌드·이슈에 빠르게 대응하는 즉시성 확보</dd>
                      </div>
                    </dl>
                  </article>
                </div>
              </div>
            </details>

            <details className="proposal__details proposal__details--planb">
              <summary className="proposal__details-summary">
                <span className="proposal__details-caret" aria-hidden>▸</span>
                <span>Plan B 세부 보기 <em>(Claude Code 파이프라인 · 5가지 실행 방식)</em></span>
              </summary>
              <div className="proposal__details-inner">
                <h4 className="proposal__details-subtitle">Plan B 파이프라인 (Claude Code 엔진)</h4>
                <p className="proposal__details-note">
                  Plan A와 <strong>동일한 8단계 파이프라인</strong>을 따르되,
                  <strong> 2번 "생성" 단계만 오픈클로 → Claude Code로 교체</strong>된다.
                  나머지 단계(요청·1차 검토·승인·저장·재빌드·빌드·노출)는 그대로 재사용.
                </p>
                <div className="proposal__pipeline">
                  <div className="proposal__pipeline-row">
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">1</span>
                      <strong>요청</strong>
                      <span>Notion 백로그 큐 (정기)<br />+ 슬랙 폼 (임시)</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step proposal__pipeline-step--accent">
                      <span className="proposal__pipeline-num">2</span>
                      <strong>생성 🔄</strong>
                      <span>Claude Code (Anthropic)<br />+ MCP 도구 연동</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">3</span>
                      <strong>1차 AI 검토</strong>
                      <span>팩트·톤 점수<br />JSON 리턴</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">4</span>
                      <strong>사람 승인</strong>
                      <span>슬랙 승인/반려 버튼<br />(Interactive Message)</span>
                    </div>
                  </div>
                  <div className="proposal__pipeline-row">
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">5</span>
                      <strong>저장</strong>
                      <span>Supabase posts<br />status: published</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">6</span>
                      <strong>재빌드 트리거</strong>
                      <span>Supabase Webhook<br />→ Vercel Deploy Hook</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">7</span>
                      <strong>정적 빌드</strong>
                      <span>글마다 정적 HTML<br />SEO + GEO 최적</span>
                    </div>
                    <span className="proposal__pipeline-arrow">→</span>
                    <div className="proposal__pipeline-step">
                      <span className="proposal__pipeline-num">8</span>
                      <strong>노출</strong>
                      <span>코워크시티<br />커뮤니티 페이지</span>
                    </div>
                  </div>
                </div>

                <h4 className="proposal__details-subtitle">5가지 실행 방식 (요약)</h4>
                <p className="proposal__details-note">
                  Claude Code를 실제로 어떻게 돌릴지 선택할 수 있는 5가지 방식.
                  상세는 아래 <strong>"구현 방법 상세 보기"</strong> 드롭다운의 Plan B 카드 참조.
                </p>
                <div className="proposal__methods">
                  <article className="proposal__method-card">
                    <span className="proposal__method-num">①</span>
                    <h5>CLI headless 모드</h5>
                    <p><code>claude -p "..."</code> 비대화형 실행. 서버에 API 키만 있으면 됨.</p>
                    <span className="proposal__method-meta">난이도 ★☆☆ · 가장 단순</span>
                  </article>
                  <article className="proposal__method-card proposal__method-card--star">
                    <span className="proposal__method-num">②</span>
                    <h5>MCP 서버 연결 ⭐</h5>
                    <p>Supabase · Slack · Notion · Tavily MCP 붙이면 자율 에이전트 동작.</p>
                    <span className="proposal__method-meta">난이도 ★★☆ · 가장 강력</span>
                  </article>
                  <article className="proposal__method-card proposal__method-card--star">
                    <span className="proposal__method-num">③</span>
                    <h5>GitHub Actions + cron ⭐</h5>
                    <p>서버 없이 Actions cron으로 실행. 인프라 비용 0원, 로그·이력 자동.</p>
                    <span className="proposal__method-meta">난이도 ★☆☆ · 매우 저비용</span>
                  </article>
                  <article className="proposal__method-card">
                    <span className="proposal__method-num">④</span>
                    <h5>Agent SDK 자체 앱</h5>
                    <p>Python/TS SDK로 자체 API 서버 구성. 어드민 UI에 임베드 가능.</p>
                    <span className="proposal__method-meta">난이도 ★★★ · 최대 유연성</span>
                  </article>
                  <article className="proposal__method-card">
                    <span className="proposal__method-num">⑤</span>
                    <h5>슬랙 커스텀 봇</h5>
                    <p>슬랙 요청 → 서버에서 <code>claude -p</code> → 결과 스레드 게시.</p>
                    <span className="proposal__method-meta">난이도 ★★☆ · 슬랙 UX 자연스러움</span>
                  </article>
                </div>

                <div className="proposal__callout proposal__callout--tight">
                  <strong>권장 조합</strong> — <strong>② MCP 서버 + ③ GitHub Actions</strong>.
                  정기 발행은 Actions cron이 트리거, 임시 요청은 슬랙 → Actions <code>workflow_dispatch</code>로 트리거.
                  나머지(Supabase·슬랙 승인·Vercel)는 Plan A와 동일하게 재사용.
                </div>
              </div>
            </details>

            <details className="proposal__details">
              <summary className="proposal__details-summary">
                <span className="proposal__details-caret" aria-hidden>▸</span>
                <span>구현 방법 상세 보기 <em>(Plan A · Plan B · 자동화)</em></span>
              </summary>
              <div className="proposal__impl">
              <article className="proposal__impl-card proposal__impl-card--primary">
                <header className="proposal__impl-head">
                  <span className="proposal__impl-tag">메인 운영 방식 (Plan A)</span>
                  <h4>하이브리드 — 오픈클로 + 사람 승인 + Supabase 자동 발행</h4>
                  <div className="proposal__impl-meta">
                    <span className="proposal__chip">난이도 ★★★☆☆</span>
                    <span className="proposal__chip">셋업 소요 1~2주</span>
                    <span className="proposal__chip">사람 개입 1단계</span>
                  </div>
                </header>
                <div className="proposal__impl-flow">
                  <code>Notion 큐 / 슬랙 폼</code>
                  <span>→</span>
                  <code>오픈클로 (글 생성)</code>
                  <span>→</span>
                  <code>1차 AI 검토</code>
                  <span>→</span>
                  <code>슬랙 승인</code>
                  <span>→</span>
                  <code>Supabase insert</code>
                  <span>→</span>
                  <code>Vercel 재빌드</code>
                  <span>→</span>
                  <code>사이트 노출</code>
                </div>
                <dl className="proposal__impl-body">
                  <div>
                    <dt>기존 자산</dt>
                    <dd>오픈클로(= 글뭉이, ChatGPT 기반), 슬랙, 코워크시티 사이트 레포</dd>
                  </div>
                  <div>
                    <dt>① 요청 레이어</dt>
                    <dd>
                      <ul className="proposal__sublist proposal__sublist--plain">
                        <li>Notion DB <strong>"콘텐츠 백로그"</strong> 생성 (주제·카테고리·우선순위·발행예정일·상태)</li>
                        <li>슬랙 워크플로우 폼 <strong>/요청</strong> (주제·카테고리·키워드·타겟·톤·길이·비고)</li>
                        <li>매일 9시 cron → Notion 큐 맨 위 항목 pop → 오픈클로 트리거</li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>② 생성 레이어</dt>
                    <dd>
                      <strong>오픈클로(ChatGPT API 기반 내부 봇)</strong>가 서치 + 글쓰기.
                      오픈클로는 독립 레포로 별도 배포, 코워크시티 사이트와는 git 연결 없음.
                    </dd>
                  </div>
                  <div>
                    <dt>③ 1차 AI 검토</dt>
                    <dd>
                      별도 LLM(Claude API 또는 GPT-4o)이 팩트·톤 점수를 <strong>JSON으로 리턴</strong>.
                      프롬프트로 브랜드 톤 예시 3~5건을 few-shot 고정.
                    </dd>
                  </div>
                  <div>
                    <dt>④ 승인 레이어</dt>
                    <dd>
                      슬랙 Interactive Message로 <strong>[승인 · 반려 · 수정요청]</strong> 버튼 제공.
                      반려 시 피드백과 함께 재생성 루프.
                    </dd>
                  </div>
                  <div>
                    <dt>⑤ 저장 (Supabase)</dt>
                    <dd>
                      <ul className="proposal__sublist proposal__sublist--plain">
                        <li><code>posts</code> 테이블: id · title · content(markdown) · slug · category · tags · status · published_at</li>
                        <li>오픈클로 → Service Role Key로 insert / 사이트 → Anon Key로 read</li>
                        <li>RLS 정책: <code>status = 'published'</code>인 글만 public read 허용</li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>⑥ 발행 (SEO/GEO 최적)</dt>
                    <dd>
                      <ul className="proposal__sublist proposal__sublist--plain">
                        <li>Supabase Database Webhook → Vercel/Netlify Deploy Hook 호출</li>
                        <li>빌드 타임에 Supabase fetch → 글마다 정적 HTML 생성 (SSG)</li>
                        <li>권장: Astro 또는 Next.js 전환 (Vite SPA는 SEO 약함)</li>
                        <li>JSON-LD Schema.org Article · OpenGraph · <code>/llms.txt</code> · <code>/sitemap.xml</code></li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>필수 도구</dt>
                    <dd>
                      오픈클로, Notion, 슬랙(Bot + Workflow), n8n(오케스트레이션),
                      LLM API 1종(1차 검토용), Supabase(DB + Webhook), Vercel/Netlify(Deploy Hook)
                    </dd>
                  </div>
                  <div>
                    <dt>Git 레포 관계</dt>
                    <dd>
                      <strong>오픈클로 레포 ↔ 코워크시티 레포는 완전 독립</strong>.
                      Supabase를 중간 저장소로 두어 git 연결 없이 콘텐츠만 공유한다.
                    </dd>
                  </div>
                  <div>
                    <dt>적합한 상황</dt>
                    <dd>본 운영 — 오픈 이후 지속 적용</dd>
                  </div>
                </dl>
              </article>

              <article className="proposal__impl-card proposal__impl-card--planb">
                <header className="proposal__impl-head">
                  <span className="proposal__impl-tag">Plan B · 오픈클로 대체</span>
                  <h4>Claude Code로 전환 (오픈클로 안 될 경우)</h4>
                  <div className="proposal__impl-meta">
                    <span className="proposal__chip">난이도 ★★☆☆☆</span>
                    <span className="proposal__chip">셋업 소요 2~4일</span>
                    <span className="proposal__chip">기존 파이프라인 재활용</span>
                  </div>
                </header>
                <p className="proposal__impl-lede">
                  오픈클로가 운영상 어려울 경우, <strong>Claude Code</strong>(Anthropic 공식 CLI·에이전트 도구)로 "글 생성 레이어만" 교체한다.
                  Supabase·슬랙·Notion·Vercel 등 나머지 파이프라인은 그대로 재활용되므로 전환 비용이 낮다.
                </p>
                <dl className="proposal__impl-body">
                  <div>
                    <dt>① CLI headless 모드</dt>
                    <dd>
                      <code>claude -p "..."</code> 형태로 비대화형 실행 → 결과를 파일·Supabase로 리디렉션.
                      서버(Railway/Render/로컬)에 Claude Code + <code>ANTHROPIC_API_KEY</code>만 있으면 셋업 끝.
                    </dd>
                  </div>
                  <div>
                    <dt>② MCP 서버 연결 ⭐</dt>
                    <dd>
                      <strong>가장 강력한 방식</strong>. Claude Code에 Supabase MCP · Slack MCP · Notion MCP · Tavily MCP를 붙이면
                      하나의 프롬프트로 "큐 pop → 서치 → 글쓰기 → Supabase insert → Slack 승인 요청"이 자율 실행된다.
                      오픈클로와 거의 동일한 에이전트 동작 제공.
                    </dd>
                  </div>
                  <div>
                    <dt>③ GitHub Actions + Claude Code</dt>
                    <dd>
                      서버 없이 GitHub Actions의 cron으로 매일 스케줄 실행 — <strong>인프라 비용 0</strong>.
                      로그·이력 관리는 GitHub Actions UI에서 자동.
                    </dd>
                  </div>
                  <div>
                    <dt>④ Claude Agent SDK 자체 앱</dt>
                    <dd>
                      Claude Agent SDK(Python/TypeScript)로 자체 API 서버 구성 → 어드민 UI에서 "글 생성" 버튼으로 호출.
                      개발 리소스가 가장 많이 들지만 커스텀도 최대.
                    </dd>
                  </div>
                  <div>
                    <dt>⑤ Claude Code + 슬랙 커스텀 봇</dt>
                    <dd>
                      슬랙에서 요청 → 서버가 <code>claude -p</code> 실행 → 결과 + 승인 버튼을 스레드에 게시.
                      기존 "트랙 B (임시 요청)"와 자연스럽게 통합됨.
                    </dd>
                  </div>
                  <div>
                    <dt>권장 조합</dt>
                    <dd>
                      <strong>② MCP 서버 + ③ GitHub Actions</strong> 조합이 코워크시티 상황에 가장 적합.
                      정기 발행은 Actions cron, 임시 요청은 슬랙 → Actions workflow_dispatch로 트리거.
                    </dd>
                  </div>
                  <div>
                    <dt>재활용되는 자산</dt>
                    <dd>
                      Supabase(DB·Webhook), 슬랙(승인 게이트), Notion(백로그 큐), Vercel(Deploy Hook),
                      1차 검토 프롬프트, SEO/GEO 메타 구성 — <strong>글 생성 엔진만 교체</strong>되므로 전환 영향 최소.
                    </dd>
                  </div>
                </dl>
              </article>

              <article className="proposal__impl-card proposal__impl-card--future">
                <header className="proposal__impl-head">
                  <span className="proposal__impl-tag">자동화 (로드맵)</span>
                  <h4>완전 자동화 (사람 개입 0)</h4>
                  <div className="proposal__impl-meta">
                    <span className="proposal__chip">난이도 ★★★★★</span>
                    <span className="proposal__chip">셋업 소요 3~4주 + 안정화</span>
                    <span className="proposal__chip">사람 개입 0단계</span>
                  </div>
                </header>
                <div className="proposal__impl-flow">
                  <code>Cron</code>
                  <span>→</span>
                  <code>주제 자동 선정</code>
                  <span>→</span>
                  <code>AI 서치</code>
                  <span>→</span>
                  <code>AI 글쓰기</code>
                  <span>→</span>
                  <code>1차 AI 검토</code>
                  <span>→</span>
                  <code>2차 AI 크로스체크</code>
                  <span>→</span>
                  <code>품질 게이트</code>
                  <span>→</span>
                  <code>자동 발행</code>
                </div>
                <dl className="proposal__impl-body">
                  <div>
                    <dt>주제 자동 선정</dt>
                    <dd>
                      Google Trends API / Ahrefs / 키워드 백로그 큐에서 자동 pop.
                      사람은 큐에 키워드만 가끔 추가 (슬랙 폼은 긴급용으로만 유지).
                    </dd>
                  </div>
                  <div>
                    <dt>신규 세팅</dt>
                    <dd>
                      <ul className="proposal__sublist proposal__sublist--plain">
                        <li>전체 n8n 워크플로우 + Cron 스케줄</li>
                        <li>LLM 크로스체크 체인 (Claude ↔ GPT-4o 교차 검증)</li>
                        <li>품질 게이트 (두 점수 모두 85점 이상 통과)</li>
                        <li>실패 시 피드백 반영 재생성 최대 2회, 이후 드롭</li>
                        <li>이미지 자동 생성 (DALL-E / Imagen)</li>
                        <li>발행 완료 슬랙 알림 + 로그 대시보드</li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>필수 방어 장치</dt>
                    <dd>
                      <ul className="proposal__sublist proposal__sublist--plain">
                        <li><strong>할루시네이션</strong> — Tavily 인용 URL 필수, 근거 없는 문장 재생성</li>
                        <li><strong>중복 콘텐츠</strong> — 임베딩(Supabase Vector) 코사인 유사도 &gt; 0.85면 드롭</li>
                        <li><strong>톤 이탈</strong> — 브랜드 톤 예시 3~5건 few-shot 고정</li>
                        <li><strong>금칙어/SEO</strong> — 블랙리스트 정규식 필터</li>
                        <li><strong>사후 모니터링</strong> — 매일 랜덤 샘플 3~5건 리뷰 + 월 1회 전수 샘플링</li>
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt>필수 도구</dt>
                    <dd>n8n, LLM API 2종(크로스체크), Tavily/Perplexity, Supabase(DB + Vector), Vercel Deploy Hook</dd>
                  </div>
                  <div>
                    <dt>전제 조건</dt>
                    <dd>메인 운영 방식에서 <strong>4주 이상 안정 운영 + 품질 합격률 ≥ 90%</strong> 확인 후 전환</dd>
                  </div>
                </dl>
              </article>
              </div>
            </details>
          </section>

          <section className="proposal__section">
            <h2>6. 추후 확장성</h2>

            <div className="proposal__segment">
              <h3 className="proposal__segment-title">
                <span className="proposal__segment-tag">내국인</span>
              </h3>
              <ul className="proposal__list">
                <li>아티클 → <strong>카드뉴스 자동화</strong></li>
                <li>
                  추후 — 외부 기업 기고 도입 (심사 통과 후 참여).
                  오픈애즈처럼 <strong>심사 진입장벽</strong>으로 콘텐츠 희소성을 확보하고,
                  기고 글을 뉴스레터로 자동 활용하는 구조로 <strong>금전 보상 없이 참여를 유도</strong>한다.
                </li>
              </ul>
            </div>

            <div className="proposal__segment">
              <h3 className="proposal__segment-title">
                <span className="proposal__segment-tag proposal__segment-tag--intl">외국인</span>
              </h3>
              <ul className="proposal__list">
                <li>아티클 → <strong>영어 버전 유튜브</strong>로 재가공</li>
                <li>
                  <strong>외국인 대상 정부지원사업 연계</strong> — 영어 콘텐츠를 축으로
                  외국인 예비창업자·창업자를 위한 정부지원사업 정보를 큐레이션·가이드로 제공.
                  한국어 콘텐츠 대비 경쟁이 적어 틈새 트래픽 확보가 가능하고,
                  코워크시티의 외국인 멤버 유입 채널로도 기능한다.
                </li>
              </ul>
            </div>
          </section>

          <section className="proposal__section">
            <h2>7. KPI</h2>
            <div className="proposal__kpi">
              <div className="proposal__kpi-grid">
                <div className="proposal__kpi-item">
                  <span className="proposal__kpi-phase">오픈 ~ 1개월</span>
                  <span className="proposal__kpi-label">시작 · 유입 유저</span>
                  <span className="proposal__kpi-value">100 ~ 500명</span>
                </div>
                <div className="proposal__kpi-item">
                  <span className="proposal__kpi-phase">1 ~ 2개월</span>
                  <span className="proposal__kpi-label">활성 뷰어</span>
                  <span className="proposal__kpi-value proposal__kpi-value--muted">미정</span>
                </div>
                <div className="proposal__kpi-item">
                  <span className="proposal__kpi-phase">~ 3개월</span>
                  <span className="proposal__kpi-label">활성 뷰어</span>
                  <span className="proposal__kpi-value proposal__kpi-value--muted">미정</span>
                </div>
              </div>

              <div className="proposal__kpi-actions">
                <h3>당장 액션 — 이번 주</h3>
                <ul className="proposal__action-list">
                  <li>브랜드명 확정</li>
                  <li>홈페이지 제작</li>
                  <li>AI봇 세팅</li>
                  <li>테스트</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="proposal__section">
            <h2>8. 기대 효과</h2>
            <p>
              <strong>브랜드 인지 → 홈페이지 유입 증가 → 잠재 계약 전환</strong>.
              단, 지금 단계에서는 전환이 일어나지 않아도 괜찮다 — 유입만 확보되어도 충분히 유의미하다.
            </p>
          </section>

          <footer className="proposal__footer">
            <p className="proposal__signature">
              cowork.city Editorial Team<br />
              <span>2026. 04. 21 · 작성자 김민지</span>
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
