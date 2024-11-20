"use client";

import { useState } from "react";

export interface useCopyToClipboardProps {
  timeout?: number;
}

/**
 * 텍스트를 클립보드에 복사하고 그 복사 성공여부를 추적하는 훅
 */

export function useCopyToClipboard({
  timeout = 2000,
}: useCopyToClipboardProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyToClipboard = (value: string) => {
    if (typeof window === "undefined" || !navigator.clipboard?.writeText) {
      return;
    }
    if (!value) {
      return;
    }
    navigator.clipboard.writeText(value).then(() => {
      setIsCopied(true);

      // timeout이 지나면 siCopied를 리셋
      setTimeout(() => {
        setIsCopied(false);
      }, timeout);
    });
  };

  return { isCopied, copyToClipboard };
}
