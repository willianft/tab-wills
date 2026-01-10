import { useState, useEffect } from "react";

export default function Home() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.className = light ? "light" : "";
  }, [light]);

  return (
    <>
      <button className="toggle" onClick={() => setLight(!light)}>
        🌙 / ☀️
      </button>

      <div className="container">
        <div className="loader"></div>

        <div className="logo">
          TAB<span>WILLS</span>
        </div>

        <p>
          Estamos construindo algo bom.
          <br />
          Sem faturar, mas com muito conceito.
        </p>

        <div className="footer">
          © 2026 • TABWILLS • powered by Willian Teixeira
        </div>
      </div>
    </>
  );
}
