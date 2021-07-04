import React from "react"
import * as GlobalCSS from "../styles/global.module.css"

const NamedDefault = ({children}) => (
  <div className={GlobalCSS.centerMe} style={{ minWidth: "300px", maxWidth: "760px", padding: "20px" }}>
    {children}
  </div>
);
export default NamedDefault;