function coursesPrices(isFundamentals, isAdvanced, isApplications, educationForm) {
  const jsFundamentalsPrice = 170;
  const jsAdvancedPrice = 180;
  const jsApplicationsPrice = 190;
  let totalPrice = 0;

  if (isFundamentals) {
    totalPrice += jsFundamentalsPrice;
  }

  if (isAdvanced) {
    totalPrice += jsAdvancedPrice;
  }
  if (isApplications) {
    totalPrice += jsApplicationsPrice;
  }

  if (isFundamentals && isAdvanced) {

    totalPrice -= jsAdvancedPrice * 0.1;
  }

  if (isFundamentals && isAdvanced && isApplications) {

    totalPrice -= totalPrice * 0.06;

  }

  if (educationForm === 'online') {
    totalPrice -= totalPrice * 0.06;
  }

  console.log(Math.round(totalPrice));
}

coursesPrices(true, false, false, "online");