  // Chave da API ExchangeRate-API
  const apiKey = 'e0b105bdeb078b40d11d4a12';

  // Referências aos elementos do DOM
  const amountInput = document.getElementById('amount');
  const fromSelect = document.getElementById('from');
  const toSelect = document.getElementById('to');
  const convertBtn = document.getElementById('convert-btn');
  const convertedAmountElement = document.getElementById('converted-amount');

  // Manipulador de evento do botão de conversão
  convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    // Chamada para a API ExchangeRate-API para obter a taxa de câmbio
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.conversion_rate;
        const convertedAmount = amount * exchangeRate;
        convertedAmountElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => {
        console.error('Ocorreu um erro ao obter a taxa de câmbio:', error);
      });
  });