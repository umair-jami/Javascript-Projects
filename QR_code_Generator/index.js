async function generateQR() {
    let qrContainer = document.getElementById("qrcode");
    let text = document.getElementById("text").value;
    qrContainer.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
    
}
generateQR()