# 쿨스쿨 연계 서비스(coolschool relationship service, coolris-service(2.0.0), commsris-service(1.0.0))

## 브라우져 최소버전
- IE 9
- chrome
- firefox

## 필요한 프레임워크
- jquery 최소 v1.12.4

## 주의사항
- 스크립트의 순서
    1. jquery.js
    2. coolris or commsris
- 포로토콜에 맞게 스크립트를 삽입한다. (http -> http, https -> https)

# 공통
- js파일을 포함시킨다.
```html
<script type="text/javascript" src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/jquery.min.js"></script><!-- 1.12.4 -->
// ie에서 나오지 않을 때 추가
<script type="text/javascript" src="//resource.coolmessenger.com/coolschool/resources/js/polyfills.js"></script>
```





## 사용방법

# 쿨스쿨(coolschool) 전용
- js파일을 포함시킨다.
```html
// coolris 서비스
<script type="text/javascript" src="//resource.coolmessenger.com/coolschool/resources/js/coolris-2.0.0.js"></script>
```

- 필요한 div를 만든다
  1. gnb : id를 coolrisGnb
  2. footer : id를 coolrisFooter
```html
<div id="coolrisGnb"></div> // gnb
<div id="coolrisFooter"></div> // coolris의 footer
```

- 필요한 이벤트를 실행시켜준다.
  1. (필수) 생성자에 토큰을 넣어준다.
  2. (옵션) 서비스명은 토큰뒤에 파람으로 넘겨줄 수 있는데, 구글코드에 필요한 값으로 넣지않으면 기본값으로
     함수를 실행한 홈페이지에서 따간다. (ex: cooledu.coolschool.co.kr -> cooledu, school.coolmessenger.com -> school,
     coolschool.co.kr -> coolschool, coolendar.coolschool.co.kr -> coolendar)
     
```js
// coolris
$(function() {
  var coolris = new Coolris(토큰, 서비스명);
  coolris.start();
  coolris.footerStart();
});
```

- 필요한 옵션을 넣어준다.
  1. 위에서 언급한 서비스명
  2. 구글코드 관련 옵션
  3. 로그아웃 관련 옵션
  4. 함수를 넣지 않으면 기본값으로 셋팅된다.
```js
var opts = {
    // 로그아웃 옵션 (gnb용)
    logoutOpts: {
        isRestoreLocation: boolean, // 로그아웃한 사이트에 남아있을 여부
        isLogoutProc: boolean, // 
        logoutProcUrl: string | undefined, // 다른 로그아웃 url이 필요할 때
        callbackLogoutComplete: Function // 로그아웃 완료 후 콜백함수
    },
    // 구글코드 옵션 (gnb, footer용)
    gaOpts: {
        gaMeasurementId: 구글코드ID, // 구글코드 ID
        gaPageviewCall: boolean // 페이지뷰 여부
    }
}
coolris.start(opts);
coolris.footerStart({gaOpts: {gaPageviewCall: false}});
```  

## 예제
- directTest2.html 참고

## 버튼 커스텀 (로그인 영역 위치에 원하는 버튼 추가 가능)
- 엑세스 토큰을 넣어서 로그인의 유무를 알아야 커스텀이 가능합니다.
- 버튼을 생성/커스텀 합니다. 
- 커스텀된 버튼을 .custom-section 안에 넣어줍니다.
- 클릭시의 이벤트를 걸어줍니다.

```
var coolris = new Coolris('엑세스 토큰', '사이트명');
coolris.start().then(function() {
coolris.loginResultPromise().then(function(response) {
if (response.result) {
// 로그인 시

        // 자바스크립트
        // 나의 강의실 버튼 추가
        var $customSection = document.querySelector('.custom-section');
        var btnMyclass = document.createElement('span');
        btnMyclass.innerHTML = '나의 강의실';
        btnMyclass.setAttribute('class', 'btn-custom');
        btnMyclass.style.marginRight = '15px';
        btnMyclass.addEventListener('click', function() {
            // 랜딩페이지
            window.open('//cooledu.coolschool.co.kr/cooledulub/myclass#paymentList');
            // 구글코드 입력
            // gtag('event', '서비스명', {'event_category': 'link', 'event_label': '이벤트라벨', 'send_to': '구글ID'});
        })
        $customSection.appendChild(btnMyclass);

        // 연수개설/관리 버튼 추가
        var btnSetUp = document.createElement('span');
        btnSetUp.innerHTML = '연수개설/관리';
        btnSetUp.setAttribute('class', 'btn-custom');
        btnSetUp.style.marginRight = '15px';
        btnSetUp.addEventListener('click', function() {
            // 랜딩페이지
            window.open('//cooledu.coolschool.co.kr/cooledulub/setupedu#openlist');
            // 구글코드 입력
            // gtag('event', '서비스명', {'event_category': 'link', 'event_label': '이벤트라벨', 'send_to': '구글ID'});
        })
        $customSection.appendChild(btnSetUp);
        } else {
            // 비 로그인 시

            var $customSection = '.custom-section';
            // 제이쿼리
            // 나의 샘스토리 만들기 버튼
            jQuery('<span/>', {
                id: 'makeMySamstoryBtn',
                "class": "btn-custom",
                text: '나의 샘스토리 만들기',
                title: '나의 샘스토리 만들기',
                style: 'margin-right: 15px'
            }).appendTo($customSection);
            $('#makeMySamstoryBtn').on('click', function() {
                // 랜딩페이지
                window.open('//samstory.coolschool.co.kr/mySamstory#!/make');
                // 구글코드
                // gtag('event', '서비스명', {'event_category': 'link', 'event_label': '이벤트라벨', 'send_to': '구글ID'});
            })

            // 샘스토리 운영팀 버튼
            jQuery('<span/>', {
                id: 'samstorySupportBtn',
                "class": "btn-custom",
                text: '샘스토리 운영팀',
                title: '샘스토리 운영팀',
                style: 'margin-right: 15px'
            }).appendTo($customSection);
            $('#samstorySupportBtn').on('click', function() {
                // 랜딩페이지
                window.open('//samstory.coolschool.co.kr/zone/story/samstory');
                // 구글코드
                // gtag('event', '서비스명', {'event_category': 'link', 'event_label': '이벤트라벨', 'send_to': '구글ID'});
            })
        }
    })
})
```


# 컴즈(jirancomms) 전용
- js파일을 포함시킨다.
```html
// commsris 서비스
<script type="text/javascript" src="//resource.coolmessenger.com/coolschool/resources/js/commsris-1.0.0.js"></script>
```

- 서비스에 따라 필요한 div를 만든다
  1. gnb : id를 coolrisGnb
  2. footer : id를 commsrisFooter
```html
<div id="coolrisGnb"></div> // gnb
<div id="commsrisFooter"></div> // commsris의 footer
```

- 필요한 이벤트를 실행시켜준다.
    1. (필수) 생성자에 토큰을 넣어준다.
    2. (옵션) 서비스명은 토큰뒤에 파람으로 넘겨줄 수 있는데, 구글코드에 필요한 값으로 넣지않으면 기본값으로
함수를 실행한 홈페이지에서 따간다. (ex: cooledu.coolschool.co.kr -> cooledu, school.coolmessenger.com -> school,
       coolschool.co.kr -> coolschool, coolendar.coolschool.co.kr -> coolendar) 
```js
// commsris
$(function() {
    var commsris = new Commsris(토큰, 서비스명);
    commsris.start();
    commsris.footerStart();
});
```

- 필요한 옵션을 넣어준다.
    1. 위에서 언급한 서비스명
    2. 구글코드 관련 옵션
    3. 로그아웃 관련 옵션
    4. 함수를 넣지 않으면 기본값으로 셋팅된다.
```js
var opts = {
    // 로그아웃 옵션 (gnb용)
    logoutOpts: {
        isRestoreLocation: boolean, // 로그아웃한 사이트에 남아있을 여부
        isLogoutProc: boolean, // 
        logoutProcUrl: string | undefined, // 다른 로그아웃 url이 필요할 때
        callbackLogoutComplete: Function // 로그아웃 완료 후 콜백함수
    },
    // 구글코드 옵션 (gnb, footer용)
    gaOpts: {
        gaMeasurementId: 구글코드ID, // 구글코드 ID
        gaPageviewCall: boolean // 페이지뷰 여부
    }
}
commsris.start(opts);
commsris.footerStart({gaOpts: {gaPageviewCall: false}});

```
## 예제
- directTestComms.html 참고

## 버튼 커스텀 (로그인 영역 위치에 원하는 버튼 추가 가능)
- 엑세스 토큰을 넣어서 로그인의 유무를 알아야 커스텀이 가능합니다.
- 버튼을 생성/커스텀 합니다. 
- 커스텀된 버튼을 .custom-section 안에 넣어줍니다.
- 클릭시의 이벤트를 걸어줍니다.
```
var coolris = new Coolris('엑세스 토큰', '사이트명');
            coolris.start().then(function() {
                coolris.loginResultPromise().then(function(response) {
                    if (response.result) {
                        // 로그인 시

                        // 자바스크립트
                        // 나의 강의실 버튼 추가
                        var $customSection = document.querySelector('.custom-section');
                        var btnMyclass = document.createElement('span');
                        btnMyclass.innerHTML = '나의 강의실';
                        btnMyclass.setAttribute('class', 'btn-custom');
                        btnMyclass.style.marginRight = '15px';
                        btnMyclass.addEventListener('click', function() {
                            // 랜딩페이지
                            window.open('//cooledu.coolschool.co.kr/cooledulub/myclass#paymentList');
                            // 구글코드 입력
                            // gtag('event', '서비스명', {'event_category': 'link', 'event_label': '이벤트라벨', 'send_to': '구글ID'});
                        })
                        $customSection.appendChild(btnMyclass);

                        // 연수개설/관리 버튼 추가
                        var btnSetUp = document.createElement('span');
                        btnSetUp.innerHTML = '연수개설/관리';
                        btnSetUp.setAttribute('class', 'btn-custom');
                        btnSetUp.style.marginRight = '15px';
                        btnSetUp.addEventListener('click', function() {
                            // 랜딩페이지
                            window.open('//cooledu.coolschool.co.kr/cooledulub/setupedu#openlist');
                            // 구글코드 입력
                            // gtag('event', '서비스명', {'event_category': 'link', 'event_label': '이벤트라벨', 'send_to': '구글ID'});
                        })
                        $customSection.appendChild(btnSetUp);
                    } else {
                        // 비 로그인 시

                        var $customSection = '.custom-section';
                        // 제이쿼리
                        // 나의 샘스토리 만들기 버튼
                        jQuery('<span/>', {
                            id: 'makeMySamstoryBtn',
                            "class": "btn-custom",
                            text: '나의 샘스토리 만들기',
                            title: '나의 샘스토리 만들기',
                            style: 'margin-right: 15px'
                        }).appendTo($customSection);
                        $('#makeMySamstoryBtn').on('click', function() {
                            // 랜딩페이지
                            window.open('//samstory.coolschool.co.kr/mySamstory#!/make');
                            // 구글코드
                            // gtag('event', '서비스명', {'event_category': 'link', 'event_label': '이벤트라벨', 'send_to': '구글ID'});
                        })

                        // 샘스토리 운영팀 버튼
                        jQuery('<span/>', {
                            id: 'samstorySupportBtn',
                            "class": "btn-custom",
                            text: '샘스토리 운영팀',
                            title: '샘스토리 운영팀',
                            style: 'margin-right: 15px'
                        }).appendTo($customSection);
                        $('#samstorySupportBtn').on('click', function() {
                            // 랜딩페이지
                            window.open('//samstory.coolschool.co.kr/zone/story/samstory');
                            // 구글코드
                            // gtag('event', '서비스명', {'event_category': 'link', 'event_label': '이벤트라벨', 'send_to': '구글ID'});
                        })
                    }
                })
            })
```
