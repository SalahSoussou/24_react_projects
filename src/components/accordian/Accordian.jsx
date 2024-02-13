// single select

import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((e) => (
            <div className="item">
              <div className="titel">
                <h3>{e.question}</h3>
                <span>+</span>
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
