# Artroom Stable Diffusionの補助ツール(ほぼ自分用)
下記をインストールしたら使えます。  
<https://github.com/artmamedov/artroom-stable-diffusion>  
# 準備
上記インストール後、`artroom.env.config.js`に`Artroom`へのパスを設定します。  
基本デフォルトのままで動くと思います。
# 単体生成
`artroom.sd.config.js`で各パラメータを設定し`yarn generate`  
または、  
`yarn generate --prompt_text="kawaii"`のように、`artroom.sd.config.js`のパラメータは引数で変更できます。
# 連続生成
`batch.sample.js`を編集します。  
ワードを配列に増やせば、連続生成できます。  
`node ./batch.sample.js`
# 生成結果
`./outputs`に出ます。  
index.htmlを開けばすべての画像を一覧で見られます。
# runner.py
<https://github.com/artmamedov/artroom-stable-diffusion/blob/main/artroom-helpers/runner.py>  
上記のスクリプトを、並列に対応したり、コンフィグを変え易いように編集したものです。