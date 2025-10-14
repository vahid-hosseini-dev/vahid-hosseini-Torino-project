"use client";

import { useState, useEffect } from "react";

const TwoMinuteTimer = () => {
  const [secondsLeft, setSecondsLeft] = useState(120);

  useEffect(() => {
    if (secondsLeft <= 0) {
      window.location.href = "/";
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div>
      {secondsLeft > 0 ? (
        <div className="flex gap-2">
          <span>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
          <span className="text-[12px] text-[#282828]">تا ارسال مجدد کد</span>
        </div>
      ) : (
        <p>دوباره تلاش کنید</p>
      )}
    </div>
  );
};

export default TwoMinuteTimer;
