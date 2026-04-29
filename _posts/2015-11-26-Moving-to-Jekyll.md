---
layout: post
title: Moving to Jekyll
titledesc: Fight against Sass
author: dactrtr
lang: eng
about: life
---
{% include lang-tabs.html %}
<div class="panel-eng lang-panel" markdown="1">
<span class="original-badge">Original</span>

## Blogging is hard

This is actually _my first_ post in the blog, at the beggining I was **thinking** about write about which _plugins_ I used, or _how I migrate all the post_ from [Ghost](http://ghost.org) to [Jekyll Now](https://github.com/barryclark/jekyll-now) but of course, not everything went out as I _expected_.

<figure class="figimg">
   <img src="http://i.giphy.com/adhuPKADfzrDG.gif" alt="handle">
<figcaption>
This is me trying to handle all this code.
</figcaption>
</figure>
I was like that picture, cuz I just jumped from the step of **FORK** the repo, to *dive inside the sass and the cool plugins in ruby* without read **anything**.
Usually I'm that kind of humans that the first thing they do is **read** the *fucking* manual, but not this time, so I ended learning how the plugins works (actually there's like 5 supported plugins) and also how sass works with the mixins in the *hard* way, Exploding everything, was really a pain in the *codeass* see the [many ways](https://css-tricks.com/approaches-media-queries-sass/) that you can put a simple `mediaqueries` in the **sass** files.

<figure class="figimg">
   <img src="http://i.giphy.com/jvu00LhbjzAJi.gif" alt="EZ PZ">
<figcaption>
Me now, after 3 hours of trying to fix the things, 3 commit/merge mistakes, and after deleted the blog, re uploaded, and merged all the CSS by hand...
</figcaption>
</figure>
Besides my dumbness, when I was looking at the `json` file, that makes [Ghost](http://ghost.org) when you use the export option in *labs*, **surprise** it's totally non human readable, yes, I'm a human and not able to read that kind of **shit**...

So playing the _smart guy_, mounted back my **local Ghost** and manually copy paste the content of each post, wasn't the best idea ever but at least sound like a exit to the problem...

One thing kids, when you are using features that are under the category **labs** it's pretty common that... well... FAIL, yep, I get and error from the `json`so I "LOST" all my previous post, nothing important really. Now I must **CSSING** the blog for mobile and fix another couple of things...

But seems that from now on, will be quite _easy_.
Later in a next _amazing_ post maybe I will speak more about this wilderness that's making a blog.

> "Patience you must have, Young padawan"

yoda

Now I need to piss, I have been in front of the computer like **centuries**.

</div>

<div class="panel-esp lang-panel" markdown="1">

## Hacer un blog es difícil

Este es en realidad _mi primer_ post en el blog, al principio estaba **pensando** en escribir sobre los _plugins_ que usé, o _cómo migré todos los posts_ de [Ghost](http://ghost.org) a [Jekyll Now](https://github.com/barryclark/jekyll-now) pero claro, no todo salió como _esperaba_.

<figure class="figimg">
   <img src="http://i.giphy.com/adhuPKADfzrDG.gif" alt="manejando">
<figcaption>
Este soy yo tratando de manejar todo este código.
</figcaption>
</figure>
Era exactamente como ese gif, porque salté directo del paso de hacer **FORK** del repo a *meterme de cabeza en el sass y los plugins de ruby* sin leer **nada**.
Normalmente soy de esas personas que lo primero que hace es **leer** el *puto* manual, pero esta vez no, así que terminé aprendiendo cómo funcionan los plugins (en realidad hay como 5 soportados) y cómo funciona sass con los mixins a las *malas*, rompiendo todo. Fue un dolor en el *culo del código* ver las [mil formas](https://css-tricks.com/approaches-media-queries-sass/) en que se puede meter un simple `mediaqueries` en los archivos de **sass**.

<figure class="figimg">
   <img src="http://i.giphy.com/jvu00LhbjzAJi.gif" alt="facilísimo">
<figcaption>
Yo ahora, después de 3 horas tratando de arreglar todo, 3 errores de commit/merge, y tras borrar el blog, volver a subirlo, y mergear todo el CSS a mano...
</figcaption>
</figure>
Además de mi torpeza, cuando estaba mirando el archivo `json` que genera [Ghost](http://ghost.org) cuando usás la opción de exportar en *labs*, **sorpresa**: es totalmente ilegible para humanos, sí, soy humano y no puedo leer ese tipo de **porquería**...

Así que haciéndome el _listo_, levanté de nuevo mi **Ghost local** y copié y pegué manualmente el contenido de cada post, no era la mejor idea del mundo pero al menos parecía una salida al problema...

Una cosa, chicos: cuando usás features que están bajo la categoría **labs** es bastante común que... bueno... FALLEN, sí, me dio un error en el `json` y "PERDÍ" todos mis posts anteriores, nada importante en realidad. Ahora tengo que **hacerle el CSS** al blog para mobile y arreglar un par de cosas más...

Pero parece que de ahora en adelante va a ser bastante _fácil_.
Más adelante, en algún _increíble_ post futuro, quizás hable más sobre esta locura que es hacer un blog.

> "Paciencia debes tener, joven padawan"

yoda

Ahora necesito ir al baño, llevo **siglos** frente a la computadora.

</div>

<div class="panel-kor lang-panel" markdown="1">

## 블로그 만들기는 어렵다

이게 사실은 블로그의 _첫 번째_ 포스트예요. 처음에는 사용한 _플러그인_에 대해 쓰거나, [Ghost](http://ghost.org)에서 [Jekyll Now](https://github.com/barryclark/jekyll-now)로 _모든 포스트를 어떻게 이전했는지_ 쓰려고 **생각하고** 있었는데 물론, 생각대로 _되지 않았어요_.

<figure class="figimg">
   <img src="http://i.giphy.com/adhuPKADfzrDG.gif" alt="handle">
<figcaption>
이 코드 전부 다루려는 나.
</figcaption>
</figure>
저 사진처럼 됐어요, 왜냐면 **FORK**하는 단계에서 바로 *아무것도 읽지 않고* *sass와 루비의 멋진 플러그인 속으로 뛰어들었으니까요*. 보통은 제일 먼저 **매뉴얼을 읽는** 부류인데, 이번엔 아니었어요. 그래서 결국 플러그인이 어떻게 작동하는지 (사실 지원되는 게 5개 정도예요)와 *어려운* 방식으로, 모든 걸 폭발시키면서 sass에서 mixins가 어떻게 작동하는지 배웠어요. **sass** 파일에 간단한 `mediaqueries`를 넣는 [여러 가지 방법](https://css-tricks.com/approaches-media-queries-sass/)을 보는 건 *코드지옥* 그 자체였어요.

<figure class="figimg">
   <img src="http://i.giphy.com/jvu00LhbjzAJi.gif" alt="EZ PZ">
<figcaption>
지금의 나. 3시간 동안 수정하려고 노력하고, commit/merge 실수 3번 하고, 블로그 삭제하고 다시 올리고, CSS 전체를 손으로 merge한 후...
</figcaption>
</figure>
내 멍청함에 더해서, [Ghost](http://ghost.org)가 *labs*의 내보내기 옵션을 사용할 때 만드는 `json` 파일을 보고 있었는데, **놀랍게도** 완전히 사람이 읽을 수 없는 형식이었어요, 맞아요, 저는 인간이라서 그런 **쓰레기**는 읽을 수가 없어요...

그래서 _똑똑한 척하며_, **로컬 Ghost**를 다시 올리고 각 포스트의 내용을 직접 복사 붙여넣기 했어요, 최선의 방법은 아니었지만 적어도 문제에서 빠져나갈 출구처럼 보였어요...

한 가지, 여러분, **labs** 카테고리에 있는 기능들을 사용할 때 꽤 흔하게 일어나는 건... 바로... 실패예요. 그래서 `json`에서 오류가 나서 이전 포스트들을 전부 "잃었어요", 사실 별로 중요한 건 아니었어요. 이제 블로그를 모바일용으로 **CSS 작업**하고 몇 가지를 더 수정해야 해요...

하지만 이제부터는 꽤 _쉬워질_ 것 같아요.
나중에 다음 _멋진_ 포스트에서 블로그 만들기라는 이 황야에 대해 더 이야기할 수도 있어요.

> "인내심이 필요해, 젊은 파다완이여"

요다

이제 화장실 가야 해요, **몇 세기 동안** 컴퓨터 앞에 앉아 있었어요.

</div>

<div class="panel-jp lang-panel" markdown="1">

## ブログを作るのは難しい

これは実際には _初めて_ のブログ投稿で、最初は使った _プラグイン_ について書くとか、[Ghost](http://ghost.org) から [Jekyll Now](https://github.com/barryclark/jekyll-now) にどうやって _投稿を移行したか_ を書こうと **思って** いたんだけど、もちろん、思い通りには _いかなかった_。

<figure class="figimg">
   <img src="http://i.giphy.com/adhuPKADfzrDG.gif" alt="対処しようとしている">
<figcaption>
このコード全部に対処しようとしている自分。
</figcaption>
</figure>
あのgifそのままで、リポジトリを **FORK** するステップから何も **読まずに** *sass とrubyのクールなプラグインの沼に* 飛び込んだ。
普段は最初に **マニュアルを読む** タイプなんだけど、今回は違って、プラグインの動き方（実際にはサポートされているのは5つくらい）や、mixinsを使ったsassの書き方を *ハードな方法* で学ぶことになった。すべてを爆発させて、**sass** ファイルに単純な `mediaqueries` を書く [いくつもの方法](https://css-tricks.com/approaches-media-queries-sass/) を見るのは本当に *コードの地獄* だった。

<figure class="figimg">
   <img src="http://i.giphy.com/jvu00LhbjzAJi.gif" alt="余裕">
<figcaption>
今の自分。3時間かけて修正しようとして、3回のcommit/mergeミスをして、ブログを削除して再アップロードして、CSSを全部手作業でマージした後...
</figcaption>
</figure>
自分の馬鹿さ加減に加えて、[Ghost](http://ghost.org) が *labs* のエクスポートオプションを使ったときに生成する `json` ファイルを見ていたら、**なんと** 完全に人間には読めない形式で、そう、私は人間なのでそういう **ゴミ** は読めない...

賢いふりをして **ローカルのGhost** を立ち上げ直して、各投稿の内容を手作業でコピペした。最良の方法じゃなかったけど、少なくとも問題の出口っぽくは見えた...

みんな、**labs** カテゴリにある機能を使っているとき、よく起きることは... そう... FAIL。`json` でエラーが出て以前の投稿を全部「失った」、まあ大したことはなかったけど。今はブログをモバイル向けに **CSS対応** して、あと数箇所直さないといけない...

でもこれからは _簡単に_ なりそうな気がする。
次の _素晴らしい_ 投稿でこのブログ作りという荒野についてもっと話せるかもしれない。

> 「忍耐が必要だ、若きパダワンよ」

ヨーダ

もうトイレに行かなきゃ、**何世紀も** コンピュータの前にいた気がする。

</div>
