import { Fragment } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Services } from "./components/services/Services";
import { Portfolios } from "./components/portfolios/Portfolios";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolios />
      <Contact />
      <Footer />
    </Fragment>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
//         quaerat.
//       </p>
//     </div>
//   );
// }

// import React from "react";

// function App() {
//   return React.createElement(
//     "div",
//     {
//       className: "App",
//       style: { color: "red" },
//       id: "Home",
//     },
//     React.createElement("h1", null, "Hello world"),
//     React.createElement("p", null, "fjksdfhkjdf dsfkjdhjsf kdshfk dfdfkjh"),
//     React.createElement("bla", null, "fjksdfhkjdf dsfkjdhjsf kdshfk dfdfkjh")
//   );
// }

export default App;
