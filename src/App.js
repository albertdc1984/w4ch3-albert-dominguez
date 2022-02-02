import Actions from "./components/Actions/Actions";
import Display from "./components/Display/Display";
import Keyboard from "./components/Keyboard/Keyboard";

function App() {
  return (
    <>
      <div className="container">
        {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
        <Display />
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <Actions />
        </main>
      </div>
    </>
  );
}

export default App;
