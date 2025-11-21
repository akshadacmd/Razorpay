import axios from "axios";
import productsData from "./data.js";
import "../styles/products.css";

const Products = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } =await axios.get("http://localhost:8000/api/v1/getKey");


    const {
      data: { order },
    } = await axios.post("http://localhost:8000/api/v1/payment/process", { amount });
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Razorpay",
      description: "Razorpay Integration Tutorial",
      order_id: order.id,
     callback_url: "http://localhost:8000/api/v1/payment/verification",
      prefill: {
        name: "Akshada",
        email: "akshadap46@gmail.com",
        contact: "8698497251",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="products-container">
      {productsData.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt="product" className="product-image" />
          <h3 className="product-title">{item.title}</h3>
          <p className="product-price">₹{item.price}</p>
          <button
            className="pay-button"
            onClick={() => checkoutHandler(item.price)}
          >
            Pay ₹{item.price}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;