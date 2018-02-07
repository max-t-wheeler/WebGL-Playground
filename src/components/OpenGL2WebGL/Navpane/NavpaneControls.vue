<template>

  <div>
    <div v-for="parameter in animationParameters" :key="parameter.label" class="opengl2webgl-navpane-controls">
      <p> {{parameter.label }} </p>
      <input type="number" v-model="parameter.currentValue">
    </div>
  </div>

</template>

<script>

export default {
  props: ['animationParameters']
}

</script>

<style>

</style>
