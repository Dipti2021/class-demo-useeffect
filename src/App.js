import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [windows, setWindow] = useState(window.innerWidth);

  //*triggering on every render/mount

  //! on first render/mount only (component did mount)

  // **on first render/mount AND whenever the dependency changes (alternate to componentDidUpdate)

  // TODO : cleanup example / Unsubscribing

  return (
    <div>
      <center>
        <h1 style={{ background: "lightblue" }}> useEffect Demo</h1>
        <input
          style={{
            background: "yellow",
            color: "red",
            padding: "20px",
          }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="THOUGHTS??? "
        />
        {/* <footer
          style={{
            marginTop: "60%",
          }}
        >
          {" "}
          Width of the window rn: {windows}
        </footer> */}
      </center>
    </div>
  );
};

export default App;
