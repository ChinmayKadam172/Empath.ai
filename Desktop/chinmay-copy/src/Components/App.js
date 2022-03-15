import { useState, useEffect } from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

export default function App() {
  const [isMobile, setMobile] = useState(!!(window.innerWidth <= 600));
  // '!!' is used to typecast into boolean

  const updateMedia = () => {
    setMobile(!!(window.innerWidth <= 600));
    //console.log(window.innerWidth, isMobile);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  // useEffect causes the code within to be run again on every render

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
  //conditional rendering , Different components are rendered based on screen size
}
