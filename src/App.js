import "./App.css";
// !img import
import plane from "./img/plane.png";
import cloud from "./img/cloud.png";

function App() {
  return (
    <body>
      <section className="container">
        <div className="clouds">
          <img src={cloud} alt="cloud" className="--i:1;" />
          <img src={cloud} alt="cloud" className="--i:2;" />
          <img src={cloud} alt="cloud" className="--i:3;" />
        </div>
        <div className="clouds cloudsCopy">
          <img src={cloud} alt="cloud" className="--i:1;" />
          <img src={cloud} alt="cloud" className="--i:2;" />
          <img src={cloud} alt="cloud" className="--i:3;" />
        </div>
        <div className="runway"></div>
        <img src={plane} alt="plane" className="plane" />
      </section>
    </body>
  );
}

export default App;
