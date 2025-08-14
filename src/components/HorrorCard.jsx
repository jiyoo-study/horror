// src/components/HorrorCard.jsx
import { useState } from "react";
import "./HorrorCard.css";

export default function HorrorCard({ title, short, full }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="horror-card">
      <h3 className="horror-title">{title}</h3>

      {/* short는 항상 표시하되, full은 showFull이 true일 때만 표시 */}
      <p
        className={`horror-text ${showFull ? "short-text-gray" : ""}`}
      >
        {short}
      </p>

      {showFull && (
        <p className="horror-text-full">{full}</p>
      )}

      <button
        className="horror-button"
        onClick={() => setShowFull(prev => !prev)}
      >
        {showFull ? "접기" : "더보기"}
      </button>
    </div>
  );
}
