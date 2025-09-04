import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

export default function Payment() {
  const navigate = useNavigate();

  const [rows, setRows] = useState([]);
  const [filters, setFilters] = useState({
    source: '',
    voucherId: '',
    from: '',
    to: '',
    amountOrder: '', // 'asc' or 'desc' or ''
    currency: '',
    status: '',
  });

  // Fetch data from backend
  useEffect(() => {
    fetch('http://localhost:5000/payments')
      .then((res) => res.json())
      .then((data) => {
        // map DB rows to table structure
        const mapped = data.map((r) => ({
          source: r.source,
          voucherId: r.yooz_doc_id || r.id,  // fallback
          from: r.from_portfolio_name || r.from_portfolio,
          to: r.to_portfolio_name || r.to_portfolio,
          amount: r.payment_amount || r.total_payable,
          currency: r.invoice_currency,
          status: r.approval_action || "Pending",
        }));
        setRows(mapped);
      })
      .catch((err) => console.error("Error fetching payments:", err));
  }, []);

  
  const uniqueValues = (arr, key) => Array.from(new Set(arr.map(i => i[key])));

  const onFilterChange = (field) => (e) => {
    setFilters((f) => ({ ...f, [field]: e.target.value }));
  };

  
  const filteredRows = useMemo(() => {
    let filtered = rows.filter((row) => {
      return (
        (!filters.source || row.source === filters.source) &&
        (!filters.voucherId || row.voucherId === filters.voucherId) &&
        (!filters.from || row.from === filters.from) &&
        (!filters.to || row.to === filters.to) &&
        (!filters.currency || row.currency === filters.currency) &&
        (!filters.status || row.status === filters.status)
      );
    });

    if (filters.amountOrder === 'asc') {
      filtered = filtered.slice().sort((a, b) => a.amount - b.amount);
    } else if (filters.amountOrder === 'desc') {
      filtered = filtered.slice().sort((a, b) => b.amount - a.amount);
    }

    return filtered;
  }, [filters, rows]);

  
  const handleReviewPayment = () => {
    navigate('/review-payment');
  };

  const handleGoHome = () => {
    navigate('/dashboard');
  };

  return (
    <div className="payment-fullpage-bg">
      <div className="payment-fullpage-main">
        {/* Header */}
        <div className="payment-header-wide">
          <button className="btn-home" onClick={handleGoHome}>Home</button>
          <h1>Payment Staging Area</h1>
          <div className="form-actions-panel">
            <button type="button" className="btn-review-modern" onClick={handleReviewPayment}>
              Review Payment
            </button>
          </div>
        </div>

        <div className="payment-content-row">
          {/* Table Section */}
          <div className="payment-table-panel">
            <div className="table-responsive-panel">
              <table className="payment-table-modern">
                <thead>
                  <tr>
                    <th>
                      Source
                      <select value={filters.source} onChange={onFilterChange('source')} className="filter-dropdown">
                        <option value="">All</option>
                        {uniqueValues(rows, 'source').map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </th>
                    <th>
                      Voucher ID
                      <select value={filters.voucherId} onChange={onFilterChange('voucherId')} className="filter-dropdown">
                        <option value="">All</option>
                        {uniqueValues(rows, 'voucherId').map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </th>
                    <th>
                      From
                      <select value={filters.from} onChange={onFilterChange('from')} className="filter-dropdown">
                        <option value="">All</option>
                        {uniqueValues(rows, 'from').map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </th>
                    <th>
                      To
                      <select value={filters.to} onChange={onFilterChange('to')} className="filter-dropdown">
                        <option value="">All</option>
                        {uniqueValues(rows, 'to').map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </th>
                    <th>
                      Amount
                    </th>
                    <th>
                      Currency
                      <select value={filters.currency} onChange={onFilterChange('currency')} className="filter-dropdown">
                        <option value="">All</option>
                        {uniqueValues(rows, 'currency').map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </th>
                    <th>
                      Status
                      <select value={filters.status} onChange={onFilterChange('status')} className="filter-dropdown">
                        <option value="">All</option>
                        {uniqueValues(rows, 'status').map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.source}</td>
                        <td>{row.voucherId}</td>
                        <td>{row.from}</td>
                        <td>{row.to}</td>
                        <td>{row.amount?.toLocaleString()}</td>
                        <td>{row.currency}</td>
                        <td>{row.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="no-data">No matching records</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
