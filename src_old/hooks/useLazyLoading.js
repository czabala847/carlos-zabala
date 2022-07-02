import React from "react";

const useLazyLoading = () => {
  const [show, setShow] = React.useState(false);
  const refElement = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];

      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });

    observer.observe(refElement.current);
  }, [refElement]);

  return [show, refElement];
};

export { useLazyLoading };
