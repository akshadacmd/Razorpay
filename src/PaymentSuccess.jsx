// frontend/src/PaymentSuccess.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const reference = searchQuery.get("reference");

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0f2f5",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "green", fontSize: "3rem" }}>Payment Successful!</h1>
      <p style={{ fontSize: "1.5rem", margin: "20px 0" }}>
        Your payment has been processed successfully.
      </p>
      <p style={{ fontSize: "1.2rem", color: "#555" }}>
        Reference ID: <strong>{reference}</strong>
      </p>
      <button
        onClick={() => window.location.href = "/"}
        style={{
          padding: "12px 30px",
          fontSize: "1.1rem",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default PaymentSuccess;