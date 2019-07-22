<template>
  <header>
    <div class="pictureContainer">
      <img id="picture" src="../assets/mcarey-picture.png" alt />
    </div>
    <div class="nameContainer">
      <h1>MATTHEW CAREY</h1>
      <h2>
        <span>A CREATIVE</span>
        <span>DESIGNER</span>
      </h2>
    </div>
    <div class="ampersandContainer">
      <img src="../assets/ampersand.svg" alt="and" />
    </div>
    <div class="devContainer">
      <span class="smallTitle">FRONT-END</span>
      <h2>
        <span>WEB</span>
        <span>DEVELOPER</span>
      </h2>
    </div>
    <div class="backgroundContainer">
      <div id="rectSolid"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "SplashHeader"
};
</script>

<style scoped lang="scss">
header {
  position: relative;

  & div[class*="Container"] {
    position: absolute;
  }
}

h1 {
  font-family: $displayFont;
  color: $brightBlue;
}
img {
  width: 100%;
}
</style>
