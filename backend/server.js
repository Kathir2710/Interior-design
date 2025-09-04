
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "root";
const DB_PASS = process.env.DB_PASS || "Saran2001@$";
const DB_NAME = process.env.DB_NAME || "prod";
const PORT = process.env.PORT || 5000;

let pool;

// Initialize DB: create database/table and a dummy row if table empty
async function initDB() {
  // Create connection without database to ensure DB exists
  const conn = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    multipleStatements: true,
  });
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
  await conn.query(`USE \`${DB_NAME}\`;`);
  await conn.query(`
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
    )
  `);

  const [rows] = await conn.query("SELECT COUNT(*) AS cnt FROM payments");
  if (rows[0].cnt === 0) {
    await conn.query(
      `INSERT INTO payments (
        yooz_number, yooz_doc_id, cutoff_action, source, payment_method, invoice_date,
        transaction_group, type, due_date, settlement_date, invoice_currency,
        fx_currency_leg, reference, internal_notes, external_note, from_portfolio,
        from_portfolio_name, from_currency, from_account_number, total_payable,
        to_portfolio, to_portfolio_name, to_currency, to_account_number, payment_amount,
        approval_name, approval_action, approval_time, payment_support, additional_payment_support
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        "Y123","DOC456","None","Yooz","Hazeltree","2025-08-23",
        "Cash Transfer","Internal Wire","2025-08-30","2025-08-31","EUR",
        "From","Ref001","Please Update ERP Code","Note","Portfolio1",
        "Portfolio Name1","EUR","ACC123",1000.00,
        "Portfolio2","Portfolio Name2","EUR","ACC456",900.00,
        "Admin","Approved","12:30","Support1","Support2"
      ]
    );
  }

  await conn.end();

  // Create pool for app usage
  pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    connectionLimit: 10,
  });
}

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Save payment
app.post("/save-payment", async (req, res) => {
  try {
    const data = req.body || {};

    const sql = `
      INSERT INTO payments (
        yooz_number, yooz_doc_id, cutoff_action, source, payment_method, invoice_date,
        transaction_group, type, due_date, settlement_date, invoice_currency,
        fx_currency_leg, reference, internal_notes, external_note,
        from_portfolio, from_portfolio_name, from_currency, from_account_number, total_payable,
        to_portfolio, to_portfolio_name, to_currency, to_account_number, payment_amount,
        approval_name, approval_action, approval_time, payment_support, additional_payment_support
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Normalize numeric fields
    const total_payable = data.total_payable ? Number(data.total_payable) : 0;
    const payment_amount = data.payment_amount ? Number(data.payment_amount) : 0;

    const values = [
      data.yooz_number || null,
      data.yooz_doc_id || null,
      data.cutoff_action || null,
      data.source || null,
      data.payment_method || null,
      data.invoice_date || null,
      data.transaction_group || null,
      data.type || null,
      data.due_date || null,
      data.settlement_date || null,
      data.invoice_currency || null,
      data.fx_currency_leg || null,
      data.reference || null,
      data.internal_notes || null,
      data.external_note || null,
      data.from_portfolio || null,
      data.from_portfolio_name || null,
      data.from_currency || null,
      data.from_account_number || null,
      total_payable,
      data.to_portfolio || null,
      data.to_portfolio_name || null,
      data.to_currency || null,
      data.to_account_number || null,
      payment_amount,
      data.approval_name || null,
      data.approval_action || null,
      data.approval_time || null,
      data.payment_support || null,
      data.additional_payment_support || null,
    ];

    const [result] = await pool.query(sql, values);
    res.json({ message: "Payment saved successfully", id: result.insertId });
  } catch (err) {
    console.error("Error inserting payment:", err);
    res.status(500).json({ error: "Database insert failed" });
  }
});

// List latest payments
app.get("/payments", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM payments ORDER BY id DESC LIMIT 50");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching payments:", err);
    res.status(500).json({ error: "Failed to fetch payments" });
  }
});


initDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize DB:", err);
    process.exit(1);
  });
