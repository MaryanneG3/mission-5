import ZMap from "../../components/findFuel/ZMap";
import BaseLayout from "../../layouts/baselayout/BaseLayout";
import Titlebar from "../../common/titlebar/Titlebar";

function FindFuelStation() {
  return (
    <>
      <BaseLayout>
        <Titlebar
          variant="default"
          backgroundImage="find-a-station"
          title="Find a fuel station near you"
        />

        <ZMap />
      </BaseLayout>
    </>
  );
}

export default FindFuelStation;
