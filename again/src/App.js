/* eslint-disable jsx-a11y/alt-text */
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features";
import Offer from "./components/Offer";
import About from "./components/About";
function App(props) {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Offer />
    </>
  );
}

export default App;
