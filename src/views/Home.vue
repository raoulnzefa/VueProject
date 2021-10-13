<template>
  <div class="home">
    <TempFile />
  </div>
</template>

<script>
// @ is an alias to /src
import TempFile from "@/components/TempFile.vue";

export default {
  name: 'Home',
  components: {
    TempFile,
  },
};
</script>
