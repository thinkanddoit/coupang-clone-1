const EmptyCoupon = () => (
  <div style={{ display: "flex" }}>
    <div style={{ color: "red" }}>
      <b>0</b>원
    </div>
    <div style={{ marginLeft: "90px", color: "#333" }}>
      적용 가능한 할인쿠폰이 없습니다.
    </div>
  </div>
);

export default EmptyCoupon;
