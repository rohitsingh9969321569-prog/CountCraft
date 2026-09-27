import { useEffect, useReducer, useState } from "react";
import "../index.css";
import counterReducer from "./counterScript.js";

const animationOptions = [
  { value: "scoreboard", label: "Scoreboard" },
  { value: "retroFlip", label: "Retro Flip" },
  { value: "tinderSwipe", label: "Horizontal Swipe" },
  { value: "rollingBarrel", label: "Rolling Barrel" },
];

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const [frontValue, setFrontValue] = useState(0);
  const [backValue, setBackValue] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [animationStyle, setAnimationStyle] = useState("scoreboard");

  useEffect(() => {
    if (!isFlipping) return;

    const timer = setTimeout(() => setIsFlipping(false), 650);
    return () => clearTimeout(timer);
  }, [isFlipping]);

  const handleAction = (type) => {
    const nextValue = type === "increment" ? state.count + 1 : state.count - 1;

    setFrontValue(state.count);
    setBackValue(nextValue);
    setIsFlipping(true);
    dispatch({ type });
  };

  const handleStyleChange = (nextStyle) => {
    setAnimationStyle(nextStyle);
    setFrontValue(state.count);
    setBackValue(state.count);
    setIsFlipping(true);
  };

  return (
    <div className="counter-shell">
      <div className="style-menu">
        {animationOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            className={animationStyle === option.value ? "active" : ""}
            onClick={() => handleStyleChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className={`counter theme ${animationStyle}`}>
        <div className={`flip-display ${animationStyle} ${isFlipping ? "flipping" : ""}`}>
          <span className="digit top">{isFlipping ? frontValue : state.count}</span>
          <span className="digit bottom">{isFlipping ? backValue : state.count}</span>
        </div>

        <div className="panel theme">
          <button type="button" onClick={() => handleAction("increment")}>
            +
          </button>
          <button type="button" onClick={() => handleAction("decrement")}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
