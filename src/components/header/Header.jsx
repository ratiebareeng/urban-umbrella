import reactLogo from '../../assets/react-core-concepts.png';
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Core', 'Crucial']

function genRandomIndex(max){
  return Math.floor(Math.random() * max);
}

export default function Header(){
    const description = reactDescriptions[genRandomIndex(3)];
  return (<header>
  <img src={reactLogo} alt="Stylized atom" />
  <h1>React Essentials Now</h1>
  <p>
    {description} React concepts you will need for almost any app you are
    going to build!
  </p>
  </header>);
  }