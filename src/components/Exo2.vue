<script setup>
import DOMPurify from 'dompurify';
import { watch } from 'vue';

const reponse = "<div id='map'></div>"
const html = ref("<div id='map'></div>")
const cleanRes = computed(() => {
    return DOMPurify.sanitize(html.value)
})

const resRef = ref(null)

const success = ref(false)
  
onUpdated (() => {
    success.value = false
    for (const child of resRef.value.children) {
        if(child instanceof HTMLElement
            && child.nodeName == 'DIV' 
            && child.id?.includes("map") ) {
            console.log("succes")
            success.value = true
        }
    }
})


const center = ref([40, 40]);
const projection = ref('EPSG:4326');
const zoom = ref(3);
const rotation = ref(0);

const format = inject('ol-format');
const geoJson = new format.GeoJSON();


watch (success, () => {

})

</script>

<template>
<div class="content">
    <div>Maintenant que vous avez compris ce qu'est le HTML</div>
    <br>
    <div>Je vais pouvoir vous dire qu'une carte s'affiche dans une div html ayant pour id "map"</div>

    <br>
    <div>Ecrivez donc cette div ci-dessous</div>
    <input v-model="html" class="rep" type="text">
    <br>
    <h4>Rendu de votre code html : </h4>
    <div ref="resRef" v-html="cleanRes"></div>
    <br>
    <br>
    <div class="success" v-if="success">
        Bravo la carte est apparue !!
        <br>
        <br>
    <div class="map" >
        <ol-map
  :loadTilesWhileAnimating="true"
  :loadTilesWhileInteracting="true"
  style="height: 100px"
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
    <br>
    <div class="effect">Mais ...<span> malheureusement la carte est toute petite &#128534</span></div>
    <a href="/tp-seconde/css">Pour agrandir la carte suivez ce lien</a>
    </div>
    </div>
 
  </template>

<style scoped>
.read-the-docs {
  color: #888;
}
.map {
    align-items: center;
    width: 100px;
    height: 100px;
}
.rep{
    margin-bottom: 10px;
}

.content {
    text-align: left;
}
input{
    width: 40vw;
    height: 30px;
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
