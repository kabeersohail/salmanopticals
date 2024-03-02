import React from 'react';
import './PrintableBill.css';

const PrintableBill = ({ data, onEditForm }) => {
  return (
    <div className="printable-bill-container">
      <h2>Optical Shop Bill</h2>
      <table className="printable-table">
        <tbody>
          <tr>
            <td>Customer Name:</td>
            <td>{data.customerName}</td>
          </tr>
          <tr>
            <td>Customer Address:</td>
            <td>{data.customerAddress}</td>
          </tr>
          <tr>
            <td>Glass Brand:</td>
            <td>{data.glassBrand}</td>
          </tr>
          <tr>
            <td>Glass Type:</td>
            <td>{data.glassType}</td>
          </tr>
          <tr>
            <td>Glass Quality:</td>
            <td>{data.glassQuality}</td>
          </tr>
          <tr>
            <td>Frame Brand:</td>
            <td>{data.frameBrand}</td>
          </tr>
          <tr>
            <td>Quantity:</td>
            <td>{data.quantity}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>{data.price}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{data.total}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="disclaimer">
                <p><strong>Disclaimer:</strong> After payment of advance, it is non-refundable.</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="button-group">
        <button onClick={onEditForm}>Edit</button>
        <button onClick={() => window.print()}>Print</button>
      </div>
    </div>
  );
};

export default PrintableBill;
