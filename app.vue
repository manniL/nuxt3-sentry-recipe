<template>
  <div>
    <button @click="consoleError">Throw a console error</button>
    <button @click="uncapturedError">Throw an uncaptured error</button>
    <button @click="serverError">Throw a server error</button>
  </div>
</template>

<script setup lang="ts">
function consoleError() {
  console.error('Test console error')
}

function uncapturedError() {
  throw new Error('Test uncaptured error')
}

function serverError() {
  $fetch('/api/test')
}
</script>