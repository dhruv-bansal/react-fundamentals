export default function Tabs({ children, buttons, ButtonContainer }) {

  //const ButtonContainer = buttonContainer;
  const tabComponent = (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
  return tabComponent;
}
