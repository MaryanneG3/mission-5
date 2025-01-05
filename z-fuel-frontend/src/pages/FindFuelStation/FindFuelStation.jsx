import React from "react";
import ZMap from "../../components/findFuel/ZMap";
import NavBar from "../../components/findFuel/NavBar";
import HeaderComponent from "../../components/findFuel/HeaderComponent";

function FindFuelStation() {
  return (
    <>
      <NavBar /> <HeaderComponent />
      <ZMap />
    </>
  );
}

export default FindFuelStation;
