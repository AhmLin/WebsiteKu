    // Ambil semua elemen slide
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0; // Indeks slide saat ini

    // Fungsi untuk menampilkan slide berikutnya
    function showNextSlide() {
      // Sembunyikan slide aktif saat ini
      slides[currentIndex].classList.remove('active');

      // Pindah ke slide berikutnya
      currentIndex = (currentIndex + 1) % slides.length;

      // Tampilkan slide berikutnya
      slides[currentIndex].classList.add('active');
    }

    // Jalankan slideshow setiap 3 detik
    setInterval(showNextSlide, 3000);