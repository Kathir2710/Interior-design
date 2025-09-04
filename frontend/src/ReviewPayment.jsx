import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReviewPayment.css";

export default function ReviewPayment() {
  const navigate = useNavigate();

  // ✅ Single state for all form fields
  const [formData, setFormData] = useState({
    yooz_number: "",
    yooz_doc_id: "",
    cutoff_action: "",
    source: "Yooz",
    payment_method: "Hazeltree",
    invoice_date: "",
    transaction_group: "Cash Transfer",
    type: "Internal Wire",
    due_date: "",
    settlement_date: "",
    invoice_currency: "EUR",
    fx_currency_leg: "From",
    reference: "",
    internal_notes: "// Please Update ERP Code",
    external_note: "",
    from_portfolio: "",
    from_portfolio_name: "",
    from_currency: "EUR",
    from_account_number: "",
    total_payable: "",
    to_portfolio: "",
    to_portfolio_name: "",
    to_currency: "EUR",
    to_account_number: "",
    payment_amount: "",
    approval_name: "",
    approval_action: "",
    approval_time: "",
    payment_support: "",
    additional_payment_support: "",
  });

  // ✅ Update state on input change
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };

  // ✅ Save payment
  const savePayment = () => {
    fetch("http://localhost:5000/save-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message))
      .catch((err) => console.error("❌ Error:", err));
  };

  return (
    <div className="review-payment-page">
      {/* ✅ Single Header (removed duplicate) */}
      <div className="header">
        <button className="btn btn-back" onClick={() => navigate(-1)}>
          &larr;
        </button>
        <h2>Payment Voucher</h2>
        <button className="btn" onClick={savePayment}>
          Load Payment
        </button>
      </div>

      {/* First Row */}
      <div className="form-section">
        <div className="flex-row">
          <div className="form-group">
            <label>Yooz Number</label>
            <input
              type="text"
              name="yooz_number"
              value={formData.yooz_number}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Yooz Document ID</label>
            <input
              type="text"
              name="yooz_doc_id"
              value={formData.yooz_doc_id}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Cut Off Action</label>
            <input
              type="text"
              name="cutoff_action"
              value={formData.cutoff_action}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Source to Type */}
      <div className="form-section">
        <div className="flex-row">
          <div className="form-group">
            <label>Source</label>
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
            >
              <option>Yooz</option>
            </select>
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <select
              name="payment_method"
              value={formData.payment_method}
              onChange={handleChange}
            >
              <option>Hazeltree</option>
            </select>
          </div>
          <div className="form-group">
            <label>Invoice Date</label>
            <input
              type="date"
              name="invoice_date"
              value={formData.invoice_date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Transaction Group</label>
            <select
              name="transaction_group"
              value={formData.transaction_group}
              onChange={handleChange}
            >
              <option>Cash Transfer</option>
            </select>
          </div>
          <div className="form-group">
            <label>Type</label>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option>Internal Wire</option>
            </select>
          </div>
        </div>
      </div>

      {/* Dates & Notes */}
      <div className="form-section">
        <div className="flex-row">
          <div className="form-group">
            <label>Due Date</label>
            <input
              type="date"
              name="due_date"
              value={formData.due_date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Settlement Date</label>
            <input
              type="date"
              name="settlement_date"
              value={formData.settlement_date}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Invoice Currency</label>
            <select
              name="invoice_currency"
              value={formData.invoice_currency}
              onChange={handleChange}
            >
              <option>EUR</option>
            </select>
          </div>
          <div className="form-group">
            <label>FX Currency Leg</label>
            <select
              name="fx_currency_leg"
              value={formData.fx_currency_leg}
              onChange={handleChange}
            >
              <option>From</option>
              <option>To</option>
            </select>
          </div>
          <div className="form-group">
            <label>Reference</label>
            <input
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Internal Notes</label>
            <input
              type="text"
              name="internal_notes"
              value={formData.internal_notes}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>External Note</label>
            <input
              type="text"
              name="external_note"
              value={formData.external_note}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* From Section */}
      <div className="form-section sub-section">
        <h4>
          From{" "}
          <span>(Portfolio Not Found, Add in Portfolio Management / Yooz ERP)</span>
        </h4>
        <div className="flex-row">
          <div className="form-group">
            <label>Portfolio</label>
            <input
              type="text"
              name="from_portfolio"
              value={formData.from_portfolio}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Portfolio Name</label>
            <input
              type="text"
              name="from_portfolio_name"
              value={formData.from_portfolio_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Currency</label>
            <select
              name="from_currency"
              value={formData.from_currency}
              onChange={handleChange}
            >
              <option>EUR</option>
            </select>
          </div>
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              name="from_account_number"
              value={formData.from_account_number}
              onChange={handleChange}
              placeholder="Please Update ERP Code"
            />
          </div>
          <div className="form-group">
            <label>Total Payable Amount (€)</label>
            <input
              type="number"
              name="total_payable"
              value={formData.total_payable}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* To Section */}
      <div className="form-section sub-section">
        <h4>
          To{" "}
          <span>(Portfolio Not Found, Add in Portfolio Management / Yooz ERP)</span>
        </h4>
        <div className="flex-row">
          <div className="form-group">
            <label>Portfolio</label>
            <input
              type="text"
              name="to_portfolio"
              value={formData.to_portfolio}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Portfolio Name</label>
            <input
              type="text"
              name="to_portfolio_name"
              value={formData.to_portfolio_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Currency</label>
            <select
              name="to_currency"
              value={formData.to_currency}
              onChange={handleChange}
            >
              <option>EUR</option>
            </select>
          </div>
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              name="to_account_number"
              value={formData.to_account_number}
              onChange={handleChange}
              placeholder="Please Update ERP Code"
            />
          </div>
          <div className="form-group">
            <label>Payment Amount (€)</label>
            <input
              type="number"
              name="payment_amount"
              value={formData.payment_amount}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Approval Log */}
      <div className="form-section">
        <h4>Approval Log</h4>
        <div className="approval-log">
          {/* Left Side */}
          <div className="approval-left">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="approval_name"
                value={formData.approval_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Action</label>
              <input
                type="text"
                name="approval_action"
                value={formData.approval_action}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Time</label>
              <input
                type="text"
                name="approval_time"
                value={formData.approval_time}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Right Side */}
          <div className="approval-right">
            <div className="form-group">
              <label>Payment Support</label>
              <input
                type="text"
                name="payment_support"
                value={formData.payment_support}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Additional Payment Support</label>
              <input
                type="text"
                name="additional_payment_support"
                value={formData.additional_payment_support}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
