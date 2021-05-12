<template>
  <footer class="divide-y-2 divide-gray-400 divide-solid">
    <h3 class="text-center font-semibold text-md md:text-lg mb-3">
      Hey there, I am Sushil & this is the small project created by me to make
      your github profiles & website look Awesome.
    </h3>
    <div class="py-3 px-2 text-center bg-gray-200 shadow-lg">
      <h2 class="font-light text-sm">Copy this link to get your badge</h2>
      <h2 class="font-mono">{{ format }}</h2>
    </div>
    <div class="py-3 flex justify-center">
      <h3 v-if="!imgSrc" class="font-mono">
        <span class="bg-gray-300 px-3">LABEL</span>
        <span class="bg-gray-500 text-white px-3">BADGE</span>
      </h3>
      <img :src="imgSrc" :alt="label" class="h-14" v-else />
    </div>

    <div class="py-3 px-2 bg-gray-200 shadow-lg">
      <h2 class="text-md font-semibold mb-2">
        Here is a simple logo generator, Start by entering label and color
      </h2>
      <ul>
        <li class="md:flex md:items-center">
          <strong class="w-32">LABEL - </strong>
          <input
            type="text"
            v-model="label"
            placeholder="Label for badge"
            class="footer-input"
          />
          <span class="text-sm"> - Label of your badge (Can be any) </span>
        </li>
        <li class="md:flex md:items-center my-2">
          <strong class="w-32">COLOR - </strong>
          <input
            type="text"
            class="footer-input"
            v-model="color"
            placeholder="Background Color"
          />
          <span class="text-sm">
            - hex without '#' eg 512BD4, red | rgb | rgba
          </span>
        </li>
        <li class="md:flex md:items-center my-2">
          <strong class="w-32">TYPE - </strong>
          <input
            type="text"
            class="footer-input"
            placeholder="Type of badge"
            v-model="type"
          />
          <span class="text-sm">
            - plastic || flat || flat-square || for-the-badge || social
          </span>
        </li>
        <li class="md:flex md:items-center my-2">
          <strong class="w-32">LOGO - </strong>
          <input
            type="text"
            class="footer-input"
            v-model="logo"
            placeholder="Enter brand name"
          />
          <span class="text-sm">
            - type any brand name,
            <a
              class="underline"
              href="https://simpleicons.org/"
              rel="noreferrer"
              target="_blank"
              >available brands
            </a>
          </span>
        </li>
        <li class="md:flex md:items-center my-2">
          <strong class="w-32">LOGO COLOR - </strong>
          <input
            type="text"
            class="footer-input"
            placeholder="Logo color"
            v-model="l_color"
          />
          <span class="text-sm">
            - hex without '#' eg 512BD4, red | rgb | rgba
          </span>
        </li>
        <li class="md:flex md:items-center my-2">
          <strong class="w-32">LOGO WIDTH - </strong>
          <input
            type="text"
            class="footer-input"
            placeholder="Logo width"
            v-model="l_width"
          />
          <span class="text-sm"> - number eg '30'</span>
        </li>
        <li class="md:flex md:items-center my-2">
          <strong class="w-32">LABEL BG - </strong>
          <input
            type="text"
            class="footer-input"
            placeholder="Label Background"
            v-model="lab_color"
          />
          <span class="text-sm">
            - hex without '#' eg 512BD4, red | rgb | rgba
          </span>
        </li>
      </ul>
    </div>
    <div class="py-3">
      <h3 class="font-semibold text-md md:text-lg">
        Limitations & their solutions
      </h3>
      <ul class="list-disc list-inside">
        <li>
          Note that some icons might not be visible, So you can play with LOGO
          part try to make it in slug form (Almost 95% are visible)
        </li>
        <li>
          LOGO COLOR and LABEL COLOR if not visible properly then change them
        </li>
      </ul>
    </div>
    <div class="py-3">
      <h3 class="font-semibold text-md md:text-lg">References</h3>
      <ul>
        <li>
          <a
            class="underline"
            href="https://simpleicons.org/"
            rel="noreferrer"
            target="_blank"
          >
            Simple Icon
          </a>
        </li>
        <li>
          <a
            class="underline"
            href="https://shields.io/"
            rel="noreferrer"
            target="_blank"
          >
            Shields IO
          </a>
        </li>
      </ul>
    </div>
    <div class="py-3 mb-3 flex justify-between items-center">
      <a href="">
        <button class="btn bg-gray-600 text-white">Code</button>
      </a>
      <a
        class="text-center text-gray-600 font-mono uppercase font-semibold text-lg"
        href="https://sushil-kamble.netlify.app/"
        rel="noreferrer"
        target="_blank"
        >Sushil Kamble
      </a>
      <a
        href="https://github.com/sushil-kamble"
        rel="noreferrer"
        target="_blank"
      >
        <button class="btn bg-gray-600 text-white">Github</button>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      label: '',
      color: '',
      type: '',
      logo: '',
      l_color: '',
      l_width: '',
      lab_color: ''
    }
  },
  computed: {
    format() {
      const label = this.label.length > 0 ? this.label : '#'
      const color = this.color.length > 0 ? this.color : '#'
      const type = this.type.length > 0 ? this.type : '#'
      const logo = this.logo.length > 0 ? this.logo : '#'
      const l_color = this.l_color.length > 0 ? this.l_color : '#'
      const l_width = this.l_width.length > 0 ? this.l_width : '#'
      const lab_color = this.lab_color.length > 0 ? this.lab_color : '#'

      return `https://img.shields.io/badge/${label}-${color}?style=${type}&logo=${logo}&logoColor=${l_color}&logoWidth=${l_width}&labelColor=${lab_color}`
    },
    imgSrc() {
      if (!this.label || !this.color) return ''
      return `https://img.shields.io/badge/${this.label}-${this.color}?style=${this.type}&logo=${this.logo}&logoColor=${this.l_color}&logoWidth=${this.l_width}&labelColor=${this.lab_color}`
    }
  }
}
</script>