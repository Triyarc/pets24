import Aos from "aos";
import React, { useEffect } from "react";

export default function useAos() {
  useEffect(() => {
    Aos.init({ duration: 300, startEvent: "load" });
  }, []);
}
