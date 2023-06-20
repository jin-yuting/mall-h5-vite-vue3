<template>
  <div ref="waterMark" height="100px"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const waterMark = ref(null);
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 200
canvas.height = 100
// ctx.font = '18px Vedana';
// ctx.fillStyle = 'rgba(200,200,200,0.4)'
ctx.rotate(-20*Math.PI / 180)
ctx.textAlign = 'left'
ctx.fillText('我是水印', canvas.width/16, canvas.height/2)



onMounted(() => {
  waterMark.value.style.backgroundRepeat = 'repeat';
  waterMark.value.style.width = document.documentElement.clientWidth + 'px';
  waterMark.value.style.height = document.documentElement.clientHeight + 'px';
  
  document.body.appendChild(canvas);
});
</script>