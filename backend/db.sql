
CREATE DATABASE IF NOT EXISTS prod;

USE prod;

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


INSERT INTO payments (
    yooz_number, yooz_doc_id, cutoff_action, source, payment_method, invoice_date,
    transaction_group, type, due_date, settlement_date, invoice_currency,
    fx_currency_leg, reference, internal_notes, external_note, from_portfolio,
    from_portfolio_name, from_currency, from_account_number, total_payable,
    to_portfolio, to_portfolio_name, to_currency, to_account_number, payment_amount,
    approval_name, approval_action, approval_time, payment_support, additional_payment_support
) VALUES (
    'Y123', 'DOC456', 'None', 'Yooz', 'Hazeltree', '2025-08-23',
    'Cash Transfer', 'Internal Wire', '2025-08-30', '2025-08-31', 'EUR',
    'From', 'Ref001', 'Please Update ERP Code', 'Note', 'Portfolio1',
    'Portfolio Name1', 'EUR', 'ACC123', 1000.00,
    'Portfolio2', 'Portfolio Name2', 'EUR', 'ACC456', 900.00,
    'Admin', 'Approved', '12:30', 'Support1', 'Support2'
);
