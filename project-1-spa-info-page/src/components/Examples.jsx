import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
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

  let buttonContent = (
    <>
      <TabButton
        isSelected={selectedTopic == "components"}
        onClick={() => handleClick("components")}
      >
        Component
      </TabButton>

      <TabButton
        isSelected={selectedTopic == "jsx"}
        onClick={() => handleClick("jsx")}
      >
        JSX
      </TabButton>

      <TabButton
        isSelected={selectedTopic == "props"}
        onClick={() => handleClick("props")}
      >
        Props
      </TabButton>

      <TabButton
        isSelected={selectedTopic == "state"}
        onClick={() => handleClick("state")}
      >
        State
      </TabButton>
    </>
  );

  return (
    <Section id="examples" title="Examples">
      <Tabs buttons={buttonContent} ButtonContainer="menu">{tabContent}</Tabs>
    </Section>
  );
}
