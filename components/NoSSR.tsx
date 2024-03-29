import { useEffect, useLayoutEffect, useState } from "react";

const useEnhancedEffect =
  typeof window !== "undefined" && process.env.NODE_ENV !== "test"
    ? useLayoutEffect
    : useEffect;

const NoSSR = ({ children, defer, fallback }) => {
  const [isMounted, setMountedState] = useState(false);

  useEnhancedEffect(() => {
    if (!defer) setMountedState(true);
  }, [defer]);

  useEffect(() => {
    if (defer) setMountedState(true);
  }, [defer]);

  return isMounted ? children : fallback;
};

NoSSR.defaultProps = {
  defer: false,
  fallback: null,
};

export default NoSSR;
