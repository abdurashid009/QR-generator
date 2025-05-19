const input = document.getElementById("text-input");
const qrContainer = document.getElementById("qrcode");
let qrCode = new QRCode(qrContainer, {
  text: "",
  width: 200,
  height: 200,
});

input.addEventListener("input", () => {
  const value = input.value;
  qrContainer.innerHTML = "";
  if (value.trim() !== "") {
    qrCode = new QRCode(qrContainer, {
      text: value,
      width: 200,
      height: 200,
    });
  }
});
