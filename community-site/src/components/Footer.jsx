export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <div className="brand brand--large">
            <span className="brand__wordmark">
              cowork<span className="brand__dot">.</span>city
            </span>
          </div>
          <p>독립적으로 일하는 사람들을 위한 공간과 커뮤니티.</p>
        </div>

        <div className="site-footer__cols">
          <div>
            <h5>커뮤니티</h5>
            <ul>
              <li><a href="#">뉴스레터</a></li>
              <li><a href="#">아카이브</a></li>
              <li><a href="#">이벤트</a></li>
            </ul>
          </div>
          <div>
            <h5>공간</h5>
            <ul>
              <li><a href="#">성수 점</a></li>
              <li><a href="#">합정 점</a></li>
              <li><a href="#">을지로 점</a></li>
            </ul>
          </div>
          <div>
            <h5>회사</h5>
            <ul>
              <li><a href="#">소개</a></li>
              <li><a href="#">채용</a></li>
              <li><a href="#">문의</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© 2026 cowork.city</span>
        <span>서울시 성동구 성수이로 123</span>
        <span>hello@cowork.city</span>
      </div>
    </footer>
  );
}
