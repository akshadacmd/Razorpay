import { useLocation } from "react-router-dom";
import "../styles/paymentSuccess.css";

const PaymentSuccess = () => {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");

  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        <h1>Payment Successful</h1>
        <p>Thank you for your payment. Your transaction was successful.</p>
        {reference && (
          <p className="payment-success-reference">
            <strong>Reference ID:</strong> {reference}
          </p>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;