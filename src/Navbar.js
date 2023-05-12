import { useState } from "react";
import "./navbar.css"

function Navbar() {
  const [isdark, setdark] = useState(false)
  window.onscroll = ()=>{
    setdark(window.scrollY > 170 ? true : false)
  }
  return (
    <>
      <header className={isdark ? "dark" : ""}>
        <div className="logo"><img src='/netflix.PNG'></img></div>
        <div className="emoji"><img src='/emoji.PNG'></img></div>
      </header>

    </>
  );
}

export default Navbar