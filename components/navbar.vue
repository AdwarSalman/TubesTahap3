<template>
  <section class="navbar-area navbar-nine">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/">
              <img src="/images/logo.svg" alt="Logo" class="logo-circle" />
              <span>Adopt Center</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNine"
              aria-controls="navbarNine" aria-expanded="false" aria-label="Toggle navigation">
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
              <span class="toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse sub-menu-bar" id="navbarNine">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="page-scroll active" href="#hero-area">Home</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#adopt">Adopt</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#about">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#faq">FAQ</a>
                </li>
                <li class="nav-item">
                  <a class="page-scroll" href="#donate">Donate</a>
                </li>
              </ul>
            </div>

            <div class="navbar-btn d-none d-lg-inline-block">
               <a class="user-link" href="#user">
                <img src="/images/header/hero-image.jpg" alt="User" class="user-icon" />
                User
              </a>
            </div>
          </nav>
          </div>
      </div>
      </div>
    </section>
</template>

<script setup>
  // Biarkan ini kosong untuk sekarang
</script>

<style scoped>
  /* Ini adalah CSS dari style.css lama-mu, tapi HANYA bagian Navbar.
    'scoped' berarti style ini tidak akan bocor ke komponen lain.
  */
  
  .navbar-area.navbar-nine {
    padding: 10px 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9;
    background-color: transparent; /* <--- GANTI JADI TRANSPARAN */
  }

  .sticky {
    position: fixed !important;
    z-index:99 !important;
    -webkit-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    top: 0;
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px), (max-width: 767px) {
    .navbar-area.navbar-nine {
      padding: 10px 0;
    }
  }

  .navbar-area.navbar-nine .navbar-brand {
    margin: 0;
    display: flex; /* <--- TAMBAHKAN */
    align-items: center; /* <--- TAMBAHKAN */
    font-weight: 600; /* <--- TAMBAHKAN */
    color: var(--black); /* <--- TAMBAHKAN */
    font-size: 1.2rem; /* <--- TAMBAHKAN */
  }

  /* TAMBAHKAN CSS BARU INI */
  .navbar-area.navbar-nine .navbar-brand .logo-circle {
    height: 40px; /* Sesuaikan ukurannya */
    width: 40px; /* Sesuaikan ukurannya */
    margin-right: 10px;
    border-radius: 50%;
    background-color: #E0E0E0; /* Warna placeholder abu-abu */
  }

  .navbar-area.navbar-nine .navbar {
    position: relative;
    padding: 0;
  }
  .navbar-area.navbar-nine .navbar .navbar-toggler .toggler-icon {
    width: 30px;
    height: 2px;
    background-color: var(--black); /* <--- GANTI JADI HITAM */
    margin: 5px 0;
    display: block;
    position: relative;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
  }
  .navbar-area.navbar-nine .navbar .navbar-toggler.active .toggler-icon:nth-of-type(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 7px;
  }
  .navbar-area.navbar-nine .navbar .navbar-toggler.active .toggler-icon:nth-of-type(2) {
    opacity: 0;
  }
  .navbar-area.navbar-nine .navbar .navbar-toggler.active .toggler-icon:nth-of-type(3) {
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
    top: -7px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px), (max-width: 767px) {
    .navbar-area.navbar-nine .navbar .navbar-collapse {
      position: absolute;
      top: 116%;
      left: 0;
      width: 100%;
      background-color: var(--white); /* <--- GANTI JADI PUTIH */
      z-index: 8;
      padding: 10px 16px;
      border-radius: 8px; /* <--- (Opsional) Biar lebih bagus */
      box-shadow: var(--shadow-3); /* <--- (Opsional) Biar lebih bagus */
    }
  }

  @media only screen and (min-width: 1200px) and (max-width: 1399px), only screen and (min-width: 1400px) {
    .navbar-area.navbar-nine .navbar .navbar-nav {
      margin-left: 80px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px), (max-width: 767px) {
    .navbar-area.navbar-nine .navbar .navbar-nav {
      margin-right: 0;
    }
  }
  .navbar-area.navbar-nine .navbar .navbar-nav .nav-item {
    position: relative;
  }
  .navbar-area.navbar-nine .navbar .navbar-nav .nav-item a {
    display: flex;
    align-items: center;
    padding: 11px 16px;
    color: var(--black); /* <--- GANTI INI (dari --white) */
    text-transform: capitalize;
    position: relative;
    border-radius: 5px;
    font-weight: 500;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    margin: 14px 0;
    opacity: 1; /* <--- GANTI INI (dari 0.7) */
  }
  .navbar-area.navbar-nine .navbar .navbar-nav .nav-item a:hover {
    opacity: 0.7; /* <--- GANTI INI (dari 1) */
  }
  .navbar-area.navbar-nine .navbar .navbar-nav .nav-item a.active {
    opacity: 1;
    font-weight: 700; /* <--- TAMBAHKAN INI (biar bold) */
  }

  @media only screen and (min-width: 768px) and (max-width: 991px), (max-width: 767px) {
    .navbar-area.navbar-nine .navbar .navbar-nav .nav-item a {
      padding: 10px 0;
      display: block;
      border: 0;
      margin: 0;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px), (max-width: 767px) {
    .navbar-area.navbar-nine .navbar .navbar-nav .nav-item .sub-nav-toggler {
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px 14px;
      font-size: 16px;
      background: none;
      border: 0;
      color: var(--white);
    }
  }
  .navbar-area.navbar-nine .navbar .navbar-btn {
    margin-top: 6px;
  }

  /* TAMBAHKAN CSS BARU INI UNTUK LINK USER */
  .navbar-area.navbar-nine .navbar .user-link {
    display: flex;
    align-items: center;
    color: var(--black);
    font-weight: 500;
    text-decoration: none; /* <--- Pastikan tidak ada garis bawah */
  }
  .navbar-area.navbar-nine .navbar .user-link:hover {
    opacity: 0.7; /* <--- Efek hover seperti link nav lainnya */
  }
  .navbar-area.navbar-nine .navbar .user-icon {
    height: 24px;
    width: 24px;
    margin-right: 8px;
    /* Ganti background-color ini dengan icon Anda */
    background-color: #E0E0E0; 
    border-radius: 50%;
  }
</style>