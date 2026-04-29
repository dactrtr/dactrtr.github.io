---
layout: post
title: Dinopirates
titledesc: Devblog 04
author: dactrtr
feature: https://i.imgur.com/PV4ekjg.gif
lang: eng
about: gamedev
---
{% include lang-tabs.html %}
<div class="panel-eng lang-panel" markdown="1">

# Improved graphics, new mechanics, pc version

---

**disclaimer:** _this will be a short post since I had done a lot of improvements but didn't have the time or energy to post about it_ and I had been super busy this last month.

---
first of all
## I got married

Yes folks, I've found love, or love found me dunno how it works but I'm happy. Don't ask me how I did it, it happened. well it happened in December, the actual process and soon we will have a celebration.

## Improved ... all

To be honest I lost track of all the changes I've been doing to the game, so only for what I can remember...
- started using [Pixquare](https://www.pixquare.art/) for the assets
- ditched my custom tool for level creation to [LDTK](https://ldtk.io/)
- added a credit scene
- changed from tiles to create the levels to images
- changed how the levels and props are rendered, instead of sprites im using the images for the backgrounds
- added two new skills
- created a new in game menu
- added pickups characters
- added npcs
- added conditional dialogues
- added a shrinking skill

besides all this changes also im using [Claude Code](https://claude.ai/code), to port all my LUA code ([Playdate SDK](https://play.date/dev/)) to LUA code ([love2d](https://www.love2d.org/)) so the pc port is taking shape(to be more accurate is a macos port).


</div>

<div class="panel-esp lang-panel" markdown="1">

# Gráficos mejorados, nuevas mecánicas, versión para PC

---

**aviso:** _este va a ser un post corto porque hice un montón de mejoras pero no tuve tiempo ni energía para escribir sobre ello_ y el último mes estuve muy ocupado.

---
antes que nada
## Me casé

Sí, gente, encontré el amor, o el amor me encontró a mí, no sé bien cómo funciona eso, pero soy feliz. No me pregunten cómo lo hice, simplemente pasó. Fue en diciembre, el trámite ya está y pronto tendremos la celebración.

## Mejoré... todo

La verdad es que perdí la cuenta de todos los cambios que le fui haciendo al juego, así que solo lo que recuerdo...
- empecé a usar [Pixquare](https://www.pixquare.art/) para los assets
- abandoné mi herramienta custom para creación de niveles y pasé a [LDTK](https://ldtk.io/)
- agregué una escena de créditos
- cambié de usar tiles para los niveles a usar imágenes
- cambié cómo se renderizan los niveles y los props, en vez de sprites uso las imágenes como fondos
- agregué dos nuevas habilidades
- creé un nuevo menú dentro del juego
- agregué personajes recolectables
- agregué NPCs
- agregué diálogos condicionales
- agregué una habilidad de encogerse

además de todos estos cambios, también estoy usando [Claude Code](https://claude.ai/code) para portar todo mi código LUA ([Playdate SDK](https://play.date/dev/)) a código LUA ([love2d](https://www.love2d.org/)), así que el port para PC está tomando forma (para ser más preciso, es un port para macOS).

</div>

<div class="panel-jp lang-panel" markdown="1">

# グラフィック改善、新メカニクス、PC版

---

**注記:** _改善点がたくさんあったのに書く時間もエネルギーもなかったので短いポストになります_、先月はとにかく忙しかったです。

---
まず最初に
## 結婚しました

みなさん、愛を見つけました。正確には愛に見つけてもらったというか、どういう仕組みなのかよくわかりませんが、とにかく幸せです。どうやったのか聞かないでください、そうなったんです。12月のことで、手続きは済んでいて、もうすぐお祝いをする予定です。

## 全部改善しました

正直、ゲームに加えた変更をすべて把握しきれていないので、覚えている範囲で...
- アセット制作に [Pixquare](https://www.pixquare.art/) を使い始めた
- レベル制作の自作ツールをやめて [LDTK](https://ldtk.io/) に移行した
- クレジットシーンを追加した
- レベル作成をタイルからイメージに変更した
- レベルや小道具のレンダリング方法を変更し、スプライトの代わりに背景としてイメージを使うようにした
- 新スキルを2つ追加した
- ゲーム内の新しいメニューを作成した
- ピックアップキャラクターを追加した
- NPCを追加した
- 条件付きダイアログを追加した
- 縮小スキルを追加した

これらの変更に加えて、[Claude Code](https://claude.ai/code) を使って LUA コード（[Playdate SDK](https://play.date/dev/)）を LUA コード（[love2d](https://www.love2d.org/)）に移植しています。PC版が形になってきました（正確にはmacOS版ですが）。

</div>

<div class="panel-kor lang-panel" markdown="1">

# 그래픽 개선, 새로운 메카닉, PC 버전

---

**공지:** _개선한 게 많았는데 글 쓸 시간도 에너지도 없었기 때문에 짧은 포스트가 될 거예요_ 지난 한 달이 정말 바빴습니다.

---
먼저
## 결혼했어요

네, 여러분, 사랑을 찾았습니다. 아니면 사랑이 저를 찾은 건지, 어떻게 되는 건지 잘 모르겠지만 행복합니다. 어떻게 했는지는 묻지 마세요, 그냥 그렇게 됐어요. 12월에 있었던 일이고, 절차는 다 끝났고 곧 축하 파티를 할 예정입니다.

## 전부 개선했습니다

솔직히 게임에 가한 모든 변경 사항을 다 기억하지 못해서, 기억나는 것만...
- 에셋 작업에 [Pixquare](https://www.pixquare.art/) 사용 시작
- 레벨 제작 커스텀 툴 포기하고 [LDTK](https://ldtk.io/)로 전환
- 크레딧 씬 추가
- 레벨 생성 방식을 타일에서 이미지로 변경
- 레벨과 소품 렌더링 방식 변경, 스프라이트 대신 이미지를 배경으로 사용
- 새로운 스킬 2개 추가
- 새로운 인게임 메뉴 제작
- 픽업 캐릭터 추가
- NPC 추가
- 조건부 대화 추가
- 축소 스킬 추가

이 모든 변경 외에도, [Claude Code](https://claude.ai/code)를 사용해서 LUA 코드([Playdate SDK](https://play.date/dev/))를 LUA 코드([love2d](https://www.love2d.org/))로 포팅하고 있어서 PC 버전이 점점 모습을 갖춰가고 있습니다(더 정확히는 macOS 버전이지만요).

</div>
