const ProductsHeadline = () => {
  return (
    <div
      className="pump-bg"
      style={{
        position: "relative",
        height: 600,
      }}
    >
      <div className="mp-overlay"></div>
      <div
        className="container  h-100"
        style={{ position: "relative", color: "white" }}
      >
        <div style={{ zIndex: 2 }} className="row justify-content-end h-100">
          <div className="col-md-6 h-100">
            <div className="d-flex flex-column justify-content-center h-100">
              <h1 className="title-1">Products</h1>
              <p style={{ fontSize: 22 }} className="mt-3">
                More than providing pumps, Mizpah supplies turnkey pumping
                solutions that include pumps from the world’s most trusted
                brands, complementary accessories and client services from
                maintenance and repairs to training and parts supply.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeadline;
