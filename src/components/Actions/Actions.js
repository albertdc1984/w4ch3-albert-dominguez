import Display from "../Display/Display";
import PhoneNumber from "../PhoneNumber/PhoneNumber";

const Actions = () => {
  const callFunction = () => {
    <Display className={`message hidden`} />;
  };
  const hangFunction = () => {
    <Display className={`message`} />;
  };
  return (
    <>
      <div className="actions">
        <PhoneNumber />
        {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
          <!-- el número de teléfono tiene 9 cifras --> */}
        <a href="call" className="call" onClick={callFunction}>
          Call
        </a>
        {/*  <!-- Sólo se tiene que ver un botón u otro --> */}
        <a href="hang" className="hang active" onClick={hangFunction}>
          Hang
        </a>
      </div>
    </>
  );
};

export default Actions;
