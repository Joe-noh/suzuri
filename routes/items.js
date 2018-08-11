export const items = [
  {id: 1, name: 't-shirt', humanizeName: 'Tシャツ'},
  {id: 19, name: 'ringer-t-shirt', humanizeName: 'リンガーTシャツ'},
  {id: 15, name: 'long-sleeve-t-shirt', humanizeName: 'ロングスリーブTシャツ'},
  {id: 8, name: 'full-graphic-t-shirt', humanizeName: 'フルグラフィックTシャツ'},
  {id: 5, name: 'sweat', humanizeName: 'スウェット'},
  {id: 9, name: 'hoodie', humanizeName: 'フーディ'},
  {id: 3, name: 'mug', humanizeName: 'マグカップ'},
  {id: 14, name: 'towel-handkerchief', humanizeName: 'タオルハンカチ'},
  {id: 13, name: 'blanket', humanizeName: 'ブランケット'},
  {id: 11, name: 'sticker', humanizeName: 'ステッカー'},
  {id: 17, name: 'can-badge', humanizeName: '缶バッジ'},
  {id: 10, name: 'note', humanizeName: 'ノート'},
  {id: 4, name: 'smartphone-case', humanizeName: 'スマートフォンケース'},
  {id: 18, name: 'clear-smartphone-case', humanizeName: 'クリアスマートフォンケース'},
  {id: 12, name: 'wallet-phone-case', humanizeName: 'ウォレットフォンケース'},
  {id: 2, name: 'tote-bag', humanizeName: 'トートバッグ'},
  {id: 16, name: 'sacoche', humanizeName: 'サコッシュ'},
  {id: 6, name: 'baby-rompers', humanizeName: 'ベイビーロンパース'},
  {id: 7, name: 'baby-bib', humanizeName: 'ベイビービブ'},
]

export function itemByName(name) {
  return items.find(item => item.name === name);
}
