<?php header("Content-Type: text/html; charset=utf-8")?>
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
    <li id='add' class="btn">
      <a href='javascript:void(0);'>Добавить элемент</a>
    </li>
    <li id='edit' class="btn">
      <a href='javascript:void(0);'>Редактировать элементы</a>
    </li>
    <li id='create' class="btn">
      <a href='javascript:void(0);'>Создать упражнение</a>
    </li>
    <li id='next' class="btn">
      <a href='javascript:void(0);'></a>
    </li>
    <li class="btn">
      <div id="your-files">sdkfjsldkjflk</div>
    </li>
  </ul>
  <div id="addBody" class="hidden-block">
    <ul id="addControl">
      <li><b>1.</b><span>Выберите блок для добавления</span> <b>2.</b><span>Выберите тип элемента:</span></li>
      <li><a href="javascript:void(0);" id="button">Кнопка</a></li>
      <li><a href="javascript:void(0);" id="toggler">Тумблер</a></li>
      <li><a href="javascript:void(0);" id="knob">Ручка</a></li>
      <li><a href="javascript:void(0);" id="rotator">Потенциометр</a></li>
      <li><a href="javascript:void(0);" id="scale">Шкала</a></li>
      <li><a href="javascript:void(0);" id="lamp">Лампочка</a></li>
      <li><a href="javascript:void(0);" id="socket">Розетка</a></li>
      <li><a href="javascript:void(0);" id="fuse">Предохранитель</a></li>
    </ul>
  </div>
  <div id="createBody" class="hidden-block">
      <ul>
        <li id="creatingExercise" style="display:block;"><input id="nameOfExercise" type="text" placeholder="Название упражнения"><button id="createExercise">Создать</button></li>
        <li id="choosingNextElement"><p>Выберите элемент, ДВАЖДЫ кликнув по нему.</p><button id="chooseNextElement">Все понятно, приступить</button></li>
        <li id="addingCountClick"><p>Действие имеет строгий порядок выполнения?</p><button id="addCountClick">Да</button><button id="noAddCountClick">Нет</button></li>
        <li id="settingPosition"><p>Установите элемент в нужное положение, затем нажмите</p><button id="setPosition">Готово</button></li>
        <li id="settingDescription"><p>Введите подсказку</p><input id="writeDescription" type="text" name="text" placeholder="Введите пояснительный текст" value=""><button id="setDescription" for="text">Готово</button></li>
        <li id="bindActionOnPos"><p>Привязать событие к данному положению?</p><button id="bindAction">Да</button><button id="noBindAction">Нет</button></li>
        <li id="ActionSelectElem"><p>Выберите элемент и установите в нужное положение</p><button id="chooseActPos">Готово</button></li>
		<li id="addActionOnPos"><p>Привязать еще одно событие?</p><button id="addAction">Да</button><button id="skipAddAction">Нет</button></li>
        <li id="addingPosition"><p>Добавить еще одну позицию?</p><button id="addPosition" class="retry">Да</button><button id="skipAddingPosition" class="next">К следующему элементу</button>
        <li id="oneMoreElement"><p>Добавить еще один элемент</p><button id="more"></button></li>
      </ul>
  </div>
  <div id="editBody" class="hidden-block">
    <ul>
      <li><b>1.</b><span>Выберите определенный блок для вывода</span> <b>2.</b><span>Нажмите</span></li>
      <li><a href="javascript:void(0);">Записать</a></li>
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
        <header>Левый пульт</header>
        <section class="size140"><div side="front"></div></section>
        <section class="size670"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        </div>
      </li>
      <li>
        <div>
        <header>Центальный пульт</header>
        <section class="width250 height670"><div side="front"></div></section>
        </div>
      </li>
      <li>
        <div>
        <header>Правый пульт</header>
        <section class="size215-350"><div side="front"></div></section>
        <section class="size670"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        <section class="size215"><div side="front"></div></section>
        </div>
      </li>
      <li>
        <div>
        <header>Блок включения</header>
        <section class="size850"><div side="front"></div></section>
        </div>
      </li>
    </ul>
  </div>

</div><!--end root-->
</div><!--end wrapper-->

<div id="exlog"></div>
<div id="log">
<div id="htmllog"><textarea></textarea><xmp></xmp></div>
</div>
<footer>
<div id="bx-pager">
  <span></span>
  <a data-slide-index="0" href="javascript:void(0);"><img src="./elements/minimap/0.png" /></a>
  <a data-slide-index="1" href="javascript:void(0);"><img src="./elements/minimap/1.png" /></a>
  <a data-slide-index="2" href="javascript:void(0);"><img src="./elements/minimap/2.png" /></a>
  <a data-slide-index="3" href="javascript:void(0);"><img src="./elements/minimap/3.png" /></a>
  <a data-slide-index="4" href="javascript:void(0);"><img src="./elements/minimap/4.png" /></a>
  <a data-slide-index="5" href="javascript:void(0);"><img src="./elements/minimap/5.png" /></a>
  <a data-slide-index="6" href="javascript:void(0);"><img src="./elements/minimap/6.png" /></a>
  <a data-slide-index="7" href="javascript:void(0);"><img src="./elements/minimap/7.png" /></a>
</div>

</footer>
<script src="js/jquery-2.0.1.min.js"></script>
<script src="js/functions.js" type="text/javascript"></script>
<script src="js/editor.js" type="text/javascript"></script>
<script src="js/setDevice.js" type="text/javascript"></script>
<script src="js/exercise.js" type="text/javascript"></script>
<script src="js/addcontrols.js" type="text/javascript"></script>
<script src="js/elementsAlive.js" type="text/javascript"></script>
<script src="js/bxslider/jquery.bxslider.min.js" type="text/javascript"></script>

<link href="js/jqueryui/css/ui-lightness/jquery-ui-1.10.3.custom.css" rel="stylesheet">
<script src="js/jqueryui/js/jquery-ui-1.10.3.custom.js"></script>
</div>
</body>
</html>