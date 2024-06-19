<script setup>
import DOMPurify from 'dompurify';
import { compile, onUpdated, watch } from 'vue';

const html = ref("Votre réponse")
const cleanRes = computed(() => {
    return DOMPurify.sanitize(html.value)
})

const resRef = ref(null)

const success = ref(false)
  
onUpdated (() => {
    for (const child of resRef.value.children) {
        if(child instanceof HTMLElement
            && child.nodeName == 'A' 
            && child.innerText == 'Exercice suivant'
            && child.getAttribute("href") == "/exo2" ) {
            success.value = true
        }
    }
})

</script>

<template>
<div class="content">
    <div>Comme vous le savez, on est dans un institut de géographie</div>
    <br>
    <div>Alors nous allons essayer de nous mettre dans la peau d'un développeur et afficher une carte</div>
    <br>
    <br>
    <br>
    <div>Mais avant cela il vous faut quelques informations sur la construction d'une page web</div>
    <br>
    <div>
        <a href="https://web.iamvdo.me/html/langage/">Voici un lien vers le langage HTML</a> qui permet de coder les pages du web
    </div>
    <br>
    <br>
    <br>
    <br>
    <div>Pour avancer dans l'exercice, vous devrez faire apparaitre le lien vers la page suivante.</div>
    <br>
    <div>Pour cela : tapez dans la zone ci-dessous le code de la balise html qui permet :
        <br>

        - d'afficher un lien
        <br>
        - le nom du lien devra être "Exercice suivant"
        <br>
        - <a href="https://fr.wikipedia.org/wiki/Uniform_Resource_Locator#Voir_aussi">L'URL</a> sera relative, et inspirée de l'URL de la page sur laquelle vous êtes actuellement 
    </div>

    <br>
    <br>
  
    <input v-model="html" class="rep" type="text">
    <br>
    <h4>Rendu de votre code html : </h4>
    <div ref="resRef" v-html="cleanRes"></div>
    <br>
    <br>
    <a class="link" v-if="success" href="/vraiexo2">Bravo voici le vrai lien pour la partie 2</a>
    </div>
  

    <!-- <div class="error" v-if="!response && submitted">Mauvaise réponse</div> -->
    <!-- <div
    ref="link"
        class="link"
        v-if="submitted"
    v-html="html"></div> -->


  <!-- <div class="map">
    <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: inherit; width: inherit;"
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
  </div> -->
 
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
