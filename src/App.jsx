import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HomeSliceAction } from "./Store/HomeItemsSlice";
import { useEffect } from "react";
import { LoaderSliceAction } from "./Store/LoaderSlice";
import Scroller from "./Components/Scroller";

function App() {
  let loaderState = useSelector((storage) => storage.LoaderState);

  let dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      dispatch(LoaderSliceAction.setLoaderTrue());
      let response = await fetch(
        "https://myntrabackend-qqzs.onrender.com/items"
      );
      let data = await response.json();
      // console.log(data.items);

      dispatch(LoaderSliceAction.setLoaderFalse());
      dispatch(HomeSliceAction.addItems(data.items));
    })();
  }, []);

  return (
    <>
      <Header />
      {loaderState == true ? <Scroller /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
