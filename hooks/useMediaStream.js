import { useState, useEffect, useRef } from "react";

const useMediaStream = () => {
  const [state, setState] = useState(null);

  const isStreamSet = useRef(false);
  // The JavaScript navigator object is used for browser detection.
  // It can be used to get browser information such as appName, appCodeName, userAgent etc.
  // The navigator object is the window property, so it can be accessed by: window. navigator.
  useEffect(() => {
    if (isStreamSet.current) return;
    isStreamSet.current = true;
    (async function initStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        console.log("setting your stream");
        setState(stream);
      } catch (err) {
        console.log("err in media navigator", err);
      }
    })();
  }, []);

  return {
    stream: state,
  };
};
export default useMediaStream;
