import reactImg from "../assets/react-core-concepts.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// importing css file here keeps the code closer. But the scope of this css file is still product wise (not restricted to this component)
import './Header.css';

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const dynamicDescription = reactDescriptions[genRandomInt(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {dynamicDescription} React concepts you will need for almost any app you
          are going to build!
        </p>
      </header>
    );
  }