import React from "react";
import ZMap from "../../components/findFuel/ZMap";
// import NavBar from "../../components/findFuel/NavBar";
import HeaderComponent from "../../components/findFuel/HeaderComponent";
import BaseLayout from "../../layouts/baselayout/BaseLayout";
import Titlebar from "../../common/titlebar/Titlebar";

function FindFuelStation() {
  return (
    <>
      {/* <NavBar /> */}
      <BaseLayout>
        <Titlebar
          variant="default"
          backgroundImage="find-a-station"
          title="Find a fuel station near you"
        />
        {/* <HeaderComponent /> */}

        <ZMap />
      </BaseLayout>
    </>
  );
}

export default FindFuelStation;
