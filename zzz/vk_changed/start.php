<!doctype html>
<html>
  <head>
  <meta charset="utf-8">
  <title>Simulator</title>
  
  
  <!--realtime less compiler-->
 <link rel="stylesheet/less" type="text/css" href="css/style.less">
 <script src="js/less-1.6.2.min.js" type="text/javascript"></script>
  
  <!--это для скопмилированного css
  <link rel="stylesheet" href="css/style.css">
  -->
  </head>
<body id="top_page">
<header>
  
  <ul class='header top-line'>
    <li id='start' class="btn">
      <a href='#top_page'>Начать упражнение</a>
    </li>
    <li id='create' class="btn">
      <a href='#top_page'>Создать упражнение</a>
    </li>
    <li id='next' class="btn">
      <a href='#top_page'></a>
    </li>
  </ul>
  <div id="startBody" class="hidden-block">
    <ul>
      <li><a>Упражнение 1</a></li>
      <li><a>Упражнение 2</a></li>
    </ul>
  </div>
</header>

<div id="wrapper">
<div id="root">
  <div id="container">
    <ul>
      <li>
        <div>
        <header>Стойка #0</header>
        <section class="size215"><div side="left"></div><div side="front"></div><div side="right"></div></section>
        <section class="size215"><div side="left"></div><div side="front"></div><div side="right"></div></section>
        <section class="size445"><div side="left"></div><div side="front"></div><div side="right"></div></section>
        <section class="size445"><div side="left"></div><div side="front"></div><div side="right"></div></section>
        </div>
      </li>
      <li>
        <div>
        <header>Стойка #1</header>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        </div>
      </li>
      <li>
        <div>
        <header>Стойка #2</header>
        <section class="size500"><div side="front"></div></section>
        <section class="size215"><div side="left"></div><div side="front"></div><div side="right"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        </div>
      </li>
      <li>
        <div>
        <header>Стойка #3</header>
        <section class="size140"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size445"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="left"></div><div side="front"></div><div side="right"></div></section>
      
        </div>
      </li>
      <li>
        <div>
        <header>Блок включения</header>
        <section></section>
        </div>
      </li>
    </ul>
  </div>

</div><!--end root-->
</div><!--end wrapper-->

<footer>
<div id="log">
<div id="htmllog"><textarea> </textarea><xmp></xmp></div>
</div>
</footer>
<script src="js/jquery-2.0.1.min.js"></script>
<script src="js/functions.js" type="text/javascript"></script>
<script src="js/addcontrols.js" type="text/javascript"></script>
<script src="js/elementsAlive.js" type="text/javascript"></script>
<script src="js/bxslider/jquery.bxslider.min.js" type="text/javascript"></script>

<link href="js/jqueryui/css/ui-lightness/jquery-ui-1.10.3.custom.css" rel="stylesheet">
<script src="js/jqueryui/js/jquery-ui-1.10.3.custom.js"></script>
</div>
</body>
</html>