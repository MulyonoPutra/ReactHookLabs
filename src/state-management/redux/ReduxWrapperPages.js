import AComponent from "./components/AComponent";
import BComponent from "./components/BComponent";
import ReduxParent from "./components/ReduxParent";

const ReduxWrapperPages = () => {
  return (
    <div>
      <ReduxParent />
      <AComponent />
      <BComponent />
    </div>
  );
};

export default ReduxWrapperPages;

/// Store: Suatu wadah besar yang menyimpan state secara global
/// Reducer: Suatu fungsi untuk meng-update value yang ada pada Store
/// Dispatch / Action: Proses pemanggilan sebuah instruksi/fungsi yg disediakan/dimiliki oleh reducer
/// Subscribtion: Proses pemanggilan store yang diperlukan
