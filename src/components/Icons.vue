<template>
  <div
    class="tile border-gray-200 border-2 dark:border-gray-800 rounded-md shadow-inner cursor-pointer p-2"
    :style="styleObject"
    @click="iconClicked"
  >
    <div class="flex justify-between items-center mb-1">
      <h1 class="text-xs truncate mr-1">{{ icon.title }}</h1>
      <h1 class="font-extralight text-xs text-right">{{ icon.color }}</h1>
    </div>
    <img :src="imgSrc" :alt="icon.title" />
  </div>
</template>

<script>
export default {
  name: 'Icons',
  props: ['icon', 'type'],
  computed: {
    imgSrc() {
      const computedtype = this.type !== 'social' ? 'white' : 'black'
      const computedLink = this.icon.title.replace(/ /g, '-').toLowerCase()
      const computedtitle = this.icon.title.replace('-', ' ')
      const computedColor = this.icon.color.substring(1)
      return this.icon
        ? `https://img.shields.io/badge/${computedtitle}-${computedColor}?style=${this.type}&logo=${computedLink}&logoColor=${computedtype}`
        : ''
    },
    styleObject() {
      const hexToRgb = (hex) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result
          ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            }
          : null
      }
      const final = hexToRgb(this.icon.color)
      return {
        '--color': `rgba(${final.r}, ${final.g}, ${final.b}, 0.05)`,
        '--color-hover': `rgba(${final.r}, ${final.g}, ${final.b}, 0.15)`,
        'border-right': `1px solid ${this.icon.color}`,
        'border-bottom': `1px solid ${this.icon.color}`
      }
    }
  },
  methods: {
    iconClicked() {
      const copy = `<img alt="${this.icon.title}" src="${this.imgSrc}" />`
      navigator.clipboard.writeText(copy).then(() => {
        this.$emit('icon-clicked', this.icon)
      })
    }
  }
}
</script>

<style>
</style>