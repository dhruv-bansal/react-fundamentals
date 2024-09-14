export default function Tabs({ children, buttons, buttonContainer }) {
    
  const ButtonContainer = buttonContainer;
  const tabComponent = (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
  return tabComponent;
}
