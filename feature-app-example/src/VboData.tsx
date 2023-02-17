import { useEffect, useState } from "react";
import { VboGa } from "../typings";

function VboData() {
  const [vbo, setVbo] = useState<VboGa | null>(null);

  useEffect(() => {
    if (window && window.vbo) {
      setVbo(window.vbo);
    }
  }, [vbo, setVbo]);

  return (
    <div>
      {vbo ? (
        <>
          <p>{vbo.id}</p>
          <p>{vbo.event}</p>
          <p>{vbo.eventType}</p>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default VboData;
