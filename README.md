# DeepWiki Toggle Extension

このChrome拡張機能は、GitHubリポジトリページとDeepWikiリポジトリページをワンクリックで切り替えるツールです。  
ポップアップは使わず、ブラウザの拡張機能アイコンをクリックするだけでURLを切り替えます。

---

## 🚀 機能

- **GitHub → DeepWiki**
  - `https://github.com/{user}/{repo}`
    を
  - `https://deepwiki.com/{user}/{repo}`
    に変換。
- **DeepWiki → GitHub**
  - `https://deepwiki.com/{user}/{repo}`
    を
  - `https://github.com/{user}/{repo}`
    に変換。
- 他のページ（Google、Facebookなど）は無反応。

---

## 🔧 インストール方法

1. このリポジトリをクローンまたはZIPでダウンロードして解凍します。
2. Chromeの「拡張機能」ページを開きます。  
   `chrome://extensions/`
3. 「デベロッパーモード」をONにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、解凍したフォルダ（例: `deepwiki-extension`）を選択します。
5. 拡張機能アイコンがブラウザ右上に表示されます。

---

## 🔨 使い方

1. GitHubのリポジトリページ（例: `https://github.com/username/repo`）またはDeepWikiのリポジトリページ（例: `https://deepwiki.com/username/repo`）を開きます。
2. ブラウザ右上の拡張機能アイコンをクリックします。
3. 対応するページに即座に切り替わります。
   - GitHub → DeepWiki
   - DeepWiki → GitHub

---

## 💡 注意点

- GitHubのリポジトリページ、またはDeepWikiのリポジトリページでのみ動作します。
- それ以外のページでは何も起こりません。
- ページのパスは必ず `{user}/{repo}` の形式である必要があります。

---

## 📝 ライセンス

MITライセンス
