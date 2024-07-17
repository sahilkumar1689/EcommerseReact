function BagSummary({ item }) {
  // console.log(item);

  const amountDetails = {
    totalItem: item.length,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  };

  function Calculation() {
    item.forEach((element) => {
      amountDetails.totalMRP += element.original_price;
      amountDetails.totalDiscount +=
        element.original_price - element.current_price;
      amountDetails.finalPayment += element.current_price;
    });
  }
  Calculation();

  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">
            PRICE DETAILS ({amountDetails.totalItem} Items){" "}
          </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{amountDetails.totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{amountDetails.totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">
              ₹{amountDetails.finalPayment}
            </span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
}

export default BagSummary;
