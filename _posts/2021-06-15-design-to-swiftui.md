---
layout: post
title: Design to SwiftUI
titledesc: SwiftUI to Design
author: dactrtr
feature: https://i.giphy.com/media/jkSvCVEXWlOla/source.gif
lang: eng
about: Swiftui
---
{% include lang-tabs.html %}
<div class="panel-eng lang-panel" markdown="1">
<span class="original-badge">Original</span>

# Design to SwiftUI

---

**disclaimer:** _this is a work in progress, soon I'll move each one of this to their own "project" and keep them in different repos_ or never do it.

---

## The Idea

With the release of **SwiftUI**, and after tinkering with _Storyboards_ and _UIKit_, the Apple interface development seemed to get to a point where it's easy enough to **grasp for a designer** and "code enough" to be embraced as a valid workflow for design-developing (I'm learning _Swift_ now to be even more into the develop side).

This blog post it's a little **showroom** of a few projects I've been _replicating from Dribbble into SwiftUI_. The oldest projects are actually broken, those were coded into _playgrounds for iPad_ and in a update they broke somehow, and the error handling at the moment in playgrounds is very basic.

## The projects

---

### Fintech

Original design: [Fintech Dark Theme](https://dribbble.com/shots/15668611-Fintech-Dark-Theme)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/332219/screenshots/15668611/media/8ce3dbec9f3cf51e82974e23c9fc4833.mp4">
</video>

SwiftUI: [Github repo](https://github.com/dactrtr/Fintech)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/3zyQkGM.mp4">
</video>

The main goal of this view, and this front, was managing the "_view inside of a view_" for achieving this I took some design choices, mainly cuz I did want to _bloat_ the project with images, even the icons and some images aren't the same, you _get the idea_ and flow of the view.

---

### Finance App

Original design: [Finance App](https://dribbble.com/shots/15162092-Finance-App-Visual-Exploration)

<figure class="figimg">
   <img src="https://cdn.dribbble.com/users/1212733/screenshots/15162092/media/0af4dfcdfeeb2fcc7bdf3f90fc5be192.png" alt="Finance app UI design">
</figure>

SwiftUI: [Github repo](https://github.com/dactrtr/financeApp)

<figure class="figimg">
   <img src="https://i.imgur.com/2wTzdUJ.jpg" alt="Finance app UI design">
<figcaption>
Yes, that's actually my wallpaper
</figcaption>
</figure>

This time the challenge was **catch up with new modifiers and views**, also came back to SwiftUI, cuz I was a little busy at work, so more than a nice interaction it's just a nice UI.

---

### Team Management

Original design: [Team Management](https://dribbble.com/shots/13623650-Team-Management-App-Interaction)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/345970/screenshots/13623650/media/bf2782d9ef9a9130c8c3179cf9691a9a.mp4">
</video>

SwiftUI: [Github repo](https://github.com/dactrtr/TeamManagement)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/G4vr9oI.mp4">
</video>

The main goal of this view, was to achieve a complex _full size view_, and manage a little _data model_.

---

### Clean Bank UI [BROKEN]

Original design: [Clean Bank UI](https://dribbble.com/shots/12310592-Clean-Bank-UI)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/32512/screenshots/12310592/media/2bc9ff5d134acf75fe6378093f3e2b47.mp4">
</video>

SwiftUI: [Github repo](https://github.com/dactrtr/Design-to-Swift)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/350e0BG.mp4">
</video>

In this project I manage to recreate a **complex UI in Playgrounds for iPad**, you will have to believe it worked, cuz the code broke in a update from playgrounds for mac, since the error catching isn't so good, _I have no idea what's broken_.

---

### Lekan Menu[BROKEN]

Original design: [Lekan Menu](https://twitter.com/lalaekan/status/1285923482195419136)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/g1I0FS7.mp4">
</video>

SwiftUI: [Github repo](https://github.com/dactrtr/Design-to-Swift)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/wbX9tFG.mp4">
</video>

_The first one in the series_, the idea was to manage a **delay animation**, did it with some weird boolean management, then realized the proper way was using the **animation modifier**.

---
</div>

<div class="panel-esp lang-panel" markdown="1">

# Diseño a SwiftUI

---

**disclaimer:** _esto es un trabajo en progreso, pronto moveré cada uno de estos a su propio "proyecto" y los mantendré en repos diferentes_ o nunca lo haré.

---

## La Idea

Con el lanzamiento de **SwiftUI**, y después de juguetear con _Storyboards_ y _UIKit_, el desarrollo de interfaces de Apple pareció llegar a un punto donde es lo suficientemente fácil de **entender para un diseñador** y "suficientemente código" para adoptarse como un flujo de trabajo válido para diseñar-desarrollando (estoy aprendiendo _Swift_ ahora para meterme aún más en el lado del desarrollo).

Esta entrada del blog es una pequeña **vitrina** de algunos proyectos que he estado _replicando desde Dribbble en SwiftUI_. Los proyectos más antiguos están rotos, esos fueron codificados en _playgrounds para iPad_ y en una actualización se rompieron de alguna manera, y el manejo de errores en ese momento en playgrounds es muy básico.

## Los proyectos

---

### Fintech

Diseño original: [Fintech Dark Theme](https://dribbble.com/shots/15668611-Fintech-Dark-Theme)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/332219/screenshots/15668611/media/8ce3dbec9f3cf51e82974e23c9fc4833.mp4">
</video>

SwiftUI: [Repo en Github](https://github.com/dactrtr/Fintech)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/3zyQkGM.mp4">
</video>

El objetivo principal de esta vista, y este frente, fue manejar la "_vista dentro de una vista_". Para lograrlo tomé algunas decisiones de diseño, principalmente porque no quería _inflar_ el proyecto con imágenes; incluso los íconos y algunas imágenes no son las mismas, pero se _entiende la idea_ y el flujo de la vista.

---

### Finance App

Diseño original: [Finance App](https://dribbble.com/shots/15162092-Finance-App-Visual-Exploration)

<figure class="figimg">
   <img src="https://cdn.dribbble.com/users/1212733/screenshots/15162092/media/0af4dfcdfeeb2fcc7bdf3f90fc5be192.png" alt="Diseño de interfaz de la app financiera">
</figure>

SwiftUI: [Repo en Github](https://github.com/dactrtr/financeApp)

<figure class="figimg">
   <img src="https://i.imgur.com/2wTzdUJ.jpg" alt="Diseño de interfaz de la app financiera">
<figcaption>
Sí, ese es literalmente mi fondo de pantalla
</figcaption>
</figure>

Esta vez el desafío fue **ponerme al día con los nuevos modificadores y vistas**, además volví a SwiftUI porque estaba un poco ocupado en el trabajo, así que más que una interacción bonita es simplemente una UI agradable.

---

### Team Management

Diseño original: [Team Management](https://dribbble.com/shots/13623650-Team-Management-App-Interaction)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/345970/screenshots/13623650/media/bf2782d9ef9a9130c8c3179cf9691a9a.mp4">
</video>

SwiftUI: [Repo en Github](https://github.com/dactrtr/TeamManagement)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/G4vr9oI.mp4">
</video>

El objetivo principal de esta vista fue lograr una _vista de tamaño completo_ compleja, y manejar un pequeño _modelo de datos_.

---

### Clean Bank UI [ROTO]

Diseño original: [Clean Bank UI](https://dribbble.com/shots/12310592-Clean-Bank-UI)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/32512/screenshots/12310592/media/2bc9ff5d134acf75fe6378093f3e2b47.mp4">
</video>

SwiftUI: [Repo en Github](https://github.com/dactrtr/Design-to-Swift)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/350e0BG.mp4">
</video>

En este proyecto logré recrear una **UI compleja en Playgrounds para iPad**, tendrás que creerme que funcionó, porque el código se rompió en una actualización de playgrounds para mac, y como el manejo de errores no es tan bueno, _no tengo idea de qué está roto_.

---

### Lekan Menu [ROTO]

Diseño original: [Lekan Menu](https://twitter.com/lalaekan/status/1285923482195419136)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/g1I0FS7.mp4">
</video>

SwiftUI: [Repo en Github](https://github.com/dactrtr/Design-to-Swift)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/wbX9tFG.mp4">
</video>

_El primero de la serie_, la idea era manejar una **animación con retraso**, lo hice con un manejo raro de booleanos, luego me di cuenta de que la manera correcta era usando el **modificador de animación**.

---
</div>

<div class="panel-kor lang-panel" markdown="1">

# 디자인에서 SwiftUI로

---

**disclaimer:** _이건 진행 중인 작업이에요. 곧 이 프로젝트들을 각자의 "프로젝트"로 옮기고 다른 레포지토리에서 관리할 거예요_ 아니면 절대 안 할 수도 있고요.

---

## 아이디어

**SwiftUI** 출시 후, _Storyboard_와 _UIKit_을 이것저것 해보고 나서, Apple의 인터페이스 개발이 **디자이너도 이해할 수 있는** 수준에 도달했고, 디자인-개발 작업 흐름으로 충분히 받아들일 만한 "충분한 코딩"이 됐다는 느낌이 들었어요 (개발 쪽에 더 파고들기 위해 지금 _Swift_를 배우고 있어요).

이 블로그 포스트는 _Dribbble에서 SwiftUI로 복제_해온 몇 가지 프로젝트들의 작은 **쇼룸**이에요. 오래된 프로젝트들은 실제로 망가진 상태예요. _iPad용 Playgrounds_에서 코딩했는데 어느 업데이트에서 어떻게 망가졌고, 당시 Playgrounds의 오류 처리는 아주 기본적이었어요.

## 프로젝트들

---

### Fintech

오리지널 디자인: [Fintech Dark Theme](https://dribbble.com/shots/15668611-Fintech-Dark-Theme)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/332219/screenshots/15668611/media/8ce3dbec9f3cf51e82974e23c9fc4833.mp4">
</video>

SwiftUI: [Github 레포지토리](https://github.com/dactrtr/Fintech)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/3zyQkGM.mp4">
</video>

이 뷰의 주요 목표는 "_뷰 안의 뷰_"를 관리하는 거였어요. 이를 위해 몇 가지 디자인적인 결정을 했는데, 주로 이미지로 프로젝트를 _부풀리고_ 싶지 않았기 때문이에요. 아이콘과 이미지 몇 개가 완전히 같지는 않더라도, 뷰의 _아이디어와 흐름_은 전달될 거예요.

---

### Finance App

오리지널 디자인: [Finance App](https://dribbble.com/shots/15162092-Finance-App-Visual-Exploration)

<figure class="figimg">
   <img src="https://cdn.dribbble.com/users/1212733/screenshots/15162092/media/0af4dfcdfeeb2fcc7bdf3f90fc5be192.png" alt="Finance app UI 디자인">
</figure>

SwiftUI: [Github 레포지토리](https://github.com/dactrtr/financeApp)

<figure class="figimg">
   <img src="https://i.imgur.com/2wTzdUJ.jpg" alt="Finance app UI 디자인">
<figcaption>
네, 이게 실제로 제 배경화면이에요
</figcaption>
</figure>

이번에는 **새로운 수정자와 뷰를 따라잡는 것**이 도전 과제였어요. 일이 좀 바빠서 SwiftUI로 돌아오게 됐는데, 멋진 인터랙션보다는 그냥 예쁜 UI예요.

---

### Team Management

오리지널 디자인: [Team Management](https://dribbble.com/shots/13623650-Team-Management-App-Interaction)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/345970/screenshots/13623650/media/bf2782d9ef9a9130c8c3179cf9691a9a.mp4">
</video>

SwiftUI: [Github 레포지토리](https://github.com/dactrtr/TeamManagement)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/G4vr9oI.mp4">
</video>

이 뷰의 주요 목표는 복잡한 _풀사이즈 뷰_를 구현하고 작은 _데이터 모델_을 관리하는 거였어요.

---

### Clean Bank UI [망가짐]

오리지널 디자인: [Clean Bank UI](https://dribbble.com/shots/12310592-Clean-Bank-UI)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/32512/screenshots/12310592/media/2bc9ff5d134acf75fe6378093f3e2b47.mp4">
</video>

SwiftUI: [Github 레포지토리](https://github.com/dactrtr/Design-to-Swift)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/350e0BG.mp4">
</video>

이 프로젝트에서 **iPad용 Playgrounds에서 복잡한 UI**를 재현했는데, 작동했다는 건 믿어주셔야 해요. Mac용 Playgrounds 업데이트에서 코드가 망가졌고, 오류 처리가 그다지 좋지 않아서 _뭐가 망가진지 전혀 모르겠어요_.

---

### Lekan Menu [망가짐]

오리지널 디자인: [Lekan Menu](https://twitter.com/lalaekan/status/1285923482195419136)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/g1I0FS7.mp4">
</video>

SwiftUI: [Github 레포지토리](https://github.com/dactrtr/Design-to-Swift)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/wbX9tFG.mp4">
</video>

_시리즈의 첫 번째_예요. **딜레이 애니메이션**을 관리하는 게 목적이었는데, 이상한 boolean 관리로 해결했다가, 나중에 올바른 방법이 **animation 수정자**를 사용하는 거라는 걸 알게 됐어요.

---
</div>

<div class="panel-jp lang-panel" markdown="1">

# デザインからSwiftUIへ

---

**免責事項:** _これは進行中の作業です。そのうちそれぞれを独自の「プロジェクト」に移して別々のリポジトリで管理するつもりです_ — あるいは永遠にしないかも。

---

## アイデア

**SwiftUI** のリリース後、_Storyboards_ と _UIKit_ をいじった結果、Apple のインターフェース開発は**デザイナーでも理解できる**レベルに達し、デザイン開発の有効なワークフローとして受け入れられるくらい「十分なコード」になったと感じました（さらに開発側に踏み込むため、今は _Swift_ を学んでいます）。

このブログ記事は、_Dribbble から SwiftUI へ複製_してきたいくつかのプロジェクトの小さな**ショールーム**です。古いプロジェクトは実際に壊れています。_iPad の playgrounds_ でコーディングしたものが、あるアップデートで何らかの理由で壊れてしまいました。当時の playgrounds のエラー処理はとても基本的なものでした。

## プロジェクト一覧

---

### Fintech

オリジナルデザイン: [Fintech Dark Theme](https://dribbble.com/shots/15668611-Fintech-Dark-Theme)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/332219/screenshots/15668611/media/8ce3dbec9f3cf51e82974e23c9fc4833.mp4">
</video>

SwiftUI: [Github リポジトリ](https://github.com/dactrtr/Fintech)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/3zyQkGM.mp4">
</video>

このビューの主な目標は「_ビューの中のビュー_」を管理することでした。そのためにいくつかのデザイン上の決断をしました。主にプロジェクトに画像を_詰め込みたくなかった_からです。アイコンや画像が完全に同じではなくても、ビューの_アイデアとフロー_は伝わると思います。

---

### Finance App

オリジナルデザイン: [Finance App](https://dribbble.com/shots/15162092-Finance-App-Visual-Exploration)

<figure class="figimg">
   <img src="https://cdn.dribbble.com/users/1212733/screenshots/15162092/media/0af4dfcdfeeb2fcc7bdf3f90fc5be192.png" alt="Finance App の UI デザイン">
</figure>

SwiftUI: [Github リポジトリ](https://github.com/dactrtr/financeApp)

<figure class="figimg">
   <img src="https://i.imgur.com/2wTzdUJ.jpg" alt="Finance App の UI デザイン">
<figcaption>
これ、実際に俺の壁紙なんだよね
</figcaption>
</figure>

今回のチャレンジは**新しいモディファイアやビューへのキャッチアップ**でした。仕事が少し忙しかったこともあって SwiftUI に戻ってきたので、素敵なインタラクションというよりはシンプルに良い UI という感じです。

---

### Team Management

オリジナルデザイン: [Team Management](https://dribbble.com/shots/13623650-Team-Management-App-Interaction)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/345970/screenshots/13623650/media/bf2782d9ef9a9130c8c3179cf9691a9a.mp4">
</video>

SwiftUI: [Github リポジトリ](https://github.com/dactrtr/TeamManagement)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/G4vr9oI.mp4">
</video>

このビューの主な目標は、複雑な_フルサイズビュー_を実現し、小さな_データモデル_を管理することでした。

---

### Clean Bank UI [壊れています]

オリジナルデザイン: [Clean Bank UI](https://dribbble.com/shots/12310592-Clean-Bank-UI)

<video width="320" height="auto" controls>
    <source src="https://cdn.dribbble.com/users/32512/screenshots/12310592/media/2bc9ff5d134acf75fe6378093f3e2b47.mp4">
</video>

SwiftUI: [Github リポジトリ](https://github.com/dactrtr/Design-to-Swift)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/350e0BG.mp4">
</video>

このプロジェクトでは **iPad の Playgrounds で複雑な UI** を再現することができました。動いていたことは信じてもらうしかありません。Mac 版 playgrounds のアップデートでコードが壊れてしまい、エラー処理がそれほど良くないため、_何が壊れているのかまったくわかりません_。

---

### Lekan Menu [壊れています]

オリジナルデザイン: [Lekan Menu](https://twitter.com/lalaekan/status/1285923482195419136)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/g1I0FS7.mp4">
</video>

SwiftUI: [Github リポジトリ](https://github.com/dactrtr/Design-to-Swift)

<video width="320" height="auto" controls>
    <source src="https://i.imgur.com/wbX9tFG.mp4">
</video>

_シリーズの第一弾_です。**ディレイアニメーション**を管理するのが目的で、変なブーリアン管理でなんとかやりましたが、後になって正しい方法は **animation モディファイア**を使うことだと気づきました。

---
</div>
