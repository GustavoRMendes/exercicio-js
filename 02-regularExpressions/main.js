function PhoneNumber(phoneNumberString) {
  // Validando que o telefone só tenha números
  const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");

  // Validando o telefone com o +number
  this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];

  // Validando o ddd do telefone
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];

  // Validando o número do telefone
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new PhoneNumber("+55 (22) 9 9876-5432"));
console.log(new PhoneNumber("+1 (555) a555-999-8888"));
