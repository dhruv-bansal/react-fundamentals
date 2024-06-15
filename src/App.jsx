import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data"; // this is an named import

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
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

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              {...CORE_CONCEPTS[2]} // this is a spread operator
            />
             <CoreConcepts
              {...CORE_CONCEPTS[2]} // this is a spread operator
            />
          </ul>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts
                key={index}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
