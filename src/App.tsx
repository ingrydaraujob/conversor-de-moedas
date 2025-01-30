import { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(''); // Valor inserido pelo usuário
  const [convertedValue, setConvertedValue] = useState(''); // Valor convertido
  const [currency, setCurrency] = useState('USD'); // Moeda selecionada

  // Taxas de câmbio fixas
  const exchangeRates = {
    USD: 0.17, // Taxa de BRL para USD
    EUR: 0.16, // Taxa de BRL para EUR
    GBP: 0.16, // Taxa de BRL para GBP
    JPY: 25.42, // Taxa de BRL para JPY
  };

  // Conversão do valor
  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      setConvertedValue('Por favor, insira um valor válido.');
      return;
    }

    const rate = exchangeRates[currency];
    if (rate) {
      const result = (amount * rate).toFixed(2);
      setConvertedValue(`O valor convertido é ${result} ${currency}`);
    } else {
      setConvertedValue('Erro ao obter a taxa de câmbio.');
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Conversor de Moedas</h1>
        <p>Converta valores de Reais (BRL) para outras moedas.</p>
      </header>

      <main className="main">
        <div className="converter-card">
          <input
            type="number"
            placeholder="Digite o valor em BRL"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input"
            style={{width:"100%"}}
          />

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="select"
            style={{width:"100%"}}
          >
            <option value="USD">Dólar (USD)</option>
            <option value="EUR">Euro (EUR)</option>
            <option value="GBP">Libra (GBP)</option>
            <option value="JPY">Iene (JPY)</option>
          </select>

          <button onClick={handleConvert} className="button">
            Converter
          </button>

          {convertedValue && <p className="result">{convertedValue}</p>}
        </div>
      </main>

      <footer className="footer">
        <p>Desenvolvido com React</p>
      </footer>
    </div>
  );
}

export default App;
