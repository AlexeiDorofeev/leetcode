export function defangIPaddr(address) {
  return address.split(".").join("[.]");
}

const address = "1.1.1.1";

console.log(defangIPaddr(address));

export function defangIPaddrMy(address) {
  return address.replace(/\./gi, "[.]");
}
