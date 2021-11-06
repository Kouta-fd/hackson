<template>
  <div>
    <h2>1. Basic CS</h2>
    <h3>技術の取得方法</h3>
    <p>当てはまる項目にチェックを入れてください:</p>
    <p>
      <label for="color-1">
        <input
          type="checkbox"
          name="CS"
          value="red"
          id="color-1"
        />業務の中で発生したエラーについて、自力で調べられる。</label
      >
    </p>
    <p>
      <label for="color-2"
        ><input type="checkbox" name="CS" value="green" id="color-2" />
        英語のドキュメントやブログ記事、Q&Aサイトを読むことができる。</label
      >
    </p>
    <h3>Linux</h3>
    <p>
      <label for="color-3"
        ><input type="checkbox" name="CS" value="green" id="color-3" />
        CUI経由でSSHログインやファイル操作、パッケージやユーザー管理などの基本操作ができる。</label
      >
    </p>
    <p>
      <label for="color-3"
        ><input type="checkbox" name="CS" value="green" id="color-3" />
        必要に応じて、シェルスクリプトを使って作業を自動化したり、定期実行したりできる</label
      >
    </p>
    <button id="btn" @click="result">結果を見る</button>
  </div>
</template>
<script>
export default {
  components: {},
  methods: {
    // getSelectedCheckboxValues(name) {
    //   const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    //   let values = 0;
    //   checkboxes.forEach((checkbox) => {
    //     values++;
    //   }
    // },
    // result() {
    //   alert(getSelectedCheckboxValues("CS"))
    // }
  }
};
</script>
