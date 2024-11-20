"use client";

import { useEffect, useState } from "react";

/**
  사용자가 페이지 하단에 도달했는지 여부를 감지하는 사용자 정의 훅
 */
export function useAtBottom(offset = 0) {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 뷰포트와 스크롤 위치를 비교하여 판단
      setIsAtBottom(
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - offset
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return isAtBottom;
}
