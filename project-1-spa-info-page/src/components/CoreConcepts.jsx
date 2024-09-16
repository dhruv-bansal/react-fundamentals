
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data"; // this is an named import

export default function CoreConcepts(props) {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>

      <ul>
        <CoreConcept
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
        />
        <CoreConcept
          title={CORE_CONCEPTS[1].title}
          description={CORE_CONCEPTS[1].description}
          image={CORE_CONCEPTS[1].image}
        />
        <CoreConcept
          {...CORE_CONCEPTS[2]} // this is a spread operator
        />
        <CoreConcept
          {...CORE_CONCEPTS[3]} // this is a spread operator
        />

        {/* {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept key={index} {...concept} />
            ))} */}
      </ul>
    </section>
  );
}
