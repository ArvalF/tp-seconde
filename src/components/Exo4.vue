<script setup>

const json = computed(() => {
    const conf = {
    "zoom" : zoom.value,
    "center" :  [xcentre.value, ycentre.value],
    "projection" : "EPSG:4326"
    }
    return JSON.stringify(conf, undefined, 2)
})
const center = computed(() => {
    return [xcentre.value, ycentre.value]
})
const projection = ref('EPSG:4326');
const zoom = ref(3);
const rotation = ref(0);

const format = inject('ol-format');
const geoJson = new format.GeoJSON();

const xcentre = ref(40)
const ycentre = ref(40)

const success = computed(() => {
    if (xcentre.value > 2.265587 &&
        xcentre.value < 2.410126 &&
        ycentre.value < 48.897001 &&
        ycentre.value > 48.820202 &&
        zoom.value >= 10 && zoom.value <= 13)
        return true
    else return false
})
</script>

<template>
<div class="content">
    <div class="left-col">
    <div>Il faut maintenant configurer cette carte pour qu'elle soit centrée sur paris avec un niveau de zoom permettant de voir toute la ville</div>
    <br>
    <div>dans le code la configuration prend cette forme :</div>
    <pre ref="json"> {{ json }}</pre>
    <br><br>
    <div>
        <div>X centre <span><input v-model="xcentre" type="text"></span></div>
        <div>Y centre <span><input v-model="ycentre" type="text"></span></div>
        <div>niveau de zoom <span><input v-model="zoom" type="text"></span></div>
    </div>
    <a v-if="success" href="/success">BRAVO C'EST FINI</a>
</div>
    <div class="map" ref="mapRef">
        <ol-map
          :loadTilesWhileAnimating="true"
          :loadTilesWhileInteracting="true"
          class="map"
        >
          <ol-view
            ref="view"
            :center="center"
            :rotation="rotation"
            :zoom="zoom"
            :projection="projection"
          />

          <ol-tile-layer>
            <ol-source-osm />
          </ol-tile-layer>
        </ol-map>
    </div>
    </div>
 
  </template>

<style scoped>
.left-col {
    display: flex;
    flex-direction:column ;
}
.read-the-docs {
  color: #888;
}
.map {
    width: 60vw;
    height: 60vh;
}
.rep{
    margin-bottom: 10px;
    width : 30vw;
    height: 30vh;
}

.content {
    text-align: left;
    display: flex
}
.error {
    color : red;
}
.link {
    margin-top: 30px;
    text-align: center;
    font-size: 60px;
}

</style>
