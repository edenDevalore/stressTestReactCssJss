import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { arrOfdata, objectData, IProfileProps } from "./utils/mock";
import Profile from "./components/Profile/Profile";

const calculateTime = (startTime: any, endTime: any) => {
  const diff = endTime - startTime;
  console.log("diff", diff);
};

function App() {
  const length = arrOfdata.length;
  const [toggleView, setToggleView] = useState<boolean>(false);
  const startTime = new Date().getTime();
  return (
    <div className="App App-header">
      <button onClick={() => setToggleView(!toggleView)}>CLICK ME</button>
      {toggleView &&
        arrOfdata.map((obj: any, index) => {
          const {
            id,
            first_name,
            last_name,
            email,
            gender,
            phone_number,
            image,
          } = obj;
          const payload = {
            id,
            first_name,
            last_name,
            email,
            gender,
            phone_number,
            image,
            index,
            startTime,
            length,
            calculateTime,
          };
          return (
            <div key={index}>
              <Profile {...payload} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
