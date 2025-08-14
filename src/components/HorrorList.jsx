import { useState, useEffect } from "react";
import HorrorCard from "./HorrorCard";
import { horrorStories } from "../data/stories";
import "./HorrorList.css";

export default function HorrorList() {
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    if (horrorStories.length >= 2) {
      const shuffled = [...horrorStories].sort(() => Math.random() - 0.5);
      setRecommended(shuffled.slice(0, 2)); // 무조건 2개만 추출
    }
  }, []);

  return (
    <div className="horror-list">
      {recommended.map((story, idx) => (
        <HorrorCard
          key={idx}
          title={story.title}
          short={story.short}
          full={story.full}
        />
      ))}
    </div>
  );
}
