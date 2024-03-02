import React, { useState } from 'react';
import './OpticalBill.css';

function OpticalBill() {
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [glassBrand, setGlassBrand] = useState('');
  const [glassType, setGlassType] = useState('');
  const [glassQuality, setGlassQuality] = useState('');
  const [frameBrand, setFrameBrand] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [viewFinalForm, setViewFinalForm] = useState(false);

  const handleCalculateTotal = () => {
    setTotal(quantity * price);
  };

  const handleViewFinalForm = () => {
    setViewFinalForm(true);
  };

  const handleEditForm = () => {
    setViewFinalForm(false);
  };

  return (
    <div className="optical-bill-container">
      {viewFinalForm ? (
        <div>
          <h2>Optical Shop Bill</h2>
          <table className="printable-table">
            <tbody>
              <tr>
                <td>Customer Name:</td>
                <td>{customerName}</td>
              </tr>
              <tr>
                <td>Customer Address:</td>
                <td>{customerAddress}</td>
              </tr>
              <tr>
                <td>Glass Brand:</td>
                <td>{glassBrand}</td>
              </tr>
              <tr>
                <td>Glass Type:</td>
                <td>{glassType}</td>
              </tr>
              <tr>
                <td>Glass Quality:</td>
                <td>{glassQuality}</td>
              </tr>
              <tr>
                <td>Frame Brand:</td>
                <td>{frameBrand}</td>
              </tr>
              <tr>
                <td>Quantity:</td>
                <td>{quantity}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>{price}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>{total}</td>
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
            <button onClick={handleEditForm}>Edit</button>
            <button onClick={() => window.print()}>Print</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Optical Shop Bill</h2>
          <div className="input-group">
            <label htmlFor="customerName">Customer Name:</label>
            <input 
              type="text" 
              id="customerName" 
              value={customerName} 
              onChange={(e) => setCustomerName(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label htmlFor="customerAddress">Customer Address:</label>
            <input 
              type="text" 
              id="customerAddress" 
              value={customerAddress} 
              onChange={(e) => setCustomerAddress(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <label htmlFor="glassBrand">Glass Brand:</label>
            <select
              id="glassBrand"
              value={glassBrand}
              onChange={(e) => setGlassBrand(e.target.value)}
            >
              <option value="">Select Glass Brand</option>
              <option value="Crizal">Crizal</option>
              <option value="Kodak">Kodak</option>
              <option value="Nova">Nova</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="glassType">Glass Type:</label>
            <select
              id="glassType"
              value={glassType}
              onChange={(e) => setGlassType(e.target.value)}
            >
              <option value="">Select Glass Type</option>
              <option value="Single vision">Single Vision</option>
              <option value="Progressive">Progressive</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="glassQuality">Glass Quality:</label>
            <select
              id="glassQuality"
              value={glassQuality}
              onChange={(e) => setGlassQuality(e.target.value)}
            >
              <option value="">Select Glass Quality</option>
              <option value="Crizal Easy">Crizal Easy</option>
              <option value="Crizal Rock">Crizal Rock</option>
              <option value="Crizal Preventia">Crizal Preventia</option>
              <option value="Bluecut">Bluecut</option>
              <option value="CRKT">CRKT</option>
              <option value="CR progressive">CR progressive</option>
              <option value="Bluecut Progressive">Bluecut Progressive</option>
              <option value="PG Progressive">PG Progressive</option>
              <option value="PG Single Vision">PG Single Vision</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="frameBrand">Frame Brand:</label>
            <select
              id="frameBrand"
              value={frameBrand}
              onChange={(e) => setFrameBrand(e.target.value)}
            >
              <option value="">Select Frame Brand</option>
              <option value="RayBan">RayBan</option>
              <option value="Vogue">Vogue</option>
              <option value="Titan Eye+">Titan Eye+</option>
              <option value="FastTrack">FastTrack</option>
              <option value="Scott">Scott</option>
              <option value="Harizon">Harizon</option>
              <option value="N/A">N/A</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="quantity">Quantity:</label>
            <input 
              type="number" 
              id="quantity" 
              value={quantity} 
              onChange={(e) => setQuantity(Number(e.target.value))} 
            />
          </div>
          <div className="input-group">
            <label htmlFor="price">Price:</label>
            <input 
              type="number" 
              id="price" 
              value={price} 
              onChange={(e) => setPrice(Number(e.target.value))} 
            />
          </div>
          <div className="button-group">
            <button onClick={handleCalculateTotal}>Calculate Total</button>
            <button onClick={handleViewFinalForm}>View Final Form</button>
          </div>
          <div className="total">
            <p>Total: ${total}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default OpticalBill;
