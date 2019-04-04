/*!
 * coolschool relationship service, coolris-service v1.0.0
 * https://github.com/jirancomms/coolris
 *
 * Copyright Jirancomms
 * http://jirancomms.com/
 *
 * Date: 2019-02-11
 */

declare var $: any;
declare var ga: any;

class Coolris {
    constructor() {
    }

    start() {
        $('#coolris').html(this.template());
    }

    template() {
        return `
        <style>
            .dropdown[coolris] .dropdown-toggle {
                appearance: none !important;
                -moz-appearance: none !important; /* Firefox */
                -webkit-appearance: none !important; /* Safari and Chrome */
                cursor: pointer !important;
                background-color: #ffffff !important;
            }
            .dropdown[coolris] .dropdown-toggle:after {
                display: none !important;
            }
            .dropdown[coolris] .dropdown-menu {
                border-color: #b2b2b2 !important;
                min-width: 285px !important;
                z-index: 99999 !important;
            }   
            .dropdown[coolris] .dropdown-menu .bottom {
                background-color: #fbfbfb !important;
            }   
            .dropdown[coolris] .dropdown-menu a:hover {
                text-decoration: none !important;
            }   
            .dropdown[coolris] .dropdown-menu a {
                margin-top: 2px !important;
            }   
            .dropdown[coolris] .dropdown-menu span, .dropdown[coolris] .dropdown-menu p {
                color: #000000 !important;
                font-size: 14px !important;
                line-height: 36px !important;
                font-weight: bold !important;
                font-family: 'Noto Sans', sans-serif;
                letter-spacing : -0.5px !important;
            }   
            .dropdown[coolris] .dropdown-menu p {
                line-height: 28px !important;
            } 
            .dropdown[coolris] .dropdown-menu .img {
                width: 22px; !important;
                display: inline-block;
            }   
        </style>
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
            ga('create', 'UA-119402731-1', 'auto');
            ga('send', 'pageview');
            
        </script>
        <div class="dropdown" coolris>
            <span class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolservice.png" alt="쿨스쿨 서비스 버튼">
            </span>
            <div class="dropdown-menu pt-2" aria-labelledby="dropdownMenuButton">
                <p class="pl-4 pr-4 mb-0">쿨스쿨 아이디 하나로 이용해 보세요!</p>
                <div class="dropdown-divider"></div>
                <div class="pl-4 pr-4 clearfix">
                    <a onclick="ga('send','event','link','click', 'coolris-coolschool')" class="col-6 float-left p-0" href="http://www.coolschool.co.kr/">
                        <span class="img">
                            <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png" alt="쿨스쿨" />
                        </span>
                        <span class="align-middle">쿨스쿨</span>
                    </a>
                    <a onclick="ga('send','event','link','click', 'coolris-samstory')" class="col-6 float-left p-0" href="http://samstory.coolschool.co.kr">
                        <span class="img">
                            <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/samstory.png" alt="샘스토리" />
                        </span>
                        <span class="align-middle">샘스토리</span>
                    </a>
                </div>
                <div class="pl-4 pr-4 clearfix">
                    <a onclick="ga('send','event','link','click', 'coolris-coolbooks')" class="col-6 float-left p-0" href="https://coolbooks.coolschool.co.kr/">
                        <span class="img">
                            <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolbooks.png" alt="쿨북스" />
                        </span>
                        <span class="align-middle">쿨북스</span>
                    </a>
                    <a onclick="ga('send','event','link','click', 'coolris-ourschoolBook')" class="col-6 float-left p-0" href="https://school.coolbooks.co.kr/">
                        <span class="img">
                            <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/our-library.png" alt="우리학교서재" />
                        </span>
                        <span class="align-middle">우리학교서재</span>
                    </a>
                </div>
                <div class="pl-4 pr-4 clearfix">
                    <a onclick="ga('send','event','link','click', 'coolris-weteacher')" class="col-6 float-left p-0" href="http://weteacher.coolschool.co.kr/">
                        <span class="img">
                            <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/weteacher.png" alt="위티쳐몰" />
                        </span>
                        <span class="align-middle">위티쳐몰</span>
                    </a>
                    <a onclick="ga('send','event','link','click', 'coolris-coolissue')" class="col-6 float-left p-0" href="http://issue.coolschool.co.kr">
                        <span class="img">
                            <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolissue.png" alt="쿨이슈" />
                        </span>
                        <span class="align-middle">쿨이슈</span>
                    </a>
                </div>
                <div class="pl-4 pr-4 clearfix">                    
                    <a onclick="ga('send','event','link','click', 'coolris-coolmessenger')" class="col-6 float-left p-0" href="http://school.coolmessenger.com/">
                        <span class="img">
                            <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolmessenger.png" alt="쿨메신저" />
                        </span>
                        <span class="align-middle">쿨메신저</span>
                    </a>
                    <a onclick="ga('send','event','link','click', 'coolris-cooledu')" class="col-6 float-left p-0" href="http://cooledu.coolschool.co.kr">
                        <span class="img">
                            <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/cooledu.png" alt="통합연수" />
                        </span>
                        <span class="align-middle">통합연수</span>
                    </a>
                </div>
                <div class="dropdown-divider mb-0"></div>
                <div class="bottom pb-3 pt-2">
                    <div class="pl-4 pr-4 clearfix">
                        <a onclick="ga('send','event','link','click', 'coolris-coolview')" class="col-6 float-left p-0" href="https://coolview.coolschool.co.kr">
                            <span class="img">
                                <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolview.png" alt="쿨뷰" />
                            </span>
                            <span class="align-middle">쿨뷰</span>
                        </a>
                        <a onclick="ga('send','event','link','click', 'coolris-coolnote')" class="col-6 float-left p-0" href="http://coolnote.coolschool.co.kr/">
                            <span class="img">
                                <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolnote.png" alt="쿨노트" />
                            </span>
                            <span class="align-middle">쿨노트</span>
                        </a>
                    </div>
                    <div class="pl-4 pr-4 clearfix">
                        <a onclick="ga('send','event','link','click', 'coolris-coolmova')" class="col-6 float-left p-0" href="http://coolmova.coolschool.co.kr/">
                            <span class="img">
                                <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolmova.png" alt="쿨모바" />
                            </span>
                            <span class="align-middle">쿨모바</span>
                        </a>
                        <a onclick="ga('send','event','link','click', 'coolris-coolsms')" class="col-6 float-left p-0" href="https://coolsms.coolmessenger.com">
                            <span class="img">
                                <img src="http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolsms.png" alt="쿨SMS" />
                            </span>
                            <span class="align-middle">쿨SMS</span>
                        </a>
                    </div>                    
                </div>
            </div>
        </div>
        `
    }
}
