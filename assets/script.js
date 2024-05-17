// Mendapatkan referensi elemen <main> dengan id "blog"
var blogMain = document.getElementById("blog");

// Fungsi untuk menampilkan blog utama dan menyembunyikan blog "Activement" dan portfolio
function showBlog() {
  blogMain.style.display = "block";
  ActivMain.style.display = "none";
  portoMain.style.display = "none";
}

// Mendapatkan referensi elemen <main> dengan id "Activ"
var ActivMain = document.getElementById("Activ");

// Fungsi untuk menampilkan blog "Activement" dan menyembunyikan blog utama dan portfolio
function showActiv() {
  ActivMain.style.display = "block";
  blogMain.style.display = "none";
  portoMain.style.display = "none";
}

// Mendapatkan referensi elemen <main> dengan id "Porto"
var portoMain = document.getElementById("Porto");

// Fungsi untuk menampilkan portfolio dan menyembunyikan blog dan Activement
function showPorto() {
  portoMain.style.display = "block";
  blogMain.style.display = "none";
  ActivMain.style.display = "none";
}

// Menyembunyikan blog "Activement" dan portfolio saat halaman dimuat
ActivMain.style.display = "none";
portoMain.style.display = "none";
