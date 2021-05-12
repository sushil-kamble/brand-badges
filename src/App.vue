<template>
  <div
    class="container flex flex-col min-h-screen mx-auto px-1 md:px-4 xl:px-20"
  >
    <Navbar />
    <div class="mb-3 py-4 sticky top-0 bg-gray-50">
      <div class="flex justify-between items-center px-1 md:px-0">
        <input
          type="text"
          v-model="badge"
          placeholder="Search Badges"
          @keyup.enter="scrollUp"
          class="py-2 px-3 w-full mr-4 placeholder-gray-400 rounded border-2 border-gray-200 bg-gray-50 shadow-md outline-none focus:bg-white"
        />

        <select
          class="border-2 border-gray-200 w-1/2 md:w-1/6 py-2 px-3 h-11 text-gray-700 bg-gray-50 rounded shadow-md hover:bg-white"
          v-model="type"
        >
          <option value="plastic" selected>plastic</option>
          <option value="flat">flat</option>
          <option value="flat-square">flat-square</option>
          <option value="for-the-badge">for-the-badge</option>
          <option value="social">social</option>
        </select>
      </div>
      <div class="flex justify-between items-center mt-2">
        <h6 class="text-sm ml-1">Start typing and press enter to scroll up</h6>
        <h6
          class="text-sm mr-1 text-right text-green-900 font-semibold"
          v-if="iconObject"
        >
          Img tag copied to your clipboard - {{ iconObject.title }}
        </h6>
        <h6 class="text-sm mr-1 text-right" v-else>
          Click on tile to copy html/md src tag
        </h6>
      </div>
    </div>
    <h1>Total search results are {{ filterBadges.length }}</h1>
    <h1 class="mb-3 font-semibold text-sm">
      Just click on the tile to copy html/md src tag
    </h1>
    <div
      class="grid grid-cols-3 gap-2 md:grid-cols-6"
      style="min-height: 20vh"
      v-if="filterBadges.length > 0"
    >
      <div v-for="(icon, n) in filterBadges.slice(0, limit)" :key="n">
        <Icons :icon="icon" :type="type" @icon-clicked="iconClicked" />
      </div>
    </div>
    <div v-else style="min-height: 20vh">
      <h1 class="font-semibold text-xl">No results found</h1>
    </div>
    <div class="my-4">
      <button
        class="border-2 border-gray-600 bg-gray-200 rounded-lg px-3 py-2 text-gray-800 cursor-pointer hover:bg-gray-50 hover:text-gray-900 focus:border-opacity-0 w-full"
        @click="increaseLimit"
        v-if="filterBadges.length > limit"
      >
        More
      </button>
    </div>
    <Footer class="mt-auto border-t-4 border-gray-500 pt-4" />
  </div>
</template>

<script>
import iconSet from './data.json'
import Navbar from './components/Navbar.vue'
import Icons from './components/Icons.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Navbar,
    Icons,
    Footer
  },
  data() {
    return {
      icons: [],
      iconObject: null,
      badge: '',
      type: 'plastic',
      limit: 102,
      scroll: 0
    }
  },
  async mounted() {
    this.icons = await iconSet
  },
  watch: {
    type() {
      this.scrollUp()
    },
    badge() {
      this.limit = 102
    }
  },
  computed: {
    filterBadges() {
      if (this.badge.length > 0) {
        return this.icons.filter((badge) =>
          badge.title.toLowerCase().includes(this.badge)
        )
      }
      return this.icons
    }
  },
  methods: {
    increaseLimit() {
      this.limit = this.limit + 102
    },
    scrollUp() {
      this.limit = 102
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    iconClicked(icon) {
      this.iconObject = icon
    }
  }
}
</script>

<style>
</style>
