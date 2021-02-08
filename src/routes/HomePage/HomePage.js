import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './HomePage.css';

class HomePage extends Component {
  registerRedirect = () => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="homePage">
        <section className="landingPageParent">
          <div className="landingPage1">
            <h2>Let us help you track your food expirations!</h2>
            <p>
              Our app makes tracking food expiration simple! all you have to do
              is add a name, how many days until your food expires, and then we
              will handle the rest.
            </p>
          </div>

          <section className="container-boxes">
            <div className="box">
              <div className="text">
                <h3>Less Waste</h3>
                <p>
                  Keeping track of when your food expires can help you reduce
                  waste.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="text">
                <h3>Save Money</h3>
                <p>When you reduce food waste, you save money!</p>
              </div>
            </div>

            <div className="box">
              <div className="text">
                <h3>Organize Meals</h3>
                <p>
                  Simplify your meal prep by using your food that expires first!
                </p>
              </div>
            </div>
          </section>

          <SignUpForm registerRedirect={this.registerRedirect} />
        </section>
      </div>
    );
  }
}

export default HomePage;
