document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const result = document.getElementById('result');

    const rates = {
        USD: { EUR: 0.85, GBP: 0.75, JPY: 110.00, AUD: 1.35, INR: 74.00 },
        EUR: { USD: 1.18, GBP: 0.88, JPY: 130.00, AUD: 1.60, INR: 87.00 },
        GBP: { USD: 1.33, EUR: 1.14, JPY: 150.00, AUD: 1.80, INR: 100.00 },
        JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0067, AUD: 0.012, INR: 0.67 },
        AUD: { USD: 0.74, EUR: 0.63, GBP: 0.56, JPY: 80.00, INR: 55.00 },
        INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, JPY: 1.49, AUD: 0.018 }
    };

    if (fromCurrency === toCurrency) {
        result.innerText = `Converted Amount: ${amount}`;
    } else {
        const convertedAmount = (amount * rates[fromCurrency][toCurrency]).toFixed(2);
        result.innerText = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    }
});
