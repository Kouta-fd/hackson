<template>
  <div>
    <div>
      <!-- この中にグラフ表示のコードを書いてください -->
    </div>
    <Rank></Rank>
    <router-link to="/checkList/">チェックリスト</router-link>
    <router-link to="/">ホーム</router-link>
  </div>
</template>
<script>
import Rank from "../../components/Rank"
export default {
  components: { Rank },
};
</script>
