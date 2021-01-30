<template>
  <div class="aaa">
    <div class="bbb">
      123
      {{ isLogin }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const isLogin = computed(() => store.state.user.isLogin)
    return {
      isLogin
    }
  }
})
</script>

<style scoped lang="scss">
@import '../util/style/variable.scss';
.aaa {
  width: 100%;
  height: 40px;
  background-color: $color-main;
  .bbb {
    width: 200px;
    height: 30px;
    background-color: blue;
  }
}
</style>
