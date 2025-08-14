import { useState, useEffect } from "react";
import "./App.css";
import HorrorList from "./components/HorrorList";
import HorrorSwiper from "./components/HorrorSwiper";
import { horrorContents } from "./data/horrorContents";

function App() {
  // 🔹 초기 상태를 localStorage에서 바로 불러옴
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // 상태가 바뀔 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToWishlist = (story) => {
    if (!wishlist.some((item) => item.title === story.title)) {
      setWishlist((prev) => [...prev, story]);
    }
  };

  const handleRemoveFromWishlist = (title) => {
    setWishlist((prev) => prev.filter((item) => item.title !== title));
  };

  return (
    <div className="app">
      <h1 className="app-header">오늘의 공포 이야기 🔪</h1>
      <HorrorList />

      <h1 className="app-header">공포 콘텐츠 담기 🩸</h1>
      <p className="app-desc">
        좌우로 움직여 콘텐츠를 확인하고, 원하는 콘텐츠를 찜해두세요!
      </p>
      <HorrorSwiper
        stories={horrorContents}
        onAddToWishlist={handleAddToWishlist}
      />

      <div className="wishlist-section">
        <h3>내가 찜한 콘텐츠</h3>
        {wishlist.length > 0 ? (
          <ul className="wishlist-list">
            {wishlist.map((item, idx) => (
              <li key={idx} className="wishlist-item">
                {item.title}
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveFromWishlist(item.title)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="wishlist-empty">아직 찜한 콘텐츠가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default App;
