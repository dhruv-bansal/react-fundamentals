
import { CORE_CONCEPTS } from "./data"; // this is an named import
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcept";




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
