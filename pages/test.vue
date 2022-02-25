<template>
  <div ref="root" style="height : 100vh">

    <vue-mermaid-string :value="diagram"/>
  </div>
</template>

<script>

import VueMermaidString from "vue-mermaid-string";
import endent from 'endent'

export default {
  name: "test",
  components: {
    VueMermaidString
  },
  data() {
    return {
      description: ''
    }
  },
  computed: {
    diagram: () => endent`
      graph TD
        DateTime[Date and time]

        JavaScript --> Frameworks
        JavaScript --> DateTime
        JavaScript --> 3D
        Frameworks --> Vue.js
        Frameworks --> React
        DateTime --> Moment.js
        DateTime --> date-fns
        3D --> Three.js
        3D --> Babylon.js
    `,
  }
}
</script>


<style scoped>

.empty-poster {
  width: 150px;
  height: 220px;
  border-radius: 15px;
  background: #CD97F8;
  border: 2px dashed white;
}

</style>
