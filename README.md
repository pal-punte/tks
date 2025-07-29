# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

# Netlifyデプロイガイド

## Step 1: コードをGitHubにプッシュする
まず、プロジェクトのコードをGitHubリポジトリにアップロードする必要があります。
GitHubでリポジトリを作成: GitHub上で新しいリポジトリを作成します。（PublicでもPrivateでも構いません）
ローカルでGitを初期化: ターミナルでプロジェクトのルートディレクトリに移動し、以下のコマンドを実行します。
Generated bash
git init
git add .
git commit -m "Initial commit: Ready for deployment"
Use code with caution.
Bash
リモートリポジトリを設定: GitHubで作成したリポジトリのURLをコピーし、以下のコマンドでリモートとして追加します。
Generated bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL.git
git branch -M main
git push -u origin main
Use code with caution.
Bash
これで、コードがGitHubにプッシュされました。

## Step 2: Netlifyで新しいサイトを作成する
Netlifyにアクセスし、GitHubアカウントでサインアップまたはログインします。
ダッシュボードで、「Add new site」ドロップダウンから「Import an existing project」を選択します。
Gitプロバイダーとして「GitHub」を選択します。
NetlifyにGitHubリポジトリへのアクセスを許可すると、リポジトリのリストが表示されます。先ほどプッシュしたリポジトリを選択してください。

## Step 3: ビルド設定を構成する
この画面では、Netlifyがサイトをどのようにビルドして公開するかを設定します。あなたのプロジェクトはビルドプロセス（ViteやCreate React Appなど）を必要としないシンプルな構成なので、設定は非常に簡単です。
Branch to deploy: main （またはあなたのメインブランチ名）
Build command: 空欄のままにしてください。ビルドステップは不要です。
Publish directory: . または 空欄のままにしてください。index.htmlがリポジトリのルートにあるため、ルートディレクトリを公開します。

## Step 4: 【重要】APIキーの安全な設定
ここが最も重要なポイントです。
現在のコード(services/geminiService.ts)は process.env.API_KEY を使ってAPIキーを読み込もうとしています。これはNode.js環境やビルド時に変数を埋め込むための仕組みですが、あなたの現在のプロジェクト構成（ブラウザで直接TSXを読み込む）では機能しません。
もしAPIキーを直接フロントエンドのコードに書き込むと、サイトを訪れた全ての人がキーを閲覧できてしまい、不正利用される危険性が非常に高くなります。

【推奨される解決策：Netlify Functions】
この問題を安全に解決する最も一般的な方法は、Netlify Functions を使うことです。これは、Netlifyのサーバー上で実行される小さなバックエンドコード（APIプロキシ）です。
仕組み:
フロントエンド（ブラウザ）は、Gemini APIに直接リクエストを送る代わりに、Netlify上の自サイトのAPIエンドポイント（例: /.netlify/functions/chat）にリクエストを送ります。
Netlify Function（サーバーサイド）がそのリクエストを受け取ります。
Functionは、Netlifyの環境変数として安全に保存されたAPI_KEYを使って、Gemini APIにリクエストを転送します。
Gemini APIからの応答をFunctionが受け取り、それをフロントエンドに返します。
この方法により、APIキーがブラウザに一切公開されることなく、安全にAI機能を利用できます。

## Step 5: 環境変数の設定とデプロイ
上記のFunctionを実装する前提で、APIキーをNetlifyに設定します。
ビルド設定画面の下部にある「Advanced build settings」を開き、「New variable」をクリックします。
以下の通り環境変数を設定します。

Key: API_KEY
Value: あなたのGoogle Gemini APIキーを貼り付けます。
「Add variable」をクリックして保存します。
最後に、「Deploy site」ボタンをクリックします。

NetlifyがGitHubからコードを取得し、デプロイを開始します。数分で [ランダムな名前].netlify.app というURLでサイトが公開されます。

### まとめと次のステップ
上記の手順でサイトのデプロイは完了しますが、現状のままではAIチャット機能はAPIキーの問題で動作しません。
サイトを完全に機能させるためには、先ほど説明したNetlify Functionsを利用したAPIプロキシを実装する必要があります。これは、フロントエンドのgeminiService.tsと、新しく作成するFunctionファイルのコード変更を伴います。


安全にAPIキーを扱うための「Netlify Functions」を利用したAPIプロキシの実装を行います。
これにより、APIキーがブラウザに公開されることなく、安全にAIチャット機能をご利用いただけます。
以下の通り、ファイルを変更・追加しました。
netlify/functions/chat.ts (新規作成)
フロントエンドからのリクエストを受け取り、安全に保管されたAPIキーを使ってGemini APIと通信するサーバーサイドの関数を新しく作成しました。
services/geminiService.ts (更新)
フロントエンドのこのファイルからGemini APIを直接呼び出すコードを削除し、代わりに上記で作成したNetlify Function (/netlify/functions/chat)を呼び出すように全面的に書き換えました。
components/AIChat.tsx (更新)
geminiService.tsの変更に合わせて、チャットの履歴管理方法を少し修正しました。利用者側の見た目や使い勝手は一切変わりません。
これらの変更を適用し、再度Netlifyにデプロイすることで、チャット機能が安全かつ正常に動作するようになります。

Netlifyの環境変数にAPI_KEYを設定するのを忘れないでくださいね。
