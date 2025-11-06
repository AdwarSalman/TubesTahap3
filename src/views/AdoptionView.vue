<template>
  <main class="max-w-7xl mx-auto p-4 sm:p-8 mt-16 bg-[#f7f1e8] min-h-screen">
    <h1 class="text-3xl font-bold text-primary-text mb-6">Pusat Adopsi Kucing</h1>

    <!-- 🔍 Search + Filter + Favorites -->
    <div
      class="bg-white p-2 sm:p-4 rounded-xl shadow-lg mb-8 flex flex-wrap gap-2 sm:gap-4 items-center justify-between relative"
    >
      <!-- Mobile Search Toggle -->
      <button
        @click="toggleSearch"
        class="md:hidden p-1 text-gray-600 hover:text-orange-500 transition flex-shrink-0"
      >
        <svg
          v-if="!showSearch"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Search Bar -->
      <transition name="fade-slide" mode="out-in">
        <div
          v-show="!isMobile || showSearch"
          key="search"
          class="flex-grow transition-all duration-500 ease-in-out overflow-hidden"
        >
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari nama atau deskripsi kucing..."
            class="w-full p-2 sm:p-3 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-light-orange focus:border-light-orange transition duration-300"
            ref="searchInput"
          />
        </div>
      </transition>

      <!-- Filter -->
      <transition name="fade" mode="out-in">
        <section v-if="!isMobile || (!showSearch && !isTransitioning)" class="flex gap-2">
          <select
            v-model="selectedBreed"
            class="p-2 text-xs sm:text-sm bg-light-blue rounded-md border border-gray-200 hover:border-light-orange cursor-pointer transition-all"
          >
            <option v-for="breed in breeds" :key="breed" :value="breed">{{ breed }}</option>
          </select>

          <select
            v-model="selectedLocation"
            class="p-2 text-xs sm:text-sm bg-light-blue rounded-md border border-gray-200 hover:border-light-orange cursor-pointer transition-all"
          >
            <option v-for="location in locations" :key="location" :value="location">{{ location }}</option>
          </select>
        </section>
      </transition>

      <!-- ❤️ Favorites Button -->
      <div class="relative favorites-container flex-shrink-0 ml-auto">
        <button
          @click.stop="showFavoritesTooltip = !showFavoritesTooltip"
          class="p-2 sm:p-3 bg-light-blue rounded-md border border-transparent hover:border-light-orange flex items-center justify-center text-orange-500 relative"
          :class="{'bg-orange-200': showFavoritesTooltip}"
          title="Lihat Kucing Favorit"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            ></path>
          </svg>

          <span
            v-if="favorites.length > 0"
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center"
          >
            {{ favorites.length }}
          </span>
        </button>

        <!-- Tooltip Favorite List -->
        <div
          v-if="showFavoritesTooltip"
          class="absolute right-0 mt-2 w-72 max-h-80 overflow-y-auto bg-white rounded-lg shadow-xl p-4 z-20 border border-gray-100"
        >
          <h3 class="font-bold text-primary-text mb-3 border-b pb-2">Kucing Favorit Anda:</h3>

          <div v-if="favorites.length > 0" class="space-y-3">
            <div
              v-for="cat in favorites"
              :key="'fav-' + cat.id"
              class="flex items-center space-x-3 hover:bg-gray-50 p-1 rounded-lg"
            >
              <img
                :src="cat.imageUrl"
                class="w-10 h-10 object-cover rounded-md border-2 border-dark-bg"
                :alt="cat.name"
              />
              <div class="flex-grow">
                <p class="text-primary-text font-semibold truncate">{{ cat.name }}</p>
                <p class="text-xs text-gray-500">{{ cat.breed }}</p>
              </div>
              <button
                @click="toggleFavorite(cat)"
                class="text-red-500 hover:text-red-700 transition duration-150"
                title="Hapus dari Favorit"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <p v-else class="text-gray-500 text-sm italic py-2">Belum ada kucing favorit.</p>
        </div>
      </div>
    </div>

    <!-- 🐱 Cat Cards -->
    <div v-if="filteredCats.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="cat in filteredCats"
        :key="cat.id"
        class="bg-white rounded-xl shadow-xl overflow-hidden transform transition duration-300 cat-card-hover"
      >
        <div class="relative h-48 w-full bg-dark-bg">
          <img :src="cat.imageUrl" :alt="cat.name" class="object-cover w-full h-full" />
          <button
            @click="toggleFavorite(cat)"
            class="absolute top-3 right-3 p-2 rounded-full bg-white/70 hover:bg-white shadow-md"
            title="Tambahkan ke Favorit"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 transition-colors"
              :class="cat.isFavorite ? 'text-red-500' : 'text-gray-400'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div class="p-5">
          <h2 class="text-2xl font-bold text-primary-text mb-2">{{ cat.name }}</h2>
          <div class="text-sm text-gray-500 space-y-1 mb-4">
            <p>🕓 {{ cat.age }}</p>
            <p>🐱 {{ cat.breed }}</p>
            <p>📍 {{ cat.location }}</p>
          </div>
          <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ cat.description }}</p>
          <button
            class="w-full text-primary-text font-semibold py-2 rounded-lg transition duration-150 shadow-md bg-[#f7f1e8] hover:bg-[#6CD4FF] mobile-blue-btn"
          >
            Adopsi Sekarang
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center p-10 bg-white rounded-xl shadow-lg text-gray-500">
      Tidak ada kucing yang cocok dengan kriteria pencarian Anda.
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue"

const showSearch = ref(false)
const isTransitioning = ref(false)
const searchInput = ref(null)
const isMobile = ref(false)

const handleResize = () => (isMobile.value = window.innerWidth < 768)
onMounted(() => {
  handleResize()
  window.addEventListener("resize", handleResize)
})
onUnmounted(() => window.removeEventListener("resize", handleResize))

const toggleSearch = () => {
  if (!isMobile.value) return
  isTransitioning.value = true
  if (!showSearch.value) {
    setTimeout(() => {
      showSearch.value = true
      setTimeout(() => {
        searchInput.value?.focus()
        isTransitioning.value = false
      }, 350)
    }, 250)
  } else {
    showSearch.value = false
    setTimeout(() => (isTransitioning.value = false), 350)
  }
}

const searchQuery = ref("")
const selectedBreed = ref("Semua Ras")
const selectedLocation = ref("Semua Lokasi")
const showFavoritesTooltip = ref(false)

const catList = ref([
  { id: 1, name: "MILO", age: "7 Bulan", breed: "Persian", location: "Bandung", description: "Aktif dan ramah.", imageUrl: "https://placehold.co/600x400/FFB6C1/1F2937?text=MILO", isFavorite: false },
  { id: 2, name: "CIMOL", age: "1 Tahun", breed: "Persian", location: "Cimahi", description: "Tenang dan penyayang.", imageUrl: "https://placehold.co/600x400/B0E0E6/1F2937?text=CIMOL", isFavorite: false },
  { id: 3, name: "CICA", age: "1.5 Tahun", breed: "Shorthair", location: "Jakarta Utara", description: "Lucu dan sehat.", imageUrl: "https://placehold.co/600x400/AFEEEE/1F2937?text=CICA", isFavorite: false },
])

const breeds = ["Semua Ras", "Persian", "Shorthair"]
const locations = ["Semua Lokasi", "Bandung", "Cimahi", "Jakarta Utara"]

const filteredCats = computed(() =>
  catList.value.filter(
    (cat) =>
      (cat.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        cat.description.toLowerCase().includes(searchQuery.value.toLowerCase())) &&
      (selectedBreed.value === "Semua Ras" || cat.breed === selectedBreed.value) &&
      (selectedLocation.value === "Semua Lokasi" || cat.location === selectedLocation.value)
  )
)

const favorites = ref([])

const toggleFavorite = (cat) => {
  cat.isFavorite = !cat.isFavorite
  if (cat.isFavorite) {
    if (!favorites.value.find((f) => f.id === cat.id)) favorites.value.push(cat)
  } else {
    favorites.value = favorites.value.filter((f) => f.id !== cat.id)
  }
}

const closeTooltipOnClickOutside = (e) => {
  if (showFavoritesTooltip.value && !e.target.closest(".favorites-container")) {
    showFavoritesTooltip.value = false
  }
}

watch(showFavoritesTooltip, (val) => {
  if (val) document.addEventListener("click", closeTooltipOnClickOutside)
  else document.removeEventListener("click", closeTooltipOnClickOutside)
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.35s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cat-card-hover:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@media (max-width: 767px) {
  .mobile-blue-btn {
    background-color: #6cd4ff !important;
    color: white !important;
  }
  .mobile-blue-btn:hover {
    background-color: #5ac8fa !important;
  }
}
</style>
