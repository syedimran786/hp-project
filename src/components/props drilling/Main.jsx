import React, { createContext } from "react";
import F from "./F";


export let studentContext = createContext();
export let employeeContext = createContext();
export let teacherContext = createContext();

function Main() {
  return (
    <React.Fragment>
      <employeeContext.Provider value={"Dinga"}>
        <studentContext.Provider value={"Raju"}>
          <teacherContext.Provider value={{ tname: "Sheela", subject: "physics" }} >
            <F />
          </teacherContext.Provider>
        </studentContext.Provider>
      </employeeContext.Provider>
    </React.Fragment>
  );
}

export default Main;
