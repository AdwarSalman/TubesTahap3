<template>
  <header
    :class="[ 
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out bg-white/30 backdrop-blur-xl border-b border-white/20 shadow-sm',
      scrolledDown ? 'translate-y-0' : '-translate-y-full'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 ">
        <!-- Brand -->
        <a href="/" class="flex items-center space-x-2">
  <div class="flex-shrink-0 flex items-center justify-center">
    <img
      src="/images/logo.svg"
      alt="Logo"
      class="h-10 w-10 rounded-full bg-gray-200 object-contain"
    />
  </div>
  <span class="text-xl font-semibold text-gray-800 leading-none flex items-center">Adopt Center</span>
</a>

        <!-- Nav Links -->
        <nav class="hidden md:flex space-x-6">
          <a href="/" class="text-gray-900 hover:text-gray-800 transition">Home</a>
          <a href="#adopt" class="text-gray-900 hover:text-gray-800 transition">Adopt</a>
          <a href="#about" class="text-gray-900 hover:text-gray-800 transition">About Us</a>
          <a href="#faq" class="text-gray-900 hover:text-gray-800 transition">FAQ</a>
          <a href="#donate" class="text-gray-900 hover:text-gray-800 transition">Donate</a>
        </nav>

        <!-- User Icon -->
        <a href="/profile">
        <div class="hidden md:flex items-center space-x-2">
            <img
            src="/images/header/hero-image.jpg"
            alt="User"
            class="h-8 w-8 rounded-full bg-gray-300 object-cover"
            />
            <span class="text-gray-900 font-medium">User</span>
          </div>
        </a>

        <!-- Mobile Menu Button -->
        <button @click="mobileOpen = !mobileOpen" class="md:hidden text-gray-800 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-7 h-7"
          >
            <path
              v-if="!mobileOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-white/30 backdrop-blur-xl border-t border-white/20 shadow-md pb-3"
      >
        <nav class="flex flex-col px-4 py-3 space-y-2">
          <a href="#hero-area" class="text-gray-900 hover:text-gray-800 transition">Home</a>
          <a href="#adopt" class="text-gray-900 hover:text-gray-800 transition">Adopt</a>
          <a href="#about" class="text-gray-900 hover:text-gray-800 transition">About Us</a>
          <a href="#faq" class="text-gray-900 hover:text-gray-800 transition">FAQ</a>
          <a href="#donate" class="text-gray-900 hover:text-gray-800 transition">Donate</a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolledDown = ref(true)
const lastScrollY = ref(0)
const mobileOpen = ref(false)

const handleScroll = () => {
  const currentY = window.scrollY
  if (currentY > lastScrollY.value && currentY > 100) {
    // Scroll ke bawah → sembunyikan navbar
    scrolledDown.value = false
  } else {
    // Scroll ke atas → tampilkan navbar
    scrolledDown.value = true
  }
  lastScrollY.value = currentY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Animasi transisi muncul/hilang navbar & mobile menu */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
