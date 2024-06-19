<script setup>
import   {toJSON }  from 'cssjson';
import { onMounted, onUpdated, watch } from 'vue';

const reponse = {
width: 800,
height: 800,
}
const css = ref("")

const width = ref("100px")
const height = ref("100px")
const mapWidth = ref(100)
const mapHeight = ref(100)
const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)
const mapRef = ref(null)
const success = ref(false)

function updateStyle() {

    const json = toJSON(css.value)
    console.log(css)
    console.log(json.attributes)
    if(json.attributes.width)
        width.value = json.attributes.width
    if(json.attributes.height)
        height.value = json.attributes.height
    successF()
}

function successF() {
    setTimeout(()=> {
        mapWidth.value = mapRef.value.offsetWidth
    mapHeight.value = mapRef.value.offsetHeight
    console.log(mapWidth.value)
    console.log(windowWidth.value)
    console.log(mapHeight.value)
    console.log(windowHeight.value)
    if (mapWidth.value > windowWidth.value / 2 &&  mapHeight.value > windowHeight.value / 2) 
        success.value = true
    else success.value = false

    },
    100)
}

watch(width, () => {
    mapWidth.value = mapRef.value.offsetWidth
})
watch(height, () => {
    mapHeight.value = mapRef.value.offsetHeight
})

const center = ref([40, 40]);
const projection = ref('EPSG:4326');
const zoom = ref(3);
const rotation = ref(0);

const format = inject('ol-format');
const geoJson = new format.GeoJSON();
 onMounted(() => { 
    console.log(mapRef.value)

 })
onUpdated(() => {
    mapWidth.value = mapRef.value.offsetWidth
    mapHeight.value = mapRef.value.offsetHeight
    console.log("updated")
    if (mapWidth.value > windowWidth.value / 2 &&  mapHeight.value > windowHeight.value / 2) 
        success.value = true
    else success.value = false

})

</script>

<template>
<div class="content">
    <div>Pour agrandir la carte il va falloir utiliser le <a href="https://web.iamvdo.me/css/langage/">langage CSS</a> qui permet de modifier le style des éléments sur la page</div>
    <br>
    <div>Dans notre cas nous voulons augmenter la taille de la carte. </div>
    <div>Trouvez les propriétés css qui permettent d'intervenir sur la taille d'une balise html et écrivez dans le bon format</div>

    <br>
    <div>Ecrivez votre réponse ici pour que la carte ait une taille au moins supérieur à la moitié de la taille de l'écran</div>
    <div>{{ css }}</div>
    <textarea v-model="css" placeholder="Ecrivez votre css" class="rep">
    </textarea>
    <br>
    <button @click="updateStyle">Valider votre réponse</button>
    <br>
    <br>
    <a v-if="success" href="/exo4" style="font-size: 50px;">Bravo lien vers exo 4</a>
    <br>
    <br>
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
.read-the-docs {
  color: #888;
}
.map {
    width: v-bind(width);
    height: v-bind(height);
}
.rep{
    margin-bottom: 10px;
    width : 30vw;
    height: 30vh;
}

.content {
    text-align: left;
}
input{
    width: 40vw;
    height: 100px;
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
