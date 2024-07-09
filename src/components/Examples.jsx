import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data"; // this is an named import

export default function Examples() {
  // TODO: see the impact of having useState at top level
  // Ideally it should be at that component level which is actually getting changed.
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(clickedButton) {
    setSelectedTopic(clickedButton);
    console.log(`You clicked on the button! ` + selectedTopic);
  }

   // conditionally rendering the content
   let tabContent = <p>Please select the tab content</p>;
   if (selectedTopic) {
     tabContent = (
       <div id="tab-content">
         <h3>{EXAMPLES[selectedTopic].title}</h3>
         <p>{EXAMPLES[selectedTopic].description}</p>
         <pre>
           <code>{EXAMPLES[selectedTopic].code}</code>
         </pre>
       </div>
     );
   }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic == "components"}
          onSelect={() => handleClick("components")}
        >
          Component
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "jsx"}
          onSelect={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "props"}
          onSelect={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic == "state"}
          onSelect={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>

      {tabContent}
    </section>
  );
}
