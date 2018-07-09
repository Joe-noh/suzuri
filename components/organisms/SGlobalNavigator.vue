<template>
  <nav class="s-global-navigator">
    <ul class="list">
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 't-shirt' }}">Tシャツ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'ringer-t-shirt' }}">リンガーTシャツ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'long-sleeve-t-shirt' }}">ロングスリーブTシャツ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'full-graphic-t-shirt' }}">フルグラフィックTシャツ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'sweat' }}">スウェット</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'hoodie' }}">フーディ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'mug' }}">マグカップ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'towel-handkerchief' }}">タオルハンカチ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'blanket' }}">ブランケット</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'sticker' }}">ステッカー</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'can-badge' }}">缶バッジ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'note' }}">ノート</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'smartphone-case' }}">スマートフォンケース</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'clear-smartphone-case' }}">クリアスマートフォンケース</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'wallet-phone-case' }}">ウォレットフォンケース</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'tote-bag' }}">トートバッグ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'sacoche' }}">サコッシュ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'baby-bib' }}">ベイビービブ</router-link></li>
      <li class="list-item"><router-link class="list-item__link" :to="{name: 'items-itemName', params: { itemName: 'baby-rompers' }}">ベイビーロンパース</router-link></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '~assets/stylesheets/mixins/variables';

.s-global-navigator {
  height: 40px;
  width: 100%;
  background-color: $white;
  border-bottom: solid 1px $graylight;
}

.list {
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  overflow-x: scroll;
  padding: 0 5px;
}

.list-item {
  line-height: 40px;
  display: table-cell;
  white-space: nowrap;
  margin: 0 5px;
}

.list-item__link {
  text-decoration: none;
  font-size: 14px;
}
</style>
