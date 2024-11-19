import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Contener from "./component/Contener";
import DisplayText from "./component/DisplayText";
import Header from "./component/Header";
import Controler from "./component/Controler";

function App() {
  return (
      <center className="px-4 py-5 my-5 text-center">
        <Contener>
          <Header />
          <div className="col-lg-6 mx-auto">
            <DisplayText />
          <Controler/>
          </div>
        </Contener>
      </center>

  );
}

export default App;
