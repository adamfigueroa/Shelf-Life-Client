import React, { Component } from "react";
import Header from "../Header/Header";
import SignUpForm from "../SignUpForm/SignUpForm";
import "./HomePage.css";

class HomePage extends Component {

  registerRedirect = () => {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="homePage">
        <Header />
        <section className="landingPageParent">
          <div className="landingPage1">
            <h2>Headline 1</h2>
            <p>
              Lorem ipsum sanitizer virtual happy hour storm Area 51 Lysol spray
              monolith bubble social distance. Into quarantine X Æ A-Xii it's
              about March 213th press conference postponed Queen's Gambit. No
              march madness sweatpants mail-in vote wear a mask. Asymptomatic my
              camera is off stimulus uncertain times home Carole Baskin.
              Stay-at-home order pod the new normal.
            </p>
            <br />
            <p>
              You're on mute. quarantini ventilator sanitizer wildfires trying
              times the new normal schadenfreude. Droplet cancelled pandemic
              hybrid N95 virtual happy hour K-shaped recovery. Mail-in vote
              uncertain times trying times Dr. Fauci vaccine. TikTok maskne
              wildfires essential ventilator. Remote learning Dr. Fauci herd
              immunity. Sweatpants unprecedented Clorox wipes second wave
              working from home whipped coffee. Doomscroll virtual quaranteam
              whipped coffee.
            </p>
          </div>
          <div className="landingPage2">
            <h2>Headline 2</h2>
            <p>
              Antibodies essential Tiger King super-spreader event the new
              normal bubble trying times. At least 6 feet election mask drive-in
              doomscrolling social distancing wildfires. Remote home cancelled
              the new normal. Bubble hurricane Greek alphabet uncertain times
              furlough. At least 6 feet quaranteam into quarantine sanitizer
              social distance quarantine. Social distance shortage frontline
              workers stay-at-home order Netflix Mr. Peanut Coronavirus murder
              hornets. Vote wear a mask doomscroll Queen's Gambit self care
              ballot Folklore.
            </p>
            <br />
            <p>
              Maskne second wave pod baby Yoda PPE staycation monolith Zoom
              call. Into quarantine the new normal ventilator. Isolation hybrid
              doomscrolling you're on mute. doomscroll X Æ A-Xii home haircut.
              What day is it? vaccine monolith. Home office doggface208 mail-in
              vote press conference amazon prime.
            </p>
          </div>
          <SignUpForm registerRedirect={this.registerRedirect}/>
        </section>
        <footer>Copyright Adam Figueroa 2021</footer>
      </div>
    );
  }
}

export default HomePage;
