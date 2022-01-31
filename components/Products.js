// import Image from "next/image";
import ProductStyles from "../styles/Products.module.css";
const Products = () => {
  const data = [
    {
      img: "web1-thumb.jpg",
    },
    {
      img: "web2-thumb.jpg",
    },
    {
      img: "web3-thumb.jpg",
    },
    {
      img: "web4-thumb.jpg",
    },
    {
      img: "web5-thumb.jpg",
    },
    {
      img: "web6-thumb.jpg",
    },
  ];
  return (
    <>
      <div className={ProductStyles.products}>
        <div className="container">
          <div className="row">
            <div className={`col-12 col-sm-12 ${ProductStyles.productHeading}`}>
              <h4>SEE OUR</h4>
              <div className={ProductStyles.productsHeading}>
                <span>PRODUCTS</span>
              </div>
            </div>
          </div>
          <div className={`row ${ProductStyles.productCardsGap}`}>
            {data.map((item, index) => (
              <div
                className={`col-12 col-sm-4 ${ProductStyles.productCard}`}
                style={{ backgroundImage: `url(/images/${item.img})` }}
                key={index}
              >
                <div className={ProductStyles.overlay}>
                  <h3>Xplode</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <button className={ProductStyles.btn1}>View Product</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
