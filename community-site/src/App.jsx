import { Routes, Route } from "react-router-dom";
import { NEWSLETTER_DATA } from "./data.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AISummaryDemo from "./components/AISummaryDemo.jsx";
import NewsletterSection from "./components/Newsletter.jsx";
import Subscribe from "./components/Subscribe.jsx";
import Footer from "./components/Footer.jsx";
import PlanningProposal from "./pages/PlanningProposal.jsx";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero data={NEWSLETTER_DATA.latest} />
        <AISummaryDemo />
        <NewsletterSection data={NEWSLETTER_DATA} variant="grid" />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planning" element={<PlanningProposal />} />
    </Routes>
  );
}
