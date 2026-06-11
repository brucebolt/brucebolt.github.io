import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";

function Header() {
  const {isDark} = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>

      </header>
    </Headroom>
  );
}
export default Header;
