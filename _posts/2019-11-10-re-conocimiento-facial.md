---
title: Reconocimiento Facial
layout: post
author: dactrtr
titledesc: Como burlar a los robots
feature: https://media.giphy.com/media/rQG7d0Tzau6wo/source.gif
lang: esp
about: tutorial
---
{% include lang-tabs.html %}
<div class="panel-eng lang-panel" markdown="1">

## They're watching us

---

**disclaimer:** _this post probably has a ton of nerdy information, **jargon** and **mumbo jumbo**, but knowledge is what you need to understand and **fool** certain things._

---

At this point everyone knows what facial recognition is. We've seen it in TV shows, movies, used it in our cameras, and even used it to unlock our phones. _Are you telling me my phone recognizes my face or that it detects it?_ Oh! Great question.

## Detection or Recognition?

**Yes**, they are **not** the same thing, but one is fundamental to the other. What our camera does when we take a photo is **detect** a face — this means it searches for **recognizable patterns** like eyes, nose, and mouth within all that negative space in your face, through a series of tests, in a kind of decision tree, searching for these patterns in rectangles of defined zones, until it can say: yes, this is a face. This process is an algorithm known as 📼[The Viola-Jones Algorithm](https://www.youtube.com/watch?v=uEJ71VlUmMQ) and it's so effective that it's still used over **Deep Learning** or **Machine Learning** or any other **Something Learning**.

Once a face has been detected, the **recognition** process begins. Sounds familiar — obviously it's what we do all the time to recognize our friends. At the end of the day, algorithms are the _mathematized_ versions of the processes we do every day. The ability to recognize and see faces is something we as humans have been doing for <s>years</s> centuries, like that piece of toast I had this morning that had the face of <s>Karol Dance</s> Kike Morandé (suck it).

<iframe width="560" height="315" src="https://www.youtube.com/embed/t4DT3tQqgRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> " I think my blackness is interfiring with..."

HP COMPUTERS ARE RACIST

By today this technology has advanced a lot since its beginnings and is fully integrated into our lives. No, [I'm not going](https://www.welivesecurity.com/la-es/2015/08/27/tecnologia-de-reconocimiento-facial/) to [write a boring post](https://medium.com/@spot_blog/una-breve-historia-del-reconocimiento-facial-vision-blog-5a76fdfe4865) about the history of facial recognition — plenty of people have already done that — but I will give a light explanation of how this technology works and how to fool it, just because it gives me a reason to write and use gifs, **2** of my **3** favorite things.

**The lesson:** if they can't detect your face they can't recognize it (obvious), and gifs are awesome.

## How does it work?

### Two fingers of forehead

Every face has distinctive features. Part of our brain has been trained for <s>years</s> centuries to do this. Some of us are worse at it and confuse people — but like I said, [I'm not going to](https://www.wired.com/2012/01/brain-face-recognition/) [ramble](https://www.smithsonianmag.com/science-nature/how-does-your-brain-recognize-faces-180963583/), but [here are some links](https://www.bbc.com/future/article/20140730-why-do-we-see-faces-in-objects) about [Pareidolia](https://es.wikipedia.org/wiki/Pareidolia).

<figure class="figimg">
   <img src="https://miro.medium.com/max/1500/0*Uaq5M_Vh35yI1i1I" alt="maths kids, you will use math after school">
<figcaption>
"I'll never use math outside of school" — yeah, a lot actually.
</figcaption>
</figure>

Facial recognition software recognizes these features, just like we do, except in a much more... yes, you guessed it, **Mathematical** way. That thing you swore you'd never use again after high school and **thought was useless**, until you had to calculate your gross salary, net pay, and health insurance percentage and other robberies with _fancy names_. The software recognizes certain characteristics like:

- Distance between the **eyes**.
- Width of the **nose**.
- Depth of the **eye socket**.
- The shape of the **cheeks**.
- The length of the **jaw**.

And a long etcetera — between 60 to 80 facial features. I know, you're thinking about that **instagram** filter that's so funny, the one that makes you look like **Felipito** or puts a **flower crown** on you. That's facial detection — it "detects a face," not "detects **your** face" (recognition).

These distances are transformed into a mathematical formula and, if there's a database — **there is** — a comparison is made, and boom: according to the power of mathematics, this isn't your first time passing through this airport.

When I say there are **databases** I'm not trying to make you paranoid, but [Facebook has a very large database](https://www.theguardian.com/technology/2019/aug/09/facebook-facial-recognition-lawsuit-can-proceed-us-court), and every time you tag a friend or a friend tags you, you're helping that database grow and become more precise. Yes, we ourselves have been training and improving these algorithms.

### The future is 3D

Right now the trend is 3D — instead of 2D images, 3D models of the face surface are used. This is basically how **Apple's FaceID** works. This is where I really geek out because it's essentially a 📼[Xbox Kinect](https://www.youtube.com/watch?v=uq9SEJxZiUg) in miniature that uses hundreds of _mini lasers_ to generate a 3D model of your face, which is much more precise and _wow so cool_.

<iframe width="560" height="315" src="https://www.youtube.com/embed/g4m6StzUcOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**3D facial recognition** can also be done from video, and it works through frame-by-frame analysis of facial features — basically 2D analysis done many times over.

Both systems work based on contrasts and detection of certain facial characteristics. **I could have saved everything above by just saying that facial recognition works based on contrasts**, but I like giving a bit more detail. Which brings us to the fun part.

## Can you see me? Not anymore! 👀

<figure class="figimg">
   <img src="https://media.giphy.com/media/fceh5CXz9mjHa/source.gif" alt="TINFOIL">
<figcaption>
TIN FOIL HAT ALWAYS DO THE JOB.
</figcaption>
</figure>

So now we basically know how facial detection and facial recognition work. Since we're not a group of hackers who can destroy the world's face databases, we can only appeal to preventing our faces from being detected.

#### Survivor Starter Kit

##### Wear a hat and sunglasses.

<figure class="figimg">
   <img src="https://media.giphy.com/media/U8MnmuVDpK264/source.gif" alt="error 404 human not found">
<figcaption>
"cannot detect humans, all systems fail".
</figcaption>
</figure>

Besides preventing those **malicious robots from detecting you**, it goes perfectly with summer season. Swap the **sunglasses** for goggles and, in addition to not being detected and shading from the sun, you can **protect your eyes**.

##### Go back to your EMO roots

<figure class="figimg">
   <img src="https://media.giphy.com/media/Tj7m9HrHaPmQE/source.gif" alt="emo hair covering face">
<figcaption>
"dude MCR is back"
"yeah but what about RATM?".
</figcaption>
</figure>

Yes, **if you go back to your emo hairstyle** you'll manage to cover part of your face and make it harder to recognize. **+10 stealth**, **+5 depression**, **+4 MCR**, **-15 mobility**. Also [MCR is coming back](https://www.distractify.com/p/is-my-chemical-romance-back-together) — what better moment to return to your roots.

##### Makeup

<figure class="figimg">
   <img src="https://pbs.twimg.com/media/DhDrCwdVAAAwvEW?format=jpg&name=medium" alt="INSANE CLOWN POSE">
<figcaption>
Miracles!.
</figcaption>
</figure>

That's right, use makeup — but with patterns that redefine parts of your face, like the jaw, eyebrows, the bridge of your nose, or go with the foolproof [Juggalo](https://twitter.com/tahkion/status/1013304616958607360?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1013304616958607360&ref_url=https%3A%2F%2Fconsequenceofsound.net%2F2019%2F07%2Fjuggalo-makeup-facial-recognition%2F) look from 📼[Insane Clown Posse](https://www.youtube.com/watch?v=8GyVx28R9-s). Or you can always be a bit more expressive and take it to the [next level](https://cvdazzle.com/).

#### Survivor Pro Kit

##### Clothing or accessories with NIR LEDs

<figure class="figimg">
   <img src="https://www.survivopedia.com/wp-content/uploads/2016/04/goggles.jpg" alt="NIR LED goggles blocking facial recognition">
<figcaption>
google glass is back baby.
</figcaption>
</figure>

I told you this is **PRO**. We're talking about glasses with **Near Infra Red** lights that overload the light sensors of digital cameras, creating images impossible to use for facial recognition.

##### Retro-reflective clothing

<figure class="figimg">
   <img src="https://www.survivopedia.com/wp-content/uploads/2016/04/android1.jpg" alt="snapchat lens basic">
<figcaption>
DAT STYLE.
</figcaption>
</figure>

No, it's not an excuse to wear a yellow jacket, but it is one to wear some **ridiculous** but highly effective glasses. It works the same way as the **techno-goggles** by overloading the light sensors.

There are other methods like using camera detectors and other gadgets worthy of <s>James Bond</s> Snake, which lean more toward evasion rather than fooling — very paranoia vibe, _I've read all of [Mitnick's](https://www.youtube.com/watch?v=K-96JmC2AkE) books_.

Now here's the <s>discography</s> **Bibliography**, with a pizza marking the interesting articles or videos.

### Bibliography

- [How Facial recognition software works](https://us.norton.com/internetsecurity-iot-how-facial-recognition-software-works.html)
- [Facial Recognition](https://electronics.howstuffworks.com/gadgets/high-tech-gadgets/facial-recognition.htm)
- [6 ways to defeat facial recognition](https://www.survivopedia.com/6-ways-to-defeat-facial-recognition/)
- [Anti-Surveillance Camouflage for Your Face](https://www.theatlantic.com/technology/archive/2014/07/makeup/374929/)
- [Anti-facial recognition-makeup](https://www.popsci.com/read/anti-facial-recognition-makeup)
- [How to avoid facial recognition in public](https://www.technadu.com/how-to-avoid-facial-recognition-in-public/29462/)
- 🍕📼[Detecting Faces (Viola Jones Algortihm)](https://www.youtube.com/watch?v=uEJ71VlUmMQ&)
- 📼[How Face ID works... Probably](https://www.youtube.com/watch?v=mwTaISbA87A&)
- 🍕[How your brain recognize all those faces](https://www.smithsonianmag.com/science-nature/how-does-your-brain-recognize-faces-180963583/)
- [Why do we see faces in objects](https://www.bbc.com/future/article/20140730-why-do-we-see-faces-in-objects)
- 📼[How the kinect depth sensor works in 2 minutes](https://www.youtube.com/watch?v=uq9SEJxZiUg)
- 📼[12.1 What is the Kinect? - Kinect and Processing tutorial](https://www.youtube.com/watch?v=QmVNgdapJJM)

Comments are open for you to leave your hate, point out all the accents I missed, and all those classic internet things.

_I always think I should have some kind of sign-off, Truman Show style_

</div>

<div class="panel-esp lang-panel" markdown="1">
<span class="original-badge">Original</span>

## Nos estan mirando

---

**disclaimer:** _este post probablemente tenga un montón de información ñoña, **jargon** y **mumbo jumbo**, pero el conocimiento es lo necesario para poder entender y **burlar** algunas cosas._

---

A estas alturas del partido todos sabemos que es el reconocimiento facial, lo hemos visto en series, películas, usado en nuestras cámaras e incluso usado para desbloquear nuestro teléfono. _¿Me dices que mi teléfono reconoce mi cara o que la detecta?_ ah! muy buena pregunta.

## ¿Detección o Reconocimiento?

**Si**, **no** es lo mismo, pero una es fundamental para la otra. Lo que hace nuestra cámara al momento de sacar una foto es **detectar** un rostro, esto significa que busca **patrones reconocibles** como ojos, nariz, boca en todo ese espacio negativo en tu rostro, mediante una serie de pruebas, en una especie de arbol de desiciones, en la que se van buscando estos patrones en rectangulos de zonas definidas, hasta decir, si, esta es una cara. Este proceso es un algoritmo conocido como 📼[Algoritmo Viola Jones](https://www.youtube.com/watch?v=uEJ71VlUmMQ) y es tan efectivo que se sigue usando por sobre usar **Deep Learning** o **Machine Learning** o alguna otra **Cosa Learning**.

Una vez que se ha detectado una cara empieza el proceso de **reconocimiento**, les suena común, obvio es lo que hacemos siempre para reconocer a nuestros amigos. Al fin del día los algoritmos son las versiones _matematizadas_ de los procesos que hacemos día a día, la habilidad de reconocer y ver rostros es algo que como humanos llevamos <s>años</s> siglos haciendo, como esa tostada que me comí en la mañana que tenía la cara de <s>Karol Dance</s> Kike Morandé (chúpalo).

<iframe width="560" height="315" src="https://www.youtube.com/embed/t4DT3tQqgRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> " I think my blackness is interfiring with..."

HP COMPUTERS ARE RACIST

Al día de hoy esta tecnología a avanzado mucho desde sus inicios y esta full integrada a nuestras vidas. No, [no voy](https://www.welivesecurity.com/la-es/2015/08/27/tecnologia-de-reconocimiento-facial/) a [hacer un post](https://medium.com/@spot_blog/una-breve-historia-del-reconocimiento-facial-vision-blog-5a76fdfe4865) latero con la historia del reconocimiento facial, ya mucha gente lo ha hecho, pero si una leve explicación de como funciona esta técnologia y como burlarla, solo porque me da una razón para escribir y usar gifs, **2** de mis **3** cosas favoritas.

**Aprendizaje** Si no pueden detectar tu cara no la pueden reconocer (obvio) y los gifs son bkns.

## ¿Cómo funciona?

### 2Dedos de frente

Cada cara tiene rasgos distintivos, digamos que parte de nuestro cerebro ha estado entrenado durante <s>años</s> siglos para hacer esto, si algunos somos mas malos que otros y confundimos gente, ya lo dije [no voy](https://www.wired.com/2012/01/brain-face-recognition/) a [divagar](https://www.smithsonianmag.com/science-nature/how-does-your-brain-recognize-faces-180963583/), pero [les dejo](https://www.bbc.com/future/article/20140730-why-do-we-see-faces-in-objects) algunos enlaces sobre [Pareidolia](https://es.wikipedia.org/wiki/Pareidolia).

<figure class="figimg">
   <img src="https://miro.medium.com/max/1500/0*Uaq5M_Vh35yI1i1I" alt="maths kids">
<figcaption>
"nunca voy a usar matemáticas fuera del colegio" si, caleta.
</figcaption>
</figure>

El software de reconocimiento facial reconoce estos rasgos, al igual que nosotros, solo que de una manera mucho más... si, lo adivinaste, **Matemáticas** esa cosa que juraste nunca mas usar después de cuarto medio y que **pensaste que era inútil**, hasta que te toco calcular el sueldo bruto, el líquido y el porcentaje de la isapre y otros robos con _fancy names_. El software reconoce ciertas carácteristicas como:

- Distancia entre los **ojos**.
- Ancho de la **nariz**.
- Profundidad de la **cavidad ocular**.
- La forma de las **mejillas**.
- El largo de la **mandídubla**.

Y un largo etcetéra, entre 60 a 80, rasgos faciales, lo se, estas pensando en ese filtro de **instagram** tan chistoso que hace que te veas como **Felipito** o te pone una **corona de flores**, eso es detección facial, lo que hace es "detectar una cara" no "detectar **tu** cara" (reconocimiento).

Estas distancias son transformadas en una formula matemática y, si hay una base de datos, **las hay**, se hace una comparación y pum, según el poder de las matématicas, no es primera vez que pasas por este aeropuerto.

Cuando digo que hay **bases de datos** no es para volverse loco, pero, [Facebook tiene una base de datos muy grande](https://www.theguardian.com/technology/2019/aug/09/facebook-facial-recognition-lawsuit-can-proceed-us-court), y cada vez que etiquetan a un amigo o un amigo los etiqueta ayudan a esa base de datos a crecer y obtener mas presición, si, nosotros mismos hemos estado entrenando y mejorando estos algoritmos.

### El futuro es TRI-DI

Actualmente la moda, es el 3D, en vez de usar imágenes 2D se usan modelos 3D de la superficie de la cara, principalmente es como funciona **FaceId de Apple**, esta es la parte donde pelo el cable ya que es básicamente una 📼[Xbox Kinect](https://www.youtube.com/watch?v=uq9SEJxZiUg) en miniatura que usa cientos de _mini lasers_ para generar un modelo 3D de tu rostro lo cual es mucho más preciso y _wow la wea bkn_.

<iframe width="560" height="315" src="https://www.youtube.com/embed/g4m6StzUcOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

El **reconocimiento facial con 3D**, támbien se puede hacer a base de videos y funciona a tráves del analísis cuadro por cuadro de las facciones, básicamente es un analisis 2D muchas veces.

Ambos sistemas funcionan a base de contrastes y bueno detección de ciertas carácteristicas faciales, **podría haber ahorrado todo lo anterior solo diciendo que el reconocimiento facial funciona a base de contrastes**, pero me gusta dar un poco más de detalles, lo cual nos lleva a la parte divertida.

## ¿Me ves? ya no! 👀

<figure class="figimg">
   <img src="https://media.giphy.com/media/fceh5CXz9mjHa/source.gif" alt="TINFOIL">
<figcaption>
TIN FOIL HAT ALWAYS DO THE JOB.
</figcaption>
</figure>

Y sabemos básicamente como funcionan la detección facial y el reconocimiento facial, como no somos un grupo de hackers que puede destruir las bases de datos de caras en el mundo, solo podemos apelar a evitar que detecten nuestras caras.

#### Survivor Starter Kit

##### Usa un gorro y lentes de sol.

<figure class="figimg">
   <img src="https://media.giphy.com/media/U8MnmuVDpK264/source.gif" alt="error 404">
<figcaption>
"no puedo detectar humanos, all systems fails".
</figcaption>
</figure>

Además de evitar que esos **malignos robots te detecten** va justo adhoc con la temporada veraniega, si cambias los **lentes de sol** por antiparras, además de no ser detectado y capear el sol puedes **proteger tus ojos**.

##### Vuelve a tus raices EMO

<figure class="figimg">
   <img src="https://media.giphy.com/media/Tj7m9HrHaPmQE/source.gif" alt="">
<figcaption>
"weona volvió MCR"
"no y RATM?".
</figcaption>
</figure>

Si, **si vuelves a tu peinado emo** lograras tapar parte de tu cara y hacer que sea mas dificil de reconocer, **+10 stealth**, **+5 depression**, **+4 MCR**, **-15 mobility**. Además [MCR vuelve](https://www.distractify.com/p/is-my-chemical-romance-back-together) y que mejor momento de volver a tus raíces.

##### Maquillaje

<figure class="figimg">
   <img src="https://pbs.twimg.com/media/DhDrCwdVAAAwvEW?format=jpg&name=medium" alt="INSANE CLOWN POSE">
<figcaption>
Miracles!.
</figcaption>
</figure>

Así es usa maquillaje, pero con patrones que redefinan parte de tu cara, como es la mandíbula, las cejas, el puente de la nariz o usar el infalible [Juggalo](https://twitter.com/tahkion/status/1013304616958607360?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1013304616958607360&ref_url=https%3A%2F%2Fconsequenceofsound.net%2F2019%2F07%2Fjuggalo-makeup-facial-recognition%2F) de 📼[Insane Clown pose](https://www.youtube.com/watch?v=8GyVx28R9-s) siempre puedes ser un poco mas expresiv@ y llevarlo al [siguiente nivel](https://cvdazzle.com/).

#### Survivor Profesional Kit

##### Ropa o accesorios con NIR LEDS

<figure class="figimg">
   <img src="https://www.survivopedia.com/wp-content/uploads/2016/04/goggles.jpg" alt="snapchat lens pro">
<figcaption>
google glass volvío.
</figcaption>
</figure>

Les dije esto es **PRO**, estamos hablando de lentes con luces **Near Infra Red**, que sobrecargan los censores de luz de las cámaras digitales, creando imágenes imposibles de usar para Reconocimiento Facial.

##### Ropa retro-reflectante

<figure class="figimg">
   <img src="https://www.survivopedia.com/wp-content/uploads/2016/04/android1.jpg" alt="snapchat lens basic">
<figcaption>
DAT STYLE.
</figcaption>
</figure>

No, no es una excusa para vestirse de chaqueta amarilla, pero si para usar unos lentes **ridículos**, pero altamente efectivos, funciona de la misma manera que las **tecno-antiparras** sobre cargando los sensores de luz.

Hay otros métodos como usar detectores de cámaras y otros artilugios dignos de <s>James Bond</s> Snake y que van mas de la onda de evadir en vez de burlar, onda muy paranoia _me leí todos los libros de [Mitnick](https://www.youtube.com/watch?v=K-96JmC2AkE)_.

Ahora les dejo la <s>discografía</s> **Bibliografía** y marcados con una pizza los articulos o videos interesantes.

### Bibliografía

- [How Facial recognition software works](https://us.norton.com/internetsecurity-iot-how-facial-recognition-software-works.html)
- [Facial Recognition](https://electronics.howstuffworks.com/gadgets/high-tech-gadgets/facial-recognition.htm)
- [6 ways to defeat facial recognition](https://www.survivopedia.com/6-ways-to-defeat-facial-recognition/)
- [Anti-Surveillance Camouflage for Your Face](https://www.theatlantic.com/technology/archive/2014/07/makeup/374929/)
- [Anti-facial recognition-makeup](https://www.popsci.com/read/anti-facial-recognition-makeup)
- [How to avoid facial recognition in public](https://www.technadu.com/how-to-avoid-facial-recognition-in-public/29462/)
- 🍕📼[Detecting Faces (Viola Jones Algortihm)](https://www.youtube.com/watch?v=uEJ71VlUmMQ&)
- 📼[How Face ID works... Probably](https://www.youtube.com/watch?v=mwTaISbA87A&)
- 🍕[How your brain recognize all those faces](https://www.smithsonianmag.com/science-nature/how-does-your-brain-recognize-faces-180963583/)
- [Why do we see faces in objects](https://www.bbc.com/future/article/20140730-why-do-we-see-faces-in-objects)
- 📼[How the kinect depth sensor works in 2 minutes](https://www.youtube.com/watch?v=uq9SEJxZiUg)
- 📼[12.1 What is the Kinect? - Kinect and Processing tutorial](https://www.youtube.com/watch?v=QmVNgdapJJM)

La sección de comentarios queda abierta para que dejen su odio, digan todas las tildes que no use y esas cosas clásicas del internet.

_siempre pienso en que debería tener alguna especie de despedida a lo truman show_

</div>

<div class="panel-kor lang-panel" markdown="1">

## 우리를 보고 있어

---

**면책 조항:** _이 포스트는 아마 너드 정보, **용어**, **횡설수설**이 가득할 테지만, 지식이야말로 어떤 것들을 이해하고 **속이기** 위해 필요한 거예요._

---

이제 다들 얼굴 인식이 뭔지 알죠. TV 시리즈, 영화에서 봤고, 카메라에서 써봤고, 심지어 폰 잠금 해제에도 써봤잖아요. _"내 폰이 내 얼굴을 인식하는 건지, 감지하는 건지?"_ 오! 아주 좋은 질문이에요.

## 감지 vs 인식?

**네**, **같은 게 아니에요**. 하지만 하나는 다른 하나에 필수적이에요. 사진을 찍을 때 카메라가 하는 건 얼굴 **감지**예요. 즉, 얼굴의 그 음공간 안에서 눈, 코, 입 같은 **인식 가능한 패턴**을 찾아요. 일련의 테스트를 통해, 일종의 의사결정 트리로, 정의된 구역의 직사각형 안에서 이 패턴을 찾다가 "네, 이건 얼굴이에요"라고 말할 수 있을 때까지 반복해요. 이 프로세스는 📼[Viola-Jones 알고리즘](https://www.youtube.com/watch?v=uEJ71VlUmMQ)이라고 알려진 알고리즘으로, **딥러닝**, **머신러닝**, 또는 다른 **무슨무슨러닝**보다 여전히 쓰일 만큼 효과적이에요.

얼굴이 감지되면 **인식** 프로세스가 시작돼요. 익숙하게 들리죠. 당연히 우리가 친구들을 알아볼 때 항상 하는 거잖아요. 결국 알고리즘은 우리가 매일 하는 프로세스를 _수학화_한 버전이에요. 얼굴을 인식하고 보는 능력은 인간으로서 <s>몇 년</s>몇 세기 동안 해온 거예요. 오늘 아침 먹은 토스트처럼요, 그 위에 <s>Karol Dance</s> Kike Morandé 얼굴이 있었어요 (야호).

<iframe width="560" height="315" src="https://www.youtube.com/embed/t4DT3tQqgRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> " I think my blackness is interfiring with..."

HP COMPUTERS ARE RACIST

오늘날 이 기술은 처음과 비교해 많이 발전해 우리 삶에 완전히 통합되어 있어요. 얼굴 인식의 역사에 대한 [지루한 포스트](https://www.welivesecurity.com/la-es/2015/08/27/tecnologia-de-reconocimiento-facial/)는 [쓰지 않을 거예요](https://medium.com/@spot_blog/una-breve-historia-del-reconocimiento-facial-vision-blog-5a76fdfe4865). 이미 많은 사람들이 했으니까요. 하지만 이 기술이 어떻게 작동하는지, 그리고 어떻게 속이는지는 가볍게 설명할게요. 글 쓸 이유와 gif 쓸 이유가 생기니까요, 제가 제일 좋아하는 **3**가지 중 **2**가지예요.

**교훈:** 얼굴을 감지할 수 없으면 인식도 할 수 없어요 (당연하죠). 그리고 gif는 최고예요.

## 어떻게 작동해?

### 이마 두 손가락

모든 얼굴에는 고유한 특징이 있어요. 우리 뇌의 일부가 <s>몇 년</s>몇 세기 동안 이걸 하도록 훈련돼왔어요. 어떤 사람들은 더 못해서 사람을 헷갈리기도 하지만, [뇌가 얼굴을 어떻게 인식하는지](https://www.wired.com/2012/01/brain-face-recognition/)에 대해 [장황하게 늘어놓지](https://www.smithsonianmag.com/science-nature/how-does-your-brain-recognize-faces-180963583/) 않을게요. [Pareidolia](https://es.wikipedia.org/wiki/Pareidolia)에 대한 [링크 몇 개](https://www.bbc.com/future/article/20140730-why-do-we-see-faces-in-objects)만 남겨둘게요.

<figure class="figimg">
   <img src="https://miro.medium.com/max/1500/0*Uaq5M_Vh35yI1i1I" alt="수학은 학교 밖에서도 쓰임, 아이들아">
<figcaption>
"학교 끝나면 수학 안 쓸 거야" — 네, 실제로 엄청 써요.
</figcaption>
</figure>

얼굴 인식 소프트웨어는 우리가 하는 것처럼 이 특징들을 인식해요. 하지만 훨씬 더... 맞아요, **수학적인** 방식으로요. 고등학교 졸업하면 다시는 안 쓸 거라고 맹세했고 **쓸모없다고 생각했던** 그것 말이에요. 총 급여, 실수령액, 건강보험료 비율 같은 _멋진 이름이 붙은_ 각종 갈취를 계산해야 할 때까지는요. 소프트웨어가 인식하는 특징들:

- **눈** 사이의 거리.
- **코**의 너비.
- **눈 소켓**의 깊이.
- **볼**의 형태.
- **턱**의 길이.

등등, 60~80개의 얼굴 특징들이 있어요. 알아요, 그 재미있는 **인스타그램** 필터 생각하고 있겠죠. **Felipito**처럼 보이게 하거나 **꽃 왕관**을 씌워주는 거요. 그건 얼굴 감지예요 — "얼굴을 감지"하는 거지 "**당신의** 얼굴을 감지"(인식)하는 게 아니에요.

이 거리들은 수식으로 변환되고, 데이터베이스가 있으면——**있어요**——비교가 이루어지고, 짠: 수학의 힘에 따르면, 이번이 당신이 이 공항을 처음 통과하는 게 아니에요.

**데이터베이스**가 있다고 해서 편집증이 될 필요는 없지만, [Facebook은 매우 큰 데이터베이스를 보유하고 있어요](https://www.theguardian.com/technology/2019/aug/09/facebook-facial-recognition-lawsuit-can-proceed-us-court). 친구를 태그하거나 친구가 당신을 태그할 때마다 그 데이터베이스가 커지고 더 정밀해지는 걸 돕는 거예요. 네, 우리 스스로가 이 알고리즘들을 훈련시키고 개선시켜왔어요.

### 미래는 3D

요즘 트렌드는 3D예요. 2D 이미지 대신 얼굴 표면의 3D 모델을 사용해요. 이게 기본적으로 **Apple의 FaceID**가 작동하는 방식이에요. 여기서 저는 진짜 너드 본색이 나오는데, 기본적으로 소형 📼[Xbox Kinect](https://www.youtube.com/watch?v=uq9SEJxZiUg)로, 수백 개의 _미니 레이저_를 사용해 얼굴의 3D 모델을 생성해요. 훨씬 더 정밀하고 _와 진짜 멋진거_예요.

<iframe width="560" height="315" src="https://www.youtube.com/embed/g4m6StzUcOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**3D 얼굴 인식**은 동영상으로도 할 수 있어요. 얼굴 특징의 프레임 단위 분석을 통해 작동해요. 기본적으로 2D 분석을 여러 번 반복하는 거예요.

두 시스템 모두 대비와 특정 얼굴 특징 감지를 기반으로 작동해요. **"얼굴 인식은 대비를 기반으로 한다"고 처음부터 말하면 됐었는데**, 조금 더 자세한 걸 설명하는 걸 좋아해서요. 이제 재미있는 부분으로 가볼게요.

## 나 보여? 이제 안 보여! 👀

<figure class="figimg">
   <img src="https://media.giphy.com/media/fceh5CXz9mjHa/source.gif" alt="TINFOIL">
<figcaption>
양철 모자는 항상 효과가 있어요.
</figcaption>
</figure>

자, 이제 얼굴 감지와 얼굴 인식이 어떻게 작동하는지 기본적으로 알았어요. 세계의 얼굴 데이터베이스를 파괴할 수 있는 해커 집단이 아닌 이상, 우리 얼굴이 감지되는 걸 막는 것밖에 할 수 없어요.

#### 서바이버 스타터 키트

##### 모자와 선글라스 쓰기.

<figure class="figimg">
   <img src="https://media.giphy.com/media/U8MnmuVDpK264/source.gif" alt="오류 404 인간 없음">
<figcaption>
"인간을 감지할 수 없음, 시스템 전체 실패".
</figcaption>
</figure>

**악의적인 로봇이 당신을 감지하는 걸 막는** 것 외에도, 여름 시즌에 완벽하게 어울려요. **선글라스**를 고글로 바꾸면, 감지를 피하고 햇빛을 막으면서 **눈도 보호할 수 있어요**.

##### EMO 뿌리로 돌아가기

<figure class="figimg">
   <img src="https://media.giphy.com/media/Tj7m9HrHaPmQE/source.gif" alt="에모 머리로 얼굴 가리기">
<figcaption>
"야 MCR 돌아왔대"
"그래서 RATM은?".
</figcaption>
</figure>

맞아요, **에모 헤어스타일로 돌아가면** 얼굴의 일부를 가려서 인식하기 더 어렵게 만들 수 있어요. **+10 스텔스**, **+5 우울감**, **+4 MCR**, **-15 기동성**. 게다가 [MCR이 돌아오고 있어요](https://www.distractify.com/p/is-my-chemical-romance-back-together) — 뿌리로 돌아갈 이보다 좋은 타이밍이 없죠.

##### 메이크업

<figure class="figimg">
   <img src="https://pbs.twimg.com/media/DhDrCwdVAAAwvEW?format=jpg&name=medium" alt="인세인 클라운 포즈">
<figcaption>
Miracles!.
</figcaption>
</figure>

맞아요, 메이크업을 쓰세요. 단, 턱, 눈썹, 콧등 같은 얼굴의 일부를 재정의하는 패턴으로요. 아니면 확실한 [Juggalo](https://twitter.com/tahkion/status/1013304616958607360?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1013304616958607360&ref_url=https%3A%2F%2Fconsequenceofsound.net%2F2019%2F07%2Fjuggalo-makeup-facial-recognition%2F) 룩 📼[Insane Clown Posse](https://www.youtube.com/watch?v=8GyVx28R9-s) 스타일로 가거나, 좀 더 표현적으로 [다음 레벨](https://cvdazzle.com/)로 가는 것도 좋아요.

#### 서바이버 프로 키트

##### NIR LED가 달린 옷이나 액세서리

<figure class="figimg">
   <img src="https://www.survivopedia.com/wp-content/uploads/2016/04/goggles.jpg" alt="NIR LED 고글로 얼굴 인식 차단">
<figcaption>
구글 글래스 돌아왔네.
</figcaption>
</figure>

이건 **프로**라고 했죠. 디지털 카메라의 광 센서를 과부하시켜서, 얼굴 인식에 쓸 수 없는 이미지를 만드는 **근적외선(Near Infra Red)** 빛이 달린 안경 이야기예요.

##### 재귀 반사 소재 옷

<figure class="figimg">
   <img src="https://www.survivopedia.com/wp-content/uploads/2016/04/android1.jpg" alt="snapchat 렌즈 기본형">
<figcaption>
DAT STYLE.
</figcaption>
</figure>

노란 재킷 입을 핑계는 아니지만, **터무니없지만** 효과적인 안경 낄 핑계는 돼요. **테크노 고글**과 같은 방식으로 광 센서를 과부하시켜요.

카메라 감지기나 <s>제임스 본드</s> Snake 스타일의 다른 가젯을 쓰는 방법도 있어요. 속이기보다는 회피하는 쪽에 더 가까운 방법들이에요. 아주 편집증적인 _[Mitnick](https://www.youtube.com/watch?v=K-96JmC2AkE)의 책을 전부 읽었어_ 느낌이에요.

이제 <s>디스코그래피</s> **참고 문헌**을 드릴게요. 피자 표시가 있는 게 흥미로운 글이나 영상이에요.

### 참고 문헌

- [How Facial recognition software works](https://us.norton.com/internetsecurity-iot-how-facial-recognition-software-works.html)
- [Facial Recognition](https://electronics.howstuffworks.com/gadgets/high-tech-gadgets/facial-recognition.htm)
- [6 ways to defeat facial recognition](https://www.survivopedia.com/6-ways-to-defeat-facial-recognition/)
- [Anti-Surveillance Camouflage for Your Face](https://www.theatlantic.com/technology/archive/2014/07/makeup/374929/)
- [Anti-facial recognition-makeup](https://www.popsci.com/read/anti-facial-recognition-makeup)
- [How to avoid facial recognition in public](https://www.technadu.com/how-to-avoid-facial-recognition-in-public/29462/)
- 🍕📼[Detecting Faces (Viola Jones Algortihm)](https://www.youtube.com/watch?v=uEJ71VlUmMQ&)
- 📼[How Face ID works... Probably](https://www.youtube.com/watch?v=mwTaISbA87A&)
- 🍕[How your brain recognize all those faces](https://www.smithsonianmag.com/science-nature/how-does-your-brain-recognize-faces-180963583/)
- [Why do we see faces in objects](https://www.bbc.com/future/article/20140730-why-do-we-see-faces-in-objects)
- 📼[How the kinect depth sensor works in 2 minutes](https://www.youtube.com/watch?v=uq9SEJxZiUg)
- 📼[12.1 What is the Kinect? - Kinect and Processing tutorial](https://www.youtube.com/watch?v=QmVNgdapJJM)

댓글 섹션은 열려있어요. 혐오를 남기거나, 내가 빠뜨린 것들을 지적하거나, 인터넷의 그 고전적인 것들을 해도 좋아요.

_항상 트루먼 쇼 스타일의 마무리 인사가 있어야 한다고 생각해요_

</div>

<div class="panel-jp lang-panel" markdown="1">

## 見られてる

---

**注記:** _このポストはたぶんナード向けな情報、**jargon**、**mumbo jumbo** が満載ですが、知識こそが物事を理解して**出し抜く**ために必要なものです。_

---

今更ですが顔認識が何かはみんな知っていますよね。ドラマや映画で見て、カメラで使って、スマホのロック解除にも使ってきた。_「スマホが自分の顔を認識するって、それって検出するってこと？」_ あ！いい質問です。

## 検出と認識、何が違う？

**はい**、**同じじゃないです**。でも片方はもう片方に必須です。写真を撮るとき、カメラがやっていることは顔の**検出**です。つまり、顔の余白部分に目・鼻・口といった**認識可能なパターン**を探します。一種の決定木を通じた一連のテストで、定義されたエリアの矩形内でパターンを探し続けて、「はい、これは顔だ」と判断します。このプロセスは 📼[Viola-Jonesアルゴリズム](https://www.youtube.com/watch?v=uEJ71VlUmMQ) として知られるアルゴリズムで、**Deep Learning** や **Machine Learning** や他の**何かLearning** を差し置いて今でも使われるほど効果的です。

顔が検出されたら、**認識**のプロセスが始まります。聞き覚えありますよね。当然、友達を見分けるときにいつもやっていることです。突き詰めれば、アルゴリズムは私たちが毎日やっているプロセスを_数学化_したものです。顔を認識・識別する能力は人間として<s>何年も</s>何世紀もやってきたことで、今朝食べたトースト、あれ <s>Karol Dance</s> Kike Morandé の顔でしたよ（どんまい）。

<iframe width="560" height="315" src="https://www.youtube.com/embed/t4DT3tQqgRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> " I think my blackness is interfiring with..."

HP COMPUTERS ARE RACIST

現在この技術は誕生当初から大きく進化して、私たちの生活に完全に統合されています。[顔認識の歴史について](https://www.welivesecurity.com/la-es/2015/08/27/tecnologia-de-reconocimiento-facial/)の[退屈なポスト](https://medium.com/@spot_blog/una-breve-historia-del-reconocimiento-facial-vision-blog-5a76fdfe4865)は書きません。すでに多くの人がやっているので。でもこの技術がどう機能するか、そして出し抜く方法は軽く説明します。書く理由と gif を使う理由ができるので、自分の**3**つのお気に入りのうち**2**つですしね。

**教訓:** 顔を検出できなければ認識もできない（当たり前）し、gif は最高です。

## どうやって動いてるの？

### おでこ2本分の余裕

どんな顔にも固有の特徴があります。私たちの脳の一部は<s>何年も</s>何世紀もかけてこれをやるように訓練されてきました。中には苦手で人を見分け間違える人もいますが、[脳が顔をどう認識するか](https://www.wired.com/2012/01/brain-face-recognition/)については[話が長くなるので](https://www.smithsonianmag.com/science-nature/how-does-your-brain-recognize-faces-180963583/)、[Pareidolia](https://es.wikipedia.org/wiki/Pareidolia)に関する[リンクだけ貼っておきます](https://www.bbc.com/future/article/20140730-why-do-we-see-faces-in-objects)。

<figure class="figimg">
   <img src="https://miro.medium.com/max/1500/0*Uaq5M_Vh35yI1i1I" alt="数学は学校の外で使わないと思ってた子たち">
<figcaption>
「学校の外で数学なんか使わない」— まあ、めちゃくちゃ使うけど。
</figcaption>
</figure>

顔認識ソフトはこれらの特徴を私たちと同じように認識しますが、もっと…そう、**数学的**な方法でやります。高校を出たら二度と使わないと思っていた、**役に立たないと思っていた**あれです。総支給額、手取り、健康保険の割合、その他しゃれた名前のついた搾取を計算しないといけなくなるまでは。ソフトが認識する特徴：

- **目**の間の距離。
- **鼻**の幅。
- **眼窩**の深さ。
- **頬**の形。
- **顎**の長さ。

などなど、60〜80の顔の特徴。あの面白い **instagram** フィルター、**Felipito** みたいに見えるやつや**花の冠**をつけてくれるやつを想像しているかもしれませんね。あれは顔検出です。「顔を検出」しているのであって「**あなたの**顔を検出」（認識）しているわけじゃないです。

これらの距離は数式に変換されて、データベースがあれば——**あります**——比較が行われ、バン。数学の力によれば、あなたはこの空港を初めて通るわけじゃないということになります。

**データベース**と言っても、パニックになる必要はないですが、[Facebook は非常に大きなデータベースを持っていて](https://www.theguardian.com/technology/2019/aug/09/facebook-facial-recognition-lawsuit-can-proceed-us-court)、友達をタグ付けしたり友達にタグ付けされるたびに、そのデータベースが成長して精度が上がっていきます。そう、私たち自身がこれらのアルゴリズムを訓練して改善してきたんです。

### 未来は3D

今のトレンドは3Dです。2D画像の代わりに顔の表面の3Dモデルが使われます。これが基本的に **Apple の FaceID** の動作原理です。ここが自分が一番テンションが上がるところで、基本的にはミニチュアの 📼[Xbox Kinect](https://www.youtube.com/watch?v=uq9SEJxZiUg) で、数百の _ミニレーザー_ を使って顔の3Dモデルを生成します。これはずっと精度が高くて_すごいです_。

<iframe width="560" height="315" src="https://www.youtube.com/embed/g4m6StzUcOw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**3D顔認識**はビデオからも行えて、フレームごとの顔の特徴分析で動きます。基本的には2D分析を何度も繰り返すものです。

どちらのシステムもコントラストと顔の特徴の検出に基づいて動いています。**「顔認識はコントラストに基づいている」と最初から言えばよかった**んですが、少し詳しく説明するのが好きなんです。では楽しい部分へ。

## 見える？もう見えない！ 👀

<figure class="figimg">
   <img src="https://media.giphy.com/media/fceh5CXz9mjHa/source.gif" alt="TINFOIL">
<figcaption>
TIN FOIL HAT ALWAYS DO THE JOB.
</figcaption>
</figure>

顔検出と顔認識の仕組みはだいたい分かりました。世界中の顔データベースを破壊できるハッカー集団じゃない以上、自分の顔を検出されないようにすることしかできません。

#### サバイバー入門キット

##### 帽子とサングラスをかける。

<figure class="figimg">
   <img src="https://media.giphy.com/media/U8MnmuVDpK264/source.gif" alt="エラー404：人間を検出できません">
<figcaption>
「人間を検出できません、システム全体に障害発生」。
</figcaption>
</figure>

**悪意あるロボットに検出されない**だけじゃなく、夏のシーズンにもぴったりです。**サングラス**をゴーグルに替えれば、検出を回避して日差しを避けながら**目も守れます**。

##### EMOのルーツに戻れ

<figure class="figimg">
   <img src="https://media.giphy.com/media/Tj7m9HrHaPmQE/source.gif" alt="エモヘアで顔を隠す">
<figcaption>
「MCR が戻ってきた」
「でも RATM は？」。
</figcaption>
</figure>

そう、**エモのヘアスタイルに戻れば**顔の一部を隠せて認識されにくくなります。**+10 ステルス**、**+5 鬱気分**、**+4 MCR**、**-15 機動力**。しかも [MCR が復活](https://www.distractify.com/p/is-my-chemical-romance-back-together) するので、ルーツに戻る絶好の機会です。

##### メイクアップ

<figure class="figimg">
   <img src="https://pbs.twimg.com/media/DhDrCwdVAAAwvEW?format=jpg&name=medium" alt="INSANE CLOWN POSE">
<figcaption>
Miracles!.
</figcaption>
</figure>

そう、メイクをしてください。ただし顔の一部を再定義するパターンで。顎、眉毛、鼻の付け根など。または 📼[Insane Clown Posse](https://www.youtube.com/watch?v=8GyVx28R9-s) の鉄板 [Juggalo](https://twitter.com/tahkion/status/1013304616958607360?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1013304616958607360&ref_url=https%3A%2F%2Fconsequenceofsound.net%2F2019%2F07%2Fjuggalo-makeup-facial-recognition%2F) ルックを試すのもありです。もっと表現力を出して[次のレベル](https://cvdazzle.com/)へ進んでもいいですしね。

#### サバイバー上級キット

##### NIR LED付きの服やアクセサリー

<figure class="figimg">
   <img src="https://www.survivopedia.com/wp-content/uploads/2016/04/goggles.jpg" alt="NIRLEDゴーグルで顔認識をブロック">
<figcaption>
Google Glass が帰ってきた。
</figcaption>
</figure>

これは**上級**だと言いましたよね。**近赤外線（Near Infra Red）**ライト付きのメガネで、デジタルカメラの光センサーを過負荷にして、顔認識に使えない画像を生成します。

##### 再帰反射素材の服

<figure class="figimg">
   <img src="https://www.survivopedia.com/wp-content/uploads/2016/04/android1.jpg" alt="snapchat lens basic">
<figcaption>
DAT STYLE.
</figcaption>
</figure>

黄色いジャケットを着る言い訳にはなりませんが、**おかしな**でも高効率なメガネをかける理由にはなります。**テクノゴーグル**と同じように光センサーを過負荷にする仕組みです。

カメラ検出器など、<s>James Bond</s> Snake 顔負けのガジェットを使う方法もあります。出し抜くより回避する方向で、超パラノイア的な _[Mitnick](https://www.youtube.com/watch?v=K-96JmC2AkE) の本を全部読んだ_ 感じです。

では<s>ディスコグラフィー</s>**参考文献**を。ピザマークが面白い記事や動画です。

### 参考文献

- [How Facial recognition software works](https://us.norton.com/internetsecurity-iot-how-facial-recognition-software-works.html)
- [Facial Recognition](https://electronics.howstuffworks.com/gadgets/high-tech-gadgets/facial-recognition.htm)
- [6 ways to defeat facial recognition](https://www.survivopedia.com/6-ways-to-defeat-facial-recognition/)
- [Anti-Surveillance Camouflage for Your Face](https://www.theatlantic.com/technology/archive/2014/07/makeup/374929/)
- [Anti-facial recognition-makeup](https://www.popsci.com/read/anti-facial-recognition-makeup)
- [How to avoid facial recognition in public](https://www.technadu.com/how-to-avoid-facial-recognition-in-public/29462/)
- 🍕📼[Detecting Faces (Viola Jones Algortihm)](https://www.youtube.com/watch?v=uEJ71VlUmMQ&)
- 📼[How Face ID works... Probably](https://www.youtube.com/watch?v=mwTaISbA87A&)
- 🍕[How your brain recognize all those faces](https://www.smithsonianmag.com/science-nature/how-does-your-brain-recognize-faces-180963583/)
- [Why do we see faces in objects](https://www.bbc.com/future/article/20140730-why-do-we-see-faces-in-objects)
- 📼[How the kinect depth sensor works in 2 minutes](https://www.youtube.com/watch?v=uq9SEJxZiUg)
- 📼[12.1 What is the Kinect? - Kinect and Processing tutorial](https://www.youtube.com/watch?v=QmVNgdapJJM)

コメント欄は開いてます。批判、私が使い忘れたアクセント記号の指摘、その他インターネットの定番なことをどうぞ。

_いつかトゥルーマン・ショー的な締めの言葉を考えないといけないと思ってる_

</div>
