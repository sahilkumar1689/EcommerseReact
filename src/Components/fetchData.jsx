import { useEffect } from "react";

function FetchData() {
  //   let dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let response = await fetch("http://127.0.0.1:8080/items");
      let data = await response.json();
      console.log(data.items);

      dispatch(HomeSliceAction.addItems(data.items));
    })();
  }, []);

  return <></>;
}

export default FetchData;
