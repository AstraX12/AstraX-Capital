import AboutUs from "./about/AboutUs";
import Home from "./components/Home";
import ContactUs from "./contact/ContactUs";
import Portfolio from "./portfolio/Portfolio";
import Team from "./team/Team";

export default function Hero() {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="about_us">
        <AboutUs />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact_us">
        <ContactUs />
      </div>
    </>
  )
}
