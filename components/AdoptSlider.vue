<template>
  <section id="adopt" class="adopt-slider-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">

          <div class="slider-wrapper">
            
            <div class="my-cat-slider">

              <div class="slider-item">
                <div class="slide-content">
                  <img src="/images/header/Cat 9.jpg" alt="Miawi">
                  <div class="caption">2 TAHUN<br><strong>Miawi</strong></div>
                </div>
              </div>

              <div class="slider-item">
                <div class="slide-content">
                  <img src="/images/header/Cat 9.jpg" alt="Kucing 2">
                  <div class="caption">1 TAHUN<br><strong>Bleki</strong></div>
                </div>
              </div>

              <div class="slider-item">
                 <div class="slide-content">
                   <img src="/images/header/Cat 9.jpg" alt="Kucing 3">
                   <div class="caption">3 TAHUN<br><strong>Oren</strong></div>
                 </div>
              </div>

              <div class="slider-item">
                <div class="slide-content">
                  <img src="/images/header/Cat 9.jpg" alt="Kucing 4">
                  <div class="caption">1.5 TAHUN<br><strong>Pompom</strong></div>
                </div>
              </div>

              <div class="slider-item">
                 <div class="slide-content">
                   <img src="/images/header/Cat 9.jpg" alt="Kucing 5">
                   <div class="caption">2 TAHUN<br><strong>Putih</strong></div>
                 </div>
              </div>

            </div> 
            
          </div> 
          
          <div class="slider-bottom-controls">
              <button class="prev"><i class="lni lni-chevron-left"></i></button>
              <h2 class="adopt-title">ADOPT UR KITTEN HERE</h2>
              <button class="next"><i class="lni lni-chevron-right"></i></button>
          </div>
          
          <img src="/images/header/cat-head.jpg" class="cat-icon" alt="Cat Icon"> 

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof tns === 'function') {
    var slider = tns({
      container: '.my-cat-slider',
      items: 1, 
      slideBy: 'page', // Geser per halaman (bukan per item)
      mouseDrag: true,
      gutter: 20, // Tambah jarak antar slide
      nav: false, // Matikan dots (Tidak ada di gambar yang kamu kirim)
      controls: true, // Pastikan kontrol aktif
      loop: true, // Agar bisa muter terus
      
      // Arahkan ke tombol kustom baru kita
      prevButton: ".slider-bottom-controls .prev", 
      nextButton: ".slider-bottom-controls .next",
      
      center: true, // Pastikan slide aktif di tengah
      autoplay: false, // Matikan autoplay jika tidak dibutuhkan
      responsive: {
        768: {
          items: 3, // Tampilkan 3 slide di tablet
          gutter: 30 // Jarak antar slide di tablet
        },
        1024: {
          items: 5, // Tampilkan 5 slide di desktop
          gutter: 40 // Jarak antar slide di desktop
        }
      }
    });
  }
})
</script>

<style scoped>
/* BACKGROUND KREM */
.adopt-slider-area {
  padding: 80px 0;
  text-align: center;
  overflow: hidden; 
  background-color: #F8F5EC; /* Warna krem */
}

/* CONTAINER */
.adopt-slider-area .container {
  padding: 0 15px; /* Sedikit padding di samping */
}

/* SLIDER ITEM (CARD) */
.my-cat-slider .slider-item {
  box-sizing: border-box;
  transform: scale(0.9); /* Sedikit dikecilkan */
  opacity: 0.7; /* Sedikit transparan */
  transition: all 0.3s ease-in-out;
  padding: 0 10px; /* Jarak samping antar item */
}

/* SLIDE AKTIF (YANG DI TENGAH) */
.my-cat-slider .tns-slide-active {
  transform: scale(1); /* Ukuran normal */
  opacity: 1; /* Penuh */
  z-index: 10;
}

.slide-content {
  position: relative;
  overflow: hidden;
  border-radius: 20px; /* Sudut membulat */
  box-shadow: 0 10px 20px rgba(0,0,0,0.15); /* Bayangan */
  background-color: white; /* Background putih untuk card */
  padding-bottom: 70%; /* Rasio aspek untuk gambar */
}

.slide-content img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Pastikan gambar mengisi kotak */
  border-radius: 20px;
}

.slide-content .caption {
  position: absolute;
  bottom: 0; /* Posisikan caption di paling bawah */
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  padding: 10px 0;
  background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)); /* Gradien transparan */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 0.9rem;
  line-height: 1.2;
}

.slide-content .caption strong {
  font-size: 1.8rem; /* Ukuran nama kucing */
  font-weight: 700;
  display: block;
}

/* KONTROL PANAH DAN JUDUL (BARU) */
.slider-bottom-controls {
  display: flex;
  justify-content: center; /* Panah dan judul di tengah */
  align-items: center;
  margin-top: 40px; /* Jarak dari slider */
  gap: 30px; /* Jarak antara elemen */
}

.adopt-title {
  font-size: 2.5rem; /* 40px */
  font-weight: 700;
  text-transform: uppercase;
  color: var(--black);
  margin: 0; /* Hapus margin default */
  line-height: 1;
}

.slider-bottom-controls button {
  background-color: transparent; /* Transparan */
  color: var(--black); /* Warna hitam */
  border: 1px solid var(--black); /* Border hitam */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-bottom-controls button:hover {
  background-color: var(--black);
  color: white;
}

/* ICON KEPALA KUCING */
.cat-icon {
  margin-top: 20px;
  width: 80px;
  opacity: 0.5;
  filter: grayscale(100%); /* Bikin abu-abu */
}

/* Responsif untuk layar kecil (mobile) */
@media (max-width: 767px) {
  .adopt-title {
    font-size: 1.8rem;
  }
  .slider-bottom-controls {
    flex-direction: column; /* Tombol dan judul jadi vertikal */
    gap: 15px;
  }
}
</style>