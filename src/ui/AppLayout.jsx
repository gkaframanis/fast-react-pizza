import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader.jsx";

const AppLayout = () => {
  // state: idle, loading, etc
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className={"layout"}>
      {isLoading && <Loader />}
      <Header />

      <main>
        {/*  To show the content of the children routes of the AppLayout route */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
