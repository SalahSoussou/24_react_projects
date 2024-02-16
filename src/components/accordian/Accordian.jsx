// single select

import { useState } from "react";
import data from "./data";
import "./style.sass";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiId, setMultiId] = useState([]);

  function handleSingleSeliction(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((e) => (
            <div className="item">
              <div
                onClick={() => handleSingleSeliction(e.id)}
                className="titel"
              >
                <h3>{e.question}</h3>
              </div>
              <div>{selected === e.id ? e.answer : <span>+</span>}</div>
            </div>
          ))
        ) : (
          <div>no data</div>
        )}
      </div>
    </div>
  );
}
