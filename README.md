# create-react-appで作ったコンポーネントをGitHub Packageリポジトリに登録して(npm installできるようにする)手順

自作コンポーネントを、プロジェクト間のコピー＆ペーストではなく、`npm install @githubユーザ名/パッケージ名` でインストールできるようにします

* `create-react-app` でプロジェクトを作成
* コンポーネントを作成
* コンポーネントが動くことを確認
* パッケージを公開するための設定
  * コンポーネントをexport
  * package.jsonの変更
  * コンポーネントをビルドするためのtsconfig追加設定
  * rollup.jsの追加
* Github パーソナル アクセス トークンの取得
* .npmrcの設定
* github Packageへ発行

* 別Reactプロジェクトを作成して、npmからインストール＋実行ができることを確認する

```
origin  git@github.com:murasuke/name-icon.git

 npm i -D  rollup-plugin-delete rollup-plugin-peer-deps-external rollup-plugin-postcss rollup-plugin-typescript2 @rollup/plugin-commonjs @rollup/plugin-node-resolve
 touch rollup.config.js
 code rollup.config.js
 npm run rollup
 touch .npmrc
 code .npmrc
 npm login --registry=https://npm.pkg.github.com
 npm publish

```
