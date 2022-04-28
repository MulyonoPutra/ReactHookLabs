// @ts-ignore
import AppProvider from "../UserContext";
import User from "./User";
import UserTitle from "./UserTitle";
import UserTitle2 from "./UserTitle2";

function ContextPage() {
  return (
    <AppProvider>
      <User />
      <UserTitle />
      <UserTitle2 />
    </AppProvider>
  );
}

export default ContextPage;
