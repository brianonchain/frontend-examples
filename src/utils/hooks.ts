"use client";
import { useEffect, useState, useLayoutEffect, useRef } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches); // initial
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export function useBodyScrollLock(isLocked: boolean) {
  useLayoutEffect(() => {
    if (!isLocked) return;

    const y = window.scrollY || window.pageYOffset;
    const body = document.body;

    // optional: compensate scrollbar to avoid layout shift
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    if (sbw > 0) body.style.paddingRight = `${sbw}px`;

    body.classList.add("scroll-lock");
    body.style.top = `-${y}px`;

    return () => {
      body.classList.remove("scroll-lock");
      body.style.top = "";
      window.scrollTo(0, y);
    };
  }, [isLocked]);
}
