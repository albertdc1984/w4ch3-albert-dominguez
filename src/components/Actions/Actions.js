import PhoneNumber from "../PhoneNumber/PhoneNumber";
const Actions = () => {
  return (
    <>
      <div className="actions">
        <PhoneNumber />
        {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
          <!-- el número de teléfono tiene 9 cifras --> */}
        <a className="call">Call</a>
        {/*  <!-- Sólo se tiene que ver un botón u otro --> */}
        <a className="hang active">Hang</a>
      </div>
    </>
  );
};

export default Actions;
