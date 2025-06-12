---
theme: seriph
title: Me lo dijo chat
author: acph
info: |
  ## Guia para conda
  Me lo dijo Chat
exportFilename: melodijoChat
export:
  format: pdf
  dark: false
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code
class: text-center
transition: slide-left
mdc: true
hideInToc: true
background: backgrounds\escuchando_a20.png # https://cover.sli.dev
backgroundSize: contain
---

<div grid="~ cols-2 gap-70%" m="t--3" >
<!-- Logo IFC -->
<img border="rounded" src="./ifc.png" alt="">
<!-- Logo UBMI -->
<img border="rounded" src="./ubmi.png" alt="">
</div>

<br>

## ¡Me lo dijo Chat!

<br>

### Una presentación sobre el uso de Modelos Grandes de Lenguaje (LLM) en nuestra comunidad. 

<br>

<a href="https://github.com/UBMI-IFC" target="_blank">
   <carbon:logo-github/>
</a>
<a href="mailto:ubmi@ifc.unam.mx" target="_blank">  <!-- class="slidev-icon-btn"> -->
   <carbon:email/>
</a>
<a href="https://sites.google.com/ifc.unam.mx/ubmi-ifc" target="_blank">  <!-- class="slidev-icon-btn"> -->
   <carbon:network-enterprise/>
</a>
<a href="https://www.youtube.com/@unidaddebioinformaticaifc5165" target="_blank">  <!-- class="slidev-icon-btn"> -->
   <carbon:logo-youtube/>
</a>


<!--  [Tutoriales UBMI-IFC](https://ubmi-ifc.github.io/Tutoriales-IFC) -->

<style>
h2 {
  color: aquamarine;
  font-size: 60px;
  font-weight: bold;
}
</style>

---
layout: center
---

### Estudiantes de <span v-mark="{ color: 'powderblue', type: 'highlight' }">licenciatura y posgrado</span>, _et al._:

<br>

<v-clicks>

# "Me lo dijo Chat..."

# "Hice lo que me dijo Chat..."

## "... pero no funcionó" 

</v-clicks>

<div v-after style="text-align: center" >
<p style="font-size:80px; margin-top:50px">&#128514;</p>
</div>


---
layout: none
---

<div style="display: flex; justify-content: center;">
<svg width="600" height="165">
    <defs>
      <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="red" />
        <stop offset="16%" stop-color="orange" />
        <stop offset="33%" stop-color="yellow" />
        <stop offset="50%" stop-color="green" />
        <stop offset="66%" stop-color="blue" />
        <stop offset="83%" stop-color="indigo" />
        <stop offset="100%" stop-color="violet" />
      </linearGradient>
      <path id="curve" d="M 50 200 Q 300 50 550 200" fill="transparent" />
    </defs>
    <text>
      <textPath href="#curve" startOffset="50%" text-anchor="middle">
        Mi amigo Chat
      </textPath>
    </text>
  </svg>
</div>

<div style="display: flex; justify-content: center;">
<figure>
  <img src='./amigo.png' width=500>
  <figcaption>Creado con ChatGPT</figcaption>
</figure>  
</div>


---
layout: center
---

# Anécdota de la secundaria.


<div style="display: flex; justify-content: center;">
<figure>
    <img src='./cartoon.png' width=400>
    <figcaption>Creado con ChatGPT</figcaption>
</figure>
</div>


---
layout: center
---

# ¿La IA quitará empleos?


## "La IA (LLM) no te quitará tu trabajo, serán aquellas personas que saben usarla de forma eficiente."

<div style="text-align: right;">
<p>
Opinión informada
</p>
</div>


<!-- Richard Baldwin -->
<!-- https://en-m-wikipedia-org.translate.goog/wiki/Richard_Baldwin_(economist) -->

---
layout: section
---

# Es evidente que necesitamos hacer uso de esta tecnología.
## De forma racional y educada.



---
layout: two-cols-header
---


# La IA llegó para quedarse.

::left::

<div v-click v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  >
  
## Herramienta poderosa.

1. Apoyar para hacer investigación.

2. Automatizar tareas repetitivas y mejorar su eficiencia.

3. Ayudar en la toma de decisiones basada en datos.

4. Potenciar la personalización en servicios y productos.

5. Su uso está creciendo: [OpenAI dice](https://www.reuters.com/technology/artificial-intelligence/openai-says-chatgpts-weekly-users-have-grown-200-million-2024-08-29/)
  que ChatGPT tiene más de 200 millones de usuarios a la semana. 

</div>

::right::

<div v-click v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }"
  >

## Es un <span v-click="[3]" v-mark.circle.red>NEGOCIO</span> 

1. Las empresas tecnológicas buscan generar mejores productos.

2. Más eficientes, más útiles, más poderosos.

3. Muchas buscan tener el mejor producto.

<div style="display: flex; justify-content: center;">
<figure>
 <img src="./negocio.png" width=200px>
 <figcaption>Generado con Gemini</figcaption>
</figure>
</div>

</div>


---

# ChatGPT es un producto


<div class="info-cards-container">
<v-clicks>
  <div class="info-card">
    <div class="card-image">
      <img src="./icons/llm.png" alt="Description of image 1">
    </div>
    <div class="card-text">
      <h2>ChatGPT</h2>
      <p>Large Language Models</p>
    </div>
  </div>

  <div class="info-card">
    <div class="card-image">
      <img src="./icons/panuelos.png" alt="Description of image 2">
    </div>
    <div class="card-text">
      <h2>Kleenex</h2>
      <p>Pañuelos desechables</p>
    </div>
  </div>

  <div class="info-card">
    <div class="card-image">
      <img src="./icons/adhe.png" alt="Description of image 3">
    </div>
    <div class="card-text">
      <h2>Pritt</h2>
      <p>Lapiz adhesivo</p>
    </div>
  </div>
  
</v-clicks>  
</div>


---
layout: default
---

# Muchas empresas tecnológicas tienen sus propios modelos.

<div
  v-click
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 70, y: 15}"
  :leave="{ x: 80 }"
>
<figure>
  <img src='./icons/gemini.png' width=80>
  <figcaption style="font-size: small">Gemini/Gemma/Google</figcaption>
</figure>  
</div>


<div
  v-after
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 270, y: -60}"
  :leave="{ x: 80 }"
>
<figure>
  <img src='./icons/meta.png' width=80>
  <figcaption style="font-size: small">Llama/Meta</figcaption>
</figure>  
</div>


<div
  v-after
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 460, y: -150}"
  :leave="{ x: 80 }"
>
<figure>
  <img src='./icons/Qwen_2.5.jpg' width=140>
  <figcaption style="font-size: small">Qwen/Alibaba</figcaption>
</figure>  
</div>


<div
  v-after
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 650, y: -240}"
  :leave="{ x: 80 }"
>
<figure>
  <img src='./icons/phi.png' width=150>
  <figcaption style="font-size: small">Copilot/Phi/Microsoft</figcaption>
</figure>  
</div>


<div
  v-after
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 130, y: -150}"
  :leave="{ x: 80 }"
>
<figure>
  <img src='./icons/deepseek.webp' width=120>
  <figcaption style="font-size: small">Deepseek/Deepseek</figcaption>
</figure>  
</div>


<div
  v-after
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 330, y: -243}"
  :leave="{ x: 80 }"
>
<figure>
  <img src='./icons/chatGPT.webp' width=80>
  <figcaption style="font-size: small">ChatGPT/OpenAI</figcaption>
</figure>  
</div>


<div
  v-after
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 530, y: -330}"
  :leave="{ x: 80 }"
>
<figure>
  <img src='./icons/mistral.png' width=90>
  <figcaption style="font-size: small">Mistral/MistralAI</figcaption>
</figure>  
</div>



---
layout: center
---

# Muchos modelos tienen licencia de uso libre.
Se pueden usar de forma local y en combinación con muchas herramientas o programas diferentes.

Un ejemplo es Gemma3 de Google.

<div style="display: flex; justify-content: center;">
<img src='./icons/gemma3.png' width=400px>
</div>



---

# Los LLM tienen un increible potencial para actividades de moral dudosa.


<v-switch> 
  <template #1><img src="./art_head.png" width="800px"></img></template>
  <template #2><div style="display: flex; justify-content: center;">
    <img src="./art_rat.png" width="700px">
    </img>
    </div>
    </template>
  <template #3><div style="display: flex; justify-content: center;">
    <img src="./art_cell.png" width="680px">
    </img>
    </div>
    </template>
</v-switch>



---
layout: section
---

# Es evidente que necesitamos hacer uso de esta tecnología.
## De forma <span  v-mark.circle.red>racional y educada</span>.


---

# Esfuerzos académicos para proponer un uso adecuado de los LLM (IA).

<v-switch>
  <template #1>
    <div style="display: flex; justify-content: center;">
      <img src='./recommend_head.png'></img>
      </div>
  </template>
  <template #2>
    <div style="display: flex; justify-content: center;">
      <img src='./recommend_fig.png' width="700px"></img>
    </div>
  </template>
</v-switch>


---
layout: image-right
image: ./recunam.png
---

# La UNAM también.

En 2023 la UNAM insala un [Grupo de trabajo sobre IA generatiba](https://www.gaceta.unam.mx/instalan-grupo-de-trabajo-sobre-la-inteligencia-artificial/).

El mismo año se publica una [guía de recomendaciones](https://iagenedu.unam.mx/recomendaciones?fbclid=IwY2xjawK1FRVleHRuA2FlbQIxMQABHnK0PzgUh9ckNxB7kTUqJV1CNTGRcq02hjXn9uiHhB5k9Eep69f43ZGKdNZO_aem_sRDDfBl7rpMnP9_EcybTNw&sfnsn=scwspwa)
para su uso en educación. 


---

# LLM en el Instituto de Fisiología Celular.

<div class="card-container">
 <div class="card"
   v-click v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0}"
  :leave="{ x: 80 }"
>
      <div class="circle">
        <img src="./ifc.png" alt="Image 1">
      </div >
      <div class="card-content">
        <h3 >Taller Práctico. 2024.</h3 >
        <p>Uso ético de inteligencia Artificial para la Investigación. Principiante, intermedio y avanzado.
        <i>Alfredo Fernández</i>
        </p>
      </div >
    </div >


  <div class="card"
     v-click v-motion
  :initial="{ x: 80 }"
  :enter="{ x: 0}"
  :leave="{ x: 80 }"
>
      <div class="circle">
        <img src="./mensaje.png" alt="Image 1">
      </div >
      <div class="card-content">
        <h3 >Artículo publicado en Mensaje Bioquímico. 2024.</h3 >
        <p>ChatGPT: Un vistazo personal a esta inteligencia artificial. <i>Dr. Ruy Pérez Monfort</i></p>
      </div >
    </div >

  <div class="card"
     v-click v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0}"
  :leave="{ x: 80 }"
>
      <div class="circle">
        <img src="./ubmi.png" alt="Image 2">
      </div >
      <div class="card-content">
        <h3 >UBMI</h3 >
        <p>Tenemos interés en el uso adecuado y desarrollo de herramientas con LLM.</p>
      </div>
    </div>

</div >








---
layout: end
---

Gracias por su atención 

<figure>
<SlidevVideo v-after autoplay loop=true width=500>
  <!-- Anything that can go in an HTML video element. -->
  <source src="./Un_puma_antropomorfico_caricat.mp4" type="video/mp4" />
</SlidevVideo>
<figcaption>Generado con Veo2 (Google)</figcaption>
</figure>


