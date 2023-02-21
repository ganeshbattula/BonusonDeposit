import React from 'react';

const generateRandomDepositAmounts = () => {
  const bonusAmounts = [];

  for (let i = 0; i < 10; i++) {
    const depositAmount = Math.floor(Math.random() * 20) + 1;
    let bonus = 0;

    if (depositAmount >= 5 && depositAmount < 6) {
      // no bonus for deposits of 5 pounds
      bonus = 0;
    } else if (depositAmount >= 6 && depositAmount <= 10) {
      // 25% bonus for deposits between 6 and 10 pounds
      bonus = depositAmount * 0.25;
    } else if (depositAmount > 10) {
      // 25% to 50% bonus for deposits over 10 pounds
      const randomNum = Math.floor(Math.random() * 4);
      if (randomNum === 0) {
        bonus = depositAmount * 0.25;
      } else {
        bonus = depositAmount * 0.5;
      }
    }

    bonusAmounts.push({
      depositAmount: depositAmount,
      bonusAmount: bonus
    });
  }

  return bonusAmounts;
}

const App = () => {
  const bonusAmounts = generateRandomDepositAmounts();

  return (
    <div style={{ backgroundColor: 'white', padding: '1rem' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Random Deposit Amounts and Bonuses</h1>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {bonusAmounts.map((bonus, index) => (
          <li key={index} style={{ margin: '0.5rem 0', border: '1px solid #ccc', padding: '0.5rem' }}>
            <span style={{ fontWeight: 'bold' }}>Deposit Amount:</span> {bonus.depositAmount} pounds | <span style={{ fontWeight: 'bold' }}>Bonus Amount:</span> {bonus.bonusAmount} pounds
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
