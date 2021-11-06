<template>
  <div>
    <h2>1. Basic CS</h2>
    <h3>技術の取得方法</h3>
    <p>当てはまる項目にチェックを入れてください:</p>

    <div v-for="csitem in csitems" :key="csitem.id">
      <label for="color-1">
        <input type="checkbox" name="CS" v-model="boolean"/>{{ csitem.text }}</label
      >
    </div>
    <button id="btn" @click="result">結果を見る</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      csitems: [
        {
          id: "color-1",
          text: "業務の中で発生したエラーについて、自力で調べられる",
          boolean: false,
        },
        {
          id: "color-2",
          text: "英語のドキュメントやブログ記事、Q&Aサイトを読むことができる。",
          boolean: false,
        },
        {
          id: "color-3",
          text: "CUI経由でSSHログインやファイル操作、パッケージやユーザー管理などの基本操作ができる。",
          boolean: false,
        },
        {
          id: "color-4",
          text: "必要に応じて、シェルスクリプトを使って作業を自動化したり、定期実行したりできる",
          boolean: false,
        },
      ],
    };
  },
  methods: {
    result() {
      let values = 0;
      for(var i=0;i<this.csitems.length; i++) {
        if(this.boolean==true) {
          values ++;
        }
      }
      console.log(values);
    }
  },
};
</script>
