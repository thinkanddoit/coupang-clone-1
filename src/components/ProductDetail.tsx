const ProductDetail = ({ data }: any) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
      <img src={data.imageUrl} alt={data.name} />
      <span>{data.name}</span>
      <span>{`${data.originalPrice}원`}</span>
      <span>{data.expectedDeliveryDate}</span>
    </div>
  );
};
export default ProductDetail;
