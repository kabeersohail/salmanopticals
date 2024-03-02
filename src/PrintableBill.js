import React from 'react';
import './PrintableBill.css';

const PrintableBill = () => {
  return (
    <div className="printable-bill-container">
      {/* Top left design */}
      <div className="triangle"></div>

      {/* Top right logo and name */}
      <div className="logo-container">
        <img src="your-logo.png" alt="Logo" className="logo" />
        <h2>Salman Opticals</h2>
      </div>

      {/* Invoice title */}
      <div className="invoice-title">
        <h1>Invoice</h1>
        {/* Other details like invoice number, date, name, email, etc. */}
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Description</th>
              <th>Price</th>
              <th>QTY</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* Loop through your items and generate rows dynamically */}
            <tr>
              <td>1</td>
              <td>Item description</td>
              <td>100</td>
              <td>2</td>
              <td>200</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Footer section */}
      <div className="footer">
        <table>
          <tbody>
            <tr>
              <td>Subtotal:</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Tax (15%):</td>
              <td>30</td>
            </tr>
            <tr>
              <td>Vat (5%):</td>
              <td>10</td>
            </tr>
            <tr>
              <td>Total Due:</td>
              <td>240</td>
            </tr>
          </tbody>
        </table>
        {/* Disclaimer */}
        <div className="disclaimer">
          <p><strong>Disclaimer:</strong> After payment of advance, it is non-refundable.</p>
        </div>
      </div>

      {/* Thank you message */}
      <div className="thank-you">
        <p>Thank you for your business!</p>
      </div>
    </div>
  );
}

export default PrintableBill;
