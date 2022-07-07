import React, { useEffect, useState, useRef } from "react";

function useLazyLoading() {
  const [show, setShow] = useState<boolean>(false);
  const refElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const { isIntersecting } = entries[0];

        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      }
    );

    observer.observe(refElement.current);
  }, [refElement]);

  return [show, refElement];
}

export { useLazyLoading };
