import BaseLayout from "../../layouts/baselayout/BaseLayout";
import Titlebar from "../../common/titlebar/Titlebar";

function ShareTank() {
  return (
    <BaseLayout variant="default">
      <Titlebar
        variant="default"
        backgroundImage="shareTank"
        title="Share Tank"
      />
      Welcome to the ShareTank page
    </BaseLayout>
  );
}

export default ShareTank;
