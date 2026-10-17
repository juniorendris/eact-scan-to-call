
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "30px" }}>
      <h2>Scan to Call</h2>

      {value.trim() && (
        <QRCodeSVG

          //for deep linking to phone number, you can use the following code
              // value={`tel:${value.trim()}`}

          //for copy
              value={value}
              size={300}
            />
      )}

      <input
        style={{
          display: "block",
          margin: "20px auto",
          width: "300px",
          height: "30px",
          fontSize: "20px",
          textAlign: "center",
        }}
        type="tel"
        placeholder="Enter phone number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
 <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ display: "block", margin: "20px auto", width: "300px", height: "30px", fontSize: "20px", textAlign: "center" }} />
      <footer>
        <p style={{ fontSize: "20px", color: "blue" }}> @dev_emjun</p>
      </footer>
    </div>
  );
}

export default App;
