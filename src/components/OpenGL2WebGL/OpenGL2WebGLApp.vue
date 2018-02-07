<template>
  <div id='opengl2webgl-app'>
    <b-container fluid>
      <b-row>
        <b-col md="2" sm="3">
          <h2 id="opengl2webgl-navpane-title">Animations</h2>
          <opengl2webgl-navpane id="opengl2webgl-navpane"/>
        </b-col>
        <b-col md="10" sm="9" id='opengl2webgl-display'>
          <canvas id='opengl2webgl-canvas'></canvas>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navpane from './Navpane/Navpane';

export default {
  props: ['display'],
  name: 'OpenGL2WebGLApp',
  components: {
    'opengl2webgl-navpane': Navpane
  }
}
</script>

<style>

body {
  margin: 0;
}

#opengl2webgl-navpane-title {
  text-align: center;
}

#opengl2webgl-navpane {
  height: 90vh;
  overflow-y: scroll;
}

#opengl2webgl-display {
  height: 90vh;
  overflow: hidden;
}

</style>
