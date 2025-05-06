let keranjang = [];
let hargaProduk = {
  'Gamis Elegan': 250000,
  'Hijab Instan': 80000,
  'Tunik Modis': 150000,
  'Pashmina Ceruty': 60000
};

function tambahKeKeranjang(namaProduk) {
  keranjang.push(namaProduk);
  tampilkanKeranjang();
}

function tampilkanKeranjang() {
  const daftarKeranjang = document.getElementById("daftarKeranjang");
  const totalHargaElem = document.getElementById("totalHarga");
  daftarKeranjang.innerHTML = "";

  let total = 0;
  keranjang.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = '${index + 1}. ${item}';
    daftarKeranjang.appendChild(li);
    total += hargaProduk[item] || 0;
  });

  totalHargaElem.textContent = 'Total: Rp${total.toLocaleString("id-ID")}';
}

function kosongkanKeranjang() {
  keranjang = [];
  tampilkanKeranjang();
}