import "../App.css";
import BagSummary from "./BagSummary";
import BagItems from "./BagItems";
import { useDispatch, useSelector } from "react-redux";
import { BagSliceAction } from "../Store/BagItemsSlice";

function BagContainer() {
  const items = useSelector((storage) => storage.BagItems);
  const dispatch = useDispatch();
  const removeItem = (removeIndex) => {
    // console.log(removeIndex);
    dispatch(BagSliceAction.removeItem(removeIndex));
  };

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {items.length == 0 ? (
              <h1
                style={{
                  opacity: "0.5",
                  paddingTop: "10%",
                  paddingLeft: "16%",
                }}
              >
                Your Cart Is Empty.
              </h1>
            ) : (
              items.map((singleItem, index) => (
                <BagItems
                  key={index}
                  item={singleItem}
                  getremoveindex={() => {
                    removeItem(index);
                  }}
                />
              ))
            )}
          </div>

          <BagSummary item={items} />
        </div>
      </main>
    </>
  );
}

export default BagContainer;
