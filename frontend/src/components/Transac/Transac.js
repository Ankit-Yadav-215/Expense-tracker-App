import React from 'react';
import History from '../../History/History'; // Adjust the import path according to your project structure
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

const HistoryDisplayStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 20px;
    }
`;
function TransactionDisplay() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()
  return (
    <HistoryDisplayStyled>
      <h1 style={{ textAlign: 'center', width: '100%' }}>   Transaction History  </h1>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
    </HistoryDisplayStyled>
  );
}

export default TransactionDisplay;