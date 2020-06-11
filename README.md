# 쿨스쿨 연계 서비스(coolschool relationship service, coolris-service)

## 브라우져 최소버전
- IE 9
- chrome
- firefox

## 필요한 프레임워크
- 구글 폰트(NotoSansRegular)
- jquery 최소 v1.12.4
- popper v1.14.6
- bootstrap v4.2.1

## 주의사항
- 스크립트의 순서가 중요하다
    1. jquery.js
    2. popper.js
    3. bootstrap.js
    4. 필요한 구글코드 (예시: 쿨스쿨의 구글코드)
    5.. coolris.js
- 포로토콜에 맞게 스크립트를 삽입한다. (http -> http, https -> https)

## 사용방법
- css, js파일을 포함시킨다. (jquery, popper, bootstrap, coolris)
```html
<link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/jquery.min.js"></script><!-- 1.12.4 -->
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/popper.min.js"></script>
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/bootstrap.min.js"></script><!-- 4.1.1-->
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-119402731-1', 'auto');
    ga('send', 'pageview');
</script>
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolris.js"></script>
```
- 쿨서비스 팝업이 들어갈 div를 **id를 coolris**로 만들어준다.
```html
<div id="coolris"></div>     - 패밀리 드롭다운이 들어갈 id지정
```
- coolris 함수를 실행시켜준다.
```html
// ready가 되면
$(function() {
    var coolris = new Coolris();
    coolris.start();
});
```
## 예제
- index.html 참고


# 쿨스쿨 연계 서비스(coolschool relationship service, coolris-service) - 2.0.0

## 브라우져 최소버전
- IE 9
- chrome
- firefox

## 필요한 프레임워크
- jquery 최소 v1.12.4

## 주의사항
- 스크립트의 순서가 중요하다
    1. jquery.js
    2. pollify.js // ie에서 나오지 않을 때 추가
    3. coolris.js

## 사용방법
- css, js파일을 포함시킨다.
```html
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/jquery.min.js"></script><!-- 1.12.4 -->
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/polyfills.js"></script>  // ie에서 나오지 않을 때 추가
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolris-2.0.0.js"></script>
```
- 쿨서비스 팝업이 들어갈 div를 **id를 coolrisGnb**로 만들어준다.
```html
<div id="coolrisGnb"></div>     - 패밀리 드롭다운이 들어갈 id지정
```
- coolris 함수를 실행시켜준다.
```html
// ready가 되면
$(function() {
    var coolris = new Coolris();
    엑세스 토큰이 있다면 new Coolris(엑세스토큰)

    coolris.start();
});
```
## 예제
- index2.html 참고
