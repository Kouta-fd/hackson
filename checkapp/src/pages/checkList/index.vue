<template>
  <div>
    <h2>1.Basic Computer Science</h2>
    <p>当てはまる項目にチェックを入れてください:</p>

    <div v-for="csitem in csitems" :key="csitem.id">
      <label for="CS-1">
        <input
          type="checkbox"
          name="CS"
          v-model="csitem.checked"
        />{{ csitem.text }}</label
      >
    </div>
    <h2>2.Backend development</h2>
    <div v-for="backenditem in backenditems" :key="backenditem.id">
      <label for="backend-1">
        <input type="checkbox" name="backend" v-model="backenditem.checked" />{{
          backenditem.text
        }}</label
      >
    </div>
    <h2>3.Database</h2>
    <div v-for="databaseitem in databaseitems" :key="databaseitem.id">
      <label for="database-1">
        <input
          type="checkbox"
          name="database"
          v-model="databaseitem.checked"
        />{{ databaseitem.text }}</label
      >
    </div>
    <h2>4.Infrastructure</h2>
    <div v-for="infraitem in infraitems" :key="infraitem.id">
      <label for="infra-1">
        <input type="checkbox" name="infra" v-model="infraitem.checked" />{{
          infraitem.text
        }}</label
      >
    </div>
    <h2>5.Frontend development</h2>
    <div v-for="frontenditem in frontenditems" :key="frontenditem.id">
      <label for="front-1">
        <input
          type="checkbox"
          name="frontend"
          v-model="frontenditem.checked"
        />{{ frontenditem.text }}</label
      >
    </div>
    <h2>6.Security</h2>
    <div v-for="securityitem in securityitems" :key="securityitem.id">
      <label for="security-1">
        <input
          type="checkbox"
          name="security"
          v-model="securityitem.checked"
        />{{ securityitem.text }}</label
      >
    </div>

    <div class="btn"><button id="btn" @click="result">集計</button></div>
    <div  class ="result" v-if="this.total.length != 0">
      <router-link class="link"
        :to="{
          name: 'result',
          query: { id: total },
        }"
        >結果を見る</router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      total: [],
      csitems: [
        {
          id: "CS-1",
          text: "業務の中で発生したエラーについて、自力で調べられる",
          checked: false,
        },
        {
          id: "CS-2",
          text: "英語のドキュメントやブログ記事、Q&Aサイトを読むことができる",
          checked: false,
        },
        {
          id: "CS-3",
          text: "CUI経由でSSHログインやファイル操作、パッケージやユーザー管理などの基本操作ができる",
          checked: false,
        },
        {
          id: "CS-4",
          text: "必要に応じて、シェルスクリプトを使って作業を自動化したり、定期実行したりできる",
          checked: false,
        },
        {
          id: "CS-5",
          text: "自分が行うコミットに対して、必要な差分を行単位、コードブロック単位で調整できる",
          checked: false,
        },
        {
          id: "CS-6",
          text: "revertなど、コミット改変系の操作を知っており、リポジトリで事故が起きた時に適切に対処できる",
          checked: false,
        },
        {
          id: "CS-7",
          text: "GithubFlowについて理解しており、プロジェクトに応じた必要なブランチ戦略を提案できる",
          checked: false,
        },
        {
          id: "CS-8",
          text: "IPA 基本情報処理技術者試験を取得している、または同等の知識がある",
          checked: false,
        },
      ],
      backenditems: [
        {
          id: "backend-1",
          text: "コンパイラ言語(Java, C#, Golangなど)、スクリプト言語(PHP,Ruby,Python)を最低限１つずつは使える",
          checked: false,
        },
        {
          id: "backend-2",
          text: "MVCフレームワークについて精通しており、Webアプリケーションに頻出する機能について、適切に設計、実装できる",
          checked: false,
        },
        {
          id: "backend-3",
          text: "アプリケーションレイヤーの実行パフォーマンスに関して、数十秒〜数分かかるレベルの処理やメモリ展開量が多くなる可能性がある場合に、適切にチューニングができる",
          checked: false,
        },
      ],
      databaseitems: [
        {
          id: "database-1",
          text: " RDBの初期設定(ユーザー管理や設定ファイルとか)ができる",
          checked: false,
        },
        {
          id: "database-2",
          text: " 処理実装に必要なDBクエリについて、ORMとの連携を前提として、SQL構文レベルでも理解している",
          checked: false,
        },
        {
          id: "database-3",
          text: " 正規化やパフォーマンスを意識して、数十〜数百table位のデータベース設計ができる",
          checked: false,
        },
        {
          id: "database-4",
          text: " データベース内部でのパフォーマンスチューニングや、Indexを用いた高速化ができる",
          checked: false,
        },
        {
          id: "database-5",
          text: " インフラレベルでのパフォーマンスチューニングについて、代表的な手法についての知識があり、必要に応じて導入できる",
          checked: false,
        },
      ],
      infraitems: [
        {
          id: "infra-1",
          text: "dockerを使って、プロジェクトに必要な仮想環境を１から構築し、チームで共有できる",
          checked: false,
        },
        {
          id: "infra-2",
          text: "クラウドインスタンス上で、Webサーバーを立ち上げるための手順書を作ることができる",
          checked: false,
        },
        {
          id: "infra-3",
          text: "ステージング、開発環境のそれぞれの運用方針を定め、開発フェーズやフローに応じて各環境を運用・保守できる",
          checked: false,
        },
        {
          id: "infra-4",
          text: "AWS or GCPを使って、システム開発に必要な構成を計画し、実際に構築することができる",
          checked: false,
        },
        {
          id: "infra-5",
          text: "CIツールを用いて、環境構築や最新コードのデプロイが自動化できる",
          checked: false,
        },
      ],
      frontenditems: [
        {
          id: "front-1",
          text: "HTML/CSSについて精通し、画面デザインやUI/UXについて、デザイナーと必要な実装の連携ができる",
          checked: false,
        },
        {
          id: "front-2",
          text: "SEOおよびkeywordやOGPなどのメタ情報についての基礎知識を持ち、必要に応じて方針などをプロダクトオーナーや専門ポジションの人と相談しながらサービスを運用できる",
          checked: false,
        },
        {
          id: "front-3",
          text: "生JavaScriptおよびjQueryについての理解",
          checked: false,
        },
        {
          id: "front-4",
          text: "npmを用いてパッケージ管理や、ビルドやトランスパイル環境、ビルトインサーバーなどのJS開発環境を構築できる",
          checked: false,
        },
        {
          id: "front-5",
          text: "フルスタックフレームワーク(React or Vue or Angular)について、最低1つは使用できる",
          checked: false,
        },
      ],
      securityitems: [
        {
          id: "security-1",
          text: "代表的な攻撃手法（XSS、SQLインジェクション、CORFなど）についての知識があり、定期的に情報を収集している",
          checked: false,
        },
        {
          id: "security-2",
          text: "サービスのインフラ構成全体に対して、セキュリティ方針と具体的な対応方針を計画し、運用することができる",
          checked: false,
        },
        {
          id: "security-3",
          text: "企業に求められる個人情報保護やプライバシーポリシーについて理解し、システム上のデータの取り扱いについて関係部署と適切に連携し、システムに反映できる",
          checked: false,
        },
        {
          id: "security-4",
          text: "システムの可用性について理解し、プロジェクトの保守運用方針やトラブル対応について、適切に要件を定め、運用することができる",
          checked: false,
        },
      ],
    };
  },
  methods: {
    result() {
      let values = 0;
      for (var i = 0; i < this.csitems.length; i++) {
        if (this.csitems[i].checked) {
          values++;
        }
      }

      // eslint-disable-next-line no-unused-vars
      let backv = 0;
      for (i = 0; i < this.backenditems.length; i++) {
        if (this.backenditems[i].checked) {
          backv++;
        }
      }

      // eslint-disable-next-line no-unused-vars
      let databasev = 0;
      for (i = 0; i < this.databaseitems.length; i++) {
        if (this.databaseitems[i].checked) {
          databasev++;
        }
      }

      // eslint-disable-next-line no-unused-vars
      let infrav = 0;
      for (i = 0; i < this.infraitems.length; i++) {
        if (this.infraitems[i].checked) {
          infrav++;
        }
      }

      // eslint-disable-next-line no-unused-vars
      let frontv = 0;
      for (i = 0; i < this.frontenditems.length; i++) {
        if (this.frontenditems[i].checked) {
          frontv++;
        }
      }

      // eslint-disable-next-line no-unused-vars
      let securityv = 0;
      for (i = 0; i < this.securityitems.length; i++) {
        if (this.securityitems[i].checked) {
          securityv++;
        }
      }

      // eslint-disable-next-line no-unused-vars
      this.total = [
        (100 * values) / 8,
        (100 * backv) / 3,
        (100 * databasev) / 5,
        (100 * infrav) / 5,
        (100 * frontv) / 5,
        (100 * securityv) / 4,
      ];
      console.log(this.total);
    },
  },
};
</script>


<style scoped>
.result{
  text-align: center;
}
button {
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

}
.btn{
  text-align: center;
}
.link{
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: solid 1px #008CBA;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.link:hover{
  color: #008CBA;
  background-color: white;
  transition: .5s;
}
</style>