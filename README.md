# 쿨스쿨 연계 서비스(coolschool relationship service, coolris-service)

## 브라우져 최소버전
- IE 9
- chrome
- firefox

## 필요한 프레임워크
- 구글 폰트(나눔고딕)
- jquery 최소 v1.12.4
- popper v1.14.6
- bootstrap v4.2.1

## 주의사항
- 스크립트의 순서가 중요하다
    1. jquery.js
    2. popper.js
    3. bootstrap.js
    4. coolris.js
- 포로토콜에 맞게 스크립트를 삽입한다. (http -> http, https -> https)

## 사용방법
- css, js파일을 포함시킨다. (jquery, popper, bootstrap, coolris)
```html
<link href="//fonts.googleapis.com/css?family=Nanum+Gothic" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/bootstrap.min.css" /><!-- 4.1.1-->
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/jquery.min.js"></script><!-- 1.12.4 -->
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/popper.min.js"></script>
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/bootstrap.min.js"></script><!-- 4.1.1-->
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolris.js"></script>
```
- 쿨서비스 팝업이 들어갈 div를 **id를 coolris**로 만들어준다.
```html
<div id="coolris"></div>
```
## 예제
- index.html 참고
