import React, { useState } from 'react';

const BonusCalculator = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [bonusAmount, setBonusAmount] = useState('');

  const calculateBonus = (event) => {
    event.preventDefault();
    let bonus = 0;
    const amount = Number(depositAmount);

    if (amount >= 5 && amount < 6) {
      // no bonus for deposits of 5 pounds
      bonus = 0;
    } else if (amount >= 6 && amount <= 10) {
      // 25% bonus for deposits between 6 and 10 pounds
      bonus = amount * 0.25;
    } else if (amount > 10) {
      // 25% to 50% bonus for deposits over 10 pounds
      const randomNum = Math.floor(Math.random() * 4);
      if (randomNum === 0) {
        bonus = amount * 0.25;
      } else {
        bonus = amount * 0.5;
      }
    }

    setBonusAmount(`Bonus amount: ${bonus.toFixed(2)} pounds`);
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={{color: '#2C3E50'}}>Bonus Calculator</h1>
      <form onSubmit={calculateBonus}>
        <label htmlFor="deposit-amount" style={{fontSize: '20px', marginRight: '10px'}}>Enter deposit amount: </label>
        <input type="number" id="deposit-amount" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} style={{padding: '10px'}} />
        <button type="submit" style={{padding: '10px', backgroundColor: '#2C3E50', color: '#fff', border: 'none', marginLeft: '10px'}}>Calculate</button>
      </form>
      <p style={{fontSize: '20px', marginTop: '20px'}}>{bonusAmount}</p>
    </div>
  );
};

export default BonusCalculator;
