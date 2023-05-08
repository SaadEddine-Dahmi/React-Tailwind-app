import React, { useState, useEffect } from "react";

const Scrollbarprogress = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div className="w-full bg-white h-1 fixed top-0 left-0 z-10">
        <div
          className="h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          style={{ width: `${scrollTop}%` }}></div>
      </div>
    </div>
  );
};

export default Scrollbarprogress;
