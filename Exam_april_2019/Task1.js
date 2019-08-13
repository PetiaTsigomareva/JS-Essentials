function vatCalculator(priceWhitVat, vatRate) {
  let priceWithoutVat = priceWhitVat / (1+vatRate / 100);
  console.log(priceWithoutVat.toFixed(2));

}

vatCalculator(120, 20);
vatCalculator(220, 10);