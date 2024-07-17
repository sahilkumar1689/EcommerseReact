import HomeItems from "./HomeItems";
import { useSelector } from "react-redux";

function MainSection() {
  const items = useSelector((storage) => storage.HomeItems);

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((singleItem, index) => (
            <HomeItems key={index} item={singleItem} />
          ))}
        </div>
      </main>
    </>
  );
}
export default MainSection;
