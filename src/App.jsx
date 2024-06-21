import { CORE_CONCEPTS, EXAMPLES } from "./data"; // this is an named import
import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
const [selectedTopic, setSelectedTopic] = useState('components');

  function handleClick(clickedButton) {
    setSelectedTopic(clickedButton);
    console.log(`You clicked on the button! ` + selectedTopic);
  }

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
              {...CORE_CONCEPTS[3]} // this is a spread operator
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Component</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
