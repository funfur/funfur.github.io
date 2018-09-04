<template lang="pug">
  div#google-map
    GmapMap.GmapMap(
      :zoom="15"
      :center="{lat:37.557196, lng:127.046406}"
      v-tooltip.bottom="{content: adr, delay: {show: 500, hide: 100}}"
    )
      GmapMarker(
        :clickable="false"
        :draggable="false"
        :position="{lat:37.557196, lng:127.046406}"
      )
</template>

<script>
import Vue from 'vue'
import {globalVar} from '@/globalVar'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_API, // -> .env
    libraries: 'places',
  },
})

export default {
  name: "GoogleMap",

  data() {
    return {
      center: { lat: globalVar.lat, lng: globalVar.lng },
      adr: globalVar.companyAddress
    }
  },
}
</script>

<style lang="scss">
@import '../../style/style.scss';

#google-map {

  .GmapMap {
    width: 100%;
    height: 50vh;
    margin: 0 auto;
    max-width: 960px;
    max-height: 400px;
    margin-top: $grid16x;

    .vue-map {
      border: 1px solid $texteee;
    }

    .gmnoprint,
    button {
      display: none;
    }
  }
}
</style>
