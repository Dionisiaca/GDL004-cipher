# RAPT CIPHER

## Contenidos

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Resultado](#2-resultado)
* [3. Investigación UX](#3-investigacion-ux)

*** (divisor)

## 1. Resumen del proyecto

La **República de Trasjasia** es una nación ubicada en el corazón de Asia Central, antes parte de la ya disuelta **Unión de Repúblicas Socialistas Tarbanas (_URST_)**. 

Con un territorio rico en recursos minerales y con significantes reservas petrolíferas e hídricas; desde su independencia en 1990 Trasjasia ha luchado por consolidar un Estado fuerte y una economía estable que aporte bienestar a su población. Sin embargo, el **Partido Socialista de Trasjasia (_PST_)** ha cooptado la democracia Trasjasa a través de la figura presidencial, que lleva más de tres décadas en el poder. La situación de corrupción, desigualdad económica, fricciones étnicas y conflictos territoriales ha favorecido el surgimiento de grupos insurgentes como el **Ejército Revolucionario del Pueblo de Trasjasia (_RAPT, por sus siglas en inglés_)**, una organización paramilitar popular que busca la destitución del actual presidente para convocar a nuevas elecciones democráticas y liberar el territorio Trasjaso de la influencia Tarbana. 

Al operar desde la clandestinidad, **el RAPT necesita de un sistema de comunicación secreto que impida que sus mensajes sean interceptados por las unidades de inteligencia del PST**. Para esto, se desarrolló una plataforma que através del [cifrado césar](https://en.wikipedia.org/wiki/Caesar_cipher) permite codificar y decodificar los mensajes del grupo rebelde. Sólo los miembros del RAPT pueden ingresar a él con la ayuda de una contraseña que cambia cada día y es difundida de manera secreta entre sus miembros. 

Este programa permite al usuario
* Ingresar y validar una contraseña
* Cifrar mensajes
* Descifrar mensajes
* Hacer un reset de la pantalla
* Volver a la pantalla de inicio

## 2. Resultado

La plataforma de cifrado y descifrado utilizada por el RAPT se ve así:

![](/src/images/startCipher.jpeg)
![](/src/images/infoCipher.jpeg)
![](/src/images/finalCipher.jpeg)

## 3. Investigación UX

Este cipher **está dirigido a las personas que forman parte del RAPT, ya sea como parte de las fuerzas militares, altos mandos y/o unidades de inteligencia**. Todos los mensajes dentro de la organización se mandan utilizando este programa, y deben ser decodificados en el mismo.

**Para garantizar la seguridad de la plataforma y su cifrado, se pide una contraseña para ingresar**, misma que se difunde de manera cautelosa entre sus miembros y cambia con frecuencia. 

En terminos de diseño, se optó por un maquetado simple, sin muchos aditamentos decorativos que entorpezcan su funcionalidad. La idea es que sea una plataforma fácil y rápida de utilizar, sin complicar la experiencia del usuario. La paleta de colores comparte los mismos tonos de la bandera del RAPT(verde y amarillo), y su logotipo de la estrella amarilla se muestra en las pantallas como elemento identitario:

![](/src/images/colors.png)

El cipher le permite a los usuarios cubrir las siguientes necesidades:

* Garantizar la confidencialidad de las comunicaciones del RAPT
* Codificar y decodificar mensajes secretos

**El primer prototipado del cipher se veía así:**

![prototipo1A](/src/images/protoinicio.jpeg)

![prototipo2A](/src/images/protoheader.jpeg)

Se pidió retroalimentación a varias personas para corroborar la claridad y funcionalidad del cipher, así como contemplar mejoras para el proyecto. Entre el _feedback_ recibido, destacan los siguientes puntos:

* El diseño es acorde con el concepto del cipher. Las personas podían adivinar la temática sin necesidad de tener que explicar que se trataba de una plataforma diseñada para una organización militar.
* La maqueta sencilla le daba funcionalidad y claridad al diseño. 
* Las personas que lo probaron pudieron adivinar la secuencia de las acciones e intuir fácilmente cómo era el proceso para cifrar/descifrar mensajes. 
* Se comentó la posibilidad de poner un botón que permitiera al usuario salir del cipher para volver al inicio, para mayor confidencialidad.
* Se sugirió que el botón de _reset_ se colocara en la parte superior, junto a los botones de _encode_, _decode_ y _offset_.

**Prototipo final**

![prototipofinalStart](/src/images/protoStart.jpeg)

![prototipofinalCipher](/src/images/protoCipher.jpeg)

