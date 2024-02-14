// single select

import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  function handleSingleSeliction(currentId) {
    console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((e) => (
            <div className="item">
              <div
                onClick={() => handleSingleSeliction(e.id)}
                className="titel"
              >
                <h3>{e.question}</h3>
                <div>{selected === e.id ? e.answer : <span>+</span>}</div>
              </div>
            </div>
          ))
        ) : (
          <div>no data</div>
        )}
      </div>
    </div>
  );
}
