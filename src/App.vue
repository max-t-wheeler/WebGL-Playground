<template>

  <div>
    <app-toolbar :homeContents="home" :appContents="contents" class="toolbar"/>
    <home-page v-if="home.display" class="application"/>
    <opengl2webgl-app v-if="contents[0].display" class="application"/>
  </div>

</template>

<script>

import Toolbar from './components/Toolbar';
import Home from './components/Home/Home';
import OpenGL2WebGLApp from './components/OpenGL2WebGL/OpenGL2WebGLApp';

export default {
  name: 'App',
  components: {
    'app-toolbar': Toolbar,
    'home-page': Home,
    'opengl2webgl-app': OpenGL2WebGLApp
  },
  data () {
    return {
      home: {
        name: 'WebGL Projects',
        address: '#home',
        display: true
      },
      contents: [
        {
          name: 'OpenGL2WebGL',
          address: '#opengl2webgl',
          display: false
        }
/**
        {
          name: 'jQuery Art',
          address: '#jquery-art'
        },
        {
          name: 'Media',
          address: '#media'
        },
        {
          name: 'CV',
          address: '#cv'
        },
        {
          name: 'Contact',
          address: '#contact'
        }
/**/
      ]
    }
  }
}

</script>

<style>

body {
  margin: 0;
}

</style>
