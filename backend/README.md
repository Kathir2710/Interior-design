
# Payments Backend (Express + MySQL)

This backend saves Payment Voucher data from your React app into MySQL.

## Quick Start

1) Install dependencies
```bash
npm install
```

2) Start the server
```bash
npm start
```

The server will auto-initialize the DB (`prod`) and the `payments` table with one dummy row if empty.

- Server URL: http://localhost:5000
- Health: GET /health
- Save Payment: POST /save-payment
- List Payments: GET /payments

## Environment

The server reads `.env`. A default `.env` is provided with your credentials. Update if needed.

```
DB_HOST=localhost
DB_USER=root
DB_PASS=Saran2001@$
DB_NAME=prod
PORT=5000
```

## Manual SQL (Optional)

If you prefer to create DB manually:
```sql
-- Create Database
CREATE DATABASE IF NOT EXISTS prod;
USE prod;

-- Create payments table
CREATE TABLE IF NOT EXISTS payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    yooz_number VARCHAR(100),
    yooz_doc_id VARCHAR(100),
    cutoff_action VARCHAR(100),
    source VARCHAR(50),
    payment_method VARCHAR(50),
    invoice_date DATE,
    transaction_group VARCHAR(100),
    type VARCHAR(100),
    due_date DATE,
    settlement_date DATE,
    invoice_currency VARCHAR(10),
    fx_currency_leg VARCHAR(10),
    reference VARCHAR(255),
    internal_notes TEXT,
    external_note TEXT,
    from_portfolio VARCHAR(100),
    from_portfolio_name VARCHAR(100),
    from_currency VARCHAR(10),
    from_account_number VARCHAR(100),
    total_payable DECIMAL(15,2),
    to_portfolio VARCHAR(100),
    to_portfolio_name VARCHAR(100),
    to_currency VARCHAR(10),
    to_account_number VARCHAR(100),
    payment_amount DECIMAL(15,2),
    approval_name VARCHAR(100),
    approval_action VARCHAR(100),
    approval_time VARCHAR(100),
    payment_support VARCHAR(255),
    additional_payment_support VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
