/*!
 * coolschool relationship service, coolris-service v1.1.0
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
        $('#coolris').html(this.coolrisTemplate());
        $('#coolProfile').html(this.coolProfileTemplate());
    }

    coolrisTemplate() {
        return `
        <style>
            .dropdown[coolris] .clearfix:after {
                content: '';
                display: block;
                clear: both;
            }
            .dropdown[coolris] .float-left {
                float: left!important;
            }
            .dropdown[coolris] img {
                vertical-align: middle;
                border-style: none;
            }
            .dropdown[coolris] .pl-4, .px-4 {
                padding-left: 1.5rem!important;
            }
            .dropdown[coolris] .pr-4, .px-4 {
                padding-right: 1.5rem!important;
            }
            .dropdown[coolris] .pt-2, .py-2 {
                padding-top: .5rem!important;
            }
            .dropdown[coolris] .col-6 {
                flex: 0 0 50%;
                max-width: 50%;
                position: relative;
                width: 100%;
            }
            .dropdown[coolris] .dropdown-toggle {
                appearance: none !important;
                -moz-appearance: none !important; /* Firefox */
                -webkit-appearance: none !important; /* Safari and Chrome */
                cursor: pointer !important;
                background-color: #ffffff !important;
            }
            .dropdown[coolris] .pb-3, .dropdown[coolris] .py-3 {
                padding-bottom: 1rem!important;
            }
            .dropdown[coolris] .mb-0, .dropdown[coolris] .my-0 {
                margin-bottom: 0!important;
            }
            .dropdown[coolris] .dropdown-toggle:after {
                display: none !important;
            }
            .dropdown[coolris] .dropdown-menu {
                padding: .5rem 0;
                margin: .125rem 0 0;
                font-size: 1rem;
                color: #212529;
                text-align: left;
                list-style: none;
                background-clip: padding-box;
                border-radius: .25rem;
                display: none;
                border: 1px solid #b2b2b2 !important;
                min-width: 285px !important;
                z-index: 99999 !important;
                background-color: #ffffff;
            }   
            .dropdown[coolris] .dropdown-menu.show {
                display: block;
            }
            .dropdown-divider {
                height: 0;
                margin: .5rem 0;
                overflow: hidden;
                border-top: 1px solid #e9ecef;
            }
            .dropdown[coolris] .dropdown-menu .bottom {
                background-color: #fbfbfb !important;
            }   
            .dropdown[coolris] .dropdown-menu > p {
                margin: 0;
            }
            .dropdown[coolris] .dropdown-menu a:hover {
                text-decoration: none !important;
            }   
            .dropdown[coolris] .dropdown-menu a {
                margin-top: 2px !important;
                text-decoration: none;
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
                width: 26px; !important;
                display: inline-block;
                margin-right: 1px;
            }   
        </style>
        <div class="dropdown" coolris>
            <span onclick="ga('send','event','link','click', 'coolris-coolfamily')" class="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolservice.png" alt="쿨스쿨 서비스 버튼">
            </span>
            <div class="dropdown-menu pt-2" aria-labelledby="dropdownMenuButton">
                <p class="pl-4 pr-4 mb-0">쿨스쿨 아이디 하나로 이용해 보세요!</p>
                <div class="dropdown-divider"></div>
                <div class="pl-4 pr-4 clearfix">
                    <a onclick="ga('send','event','link','click', 'coolris-coolschool')" class="col-6 float-left p-0" href="//www.coolschool.co.kr/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png" alt="쿨스쿨" />
                        </span>
                        <span class="align-middle">쿨스쿨</span>
                    </a>
                    <a onclick="ga('send','event','link','click', 'coolris-samstory')" class="col-6 float-left p-0" href="//samstory.coolschool.co.kr">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/samstory.png" alt="샘스토리" />
                        </span>
                        <span class="align-middle">샘스토리</span>
                    </a>
                </div>
                <div class="pl-4 pr-4 clearfix">
                    <a onclick="ga('send','event','link','click', 'coolris-coolbooks')" class="col-6 float-left p-0" href="https://coolbooks.coolschool.co.kr/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolbooks.png" alt="쿨북스" />
                        </span>
                        <span class="align-middle">쿨북스</span>
                    </a>
                    <a onclick="ga('send','event','link','click', 'coolris-ourschoolBook')" class="col-6 float-left p-0" href="https://school.coolbooks.co.kr/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/our-library.png" alt="우리학교서재" />
                        </span>
                        <span class="align-middle">우리학교서재</span>
                    </a>
                </div>
                <div class="pl-4 pr-4 clearfix">
                    <!--<a onclick="ga('send','event','link','click', 'coolris-weteacher')" class="col-6 float-left p-0" href="//weteacher.coolschool.co.kr/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/weteacher.png" alt="WeTeacher" />
                        </span>
                        <span class="align-middle">WeTeacher</span>
                    </a>-->
                    <a onclick="ga('send','event','link','click', 'coolris-coolissue')" class="col-6 float-left p-0" href="//issue.coolschool.co.kr">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolissue.png" alt="쿨이슈" />
                        </span>
                        <span class="align-middle">쿨이슈</span>
                    </a>
                    <a onclick="ga('send','event','link','click', 'coolris-coolmessenger')" class="col-6 float-left p-0" href="//school.coolmessenger.com/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolmessenger.png" alt="쿨메신저" />
                        </span>
                        <span class="align-middle">쿨메신저</span>
                    </a>
                </div>
                <div class="pl-4 pr-4 clearfix">                    
                    <a onclick="ga('send','event','link','click', 'coolris-cooledu')" class="col-6 float-left p-0" href="//cooledu.coolschool.co.kr">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/cooledu.png" alt="통합연수" />
                        </span>
                        <span class="align-middle">통합연수</span>
                    </a>
                    <a onclick="ga('send','event','link','click', 'coolris-coolmarket')" class="col-6 float-left p-0" href="//coolmarket.coolschool.co.kr/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png" alt="쿨스쿨" />
                        </span>
                        <span class="align-middle">쿨마켓</span>
                    </a>
                </div>
                <div class="pl-4 pr-4 clearfix">                    
                    <a onclick="ga('send','event','link','click', 'coolris-tmall')" class="col-6 float-left p-0" href="//t-mall.coolschool.co.kr/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png" alt="쿨스쿨" />
                        </span>
                        <span class="align-middle">복지몰</span>
                    </a>                    
                    <a onclick="ga('send','event','link','click', 'coolris-tfun')" class="col-6 float-left p-0" href="//t-fun.coolschool.co.kr/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png" alt="쿨스쿨" />
                        </span>
                        <span class="align-middle">티펀</span>
                    </a>
                </div>
                <div class="pl-4 pr-4 clearfix">                    
                    <a onclick="ga('send','event','link','click', 'coolris-tmall')" class="col-6 float-left p-0" href="//coolpama.coolschool.co.kr/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png" alt="쿨스쿨" />
                        </span>
                        <span class="align-middle">쿨파마</span>
                    </a>                    
                    <!--<a onclick="ga('send','event','link','click', 'coolris-tfun')" class="col-6 float-left p-0" href="//t-fun.coolschool.co.kr/">
                        <span class="img">
                            <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png" alt="쿨스쿨" />
                        </span>
                        <span class="align-middle">티펀</span>
                    </a>-->
                </div>
                <div class="dropdown-divider mb-0"></div>
                <div class="bottom pb-3 pt-2">
                    <!--<div class="pl-4 pr-4 clearfix">
                        <a onclick="ga('send','event','link','click', 'coolris-coolview')" class="col-6 float-left p-0" href="https://coolview.coolschool.co.kr">
                            <span class="img">
                                <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolview.png" alt="쿨뷰" />
                            </span>
                            <span class="align-middle">쿨뷰</span>
                        </a>
                        <a onclick="ga('send','event','link','click', 'coolris-coolnote')" class="col-6 float-left p-0" href="//coolnote.coolschool.co.kr/">
                            <span class="img">
                                <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolnote.png" alt="쿨노트" />
                            </span>
                            <span class="align-middle">쿨노트</span>
                        </a>
                    </div>-->
                    <div class="pl-4 pr-4 clearfix">
                        <a onclick="ga('send','event','link','click', 'coolris-coolmova')" class="col-6 float-left p-0" href="//coolmova.coolschool.co.kr/">
                            <span class="img">
                                <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolmova.png" alt="쿨모바" />
                            </span>
                            <span class="align-middle">쿨모바</span>
                        </a>
                        <a onclick="ga('send','event','link','click', 'coolris-coolsms')" class="col-6 float-left p-0" href="https://coolsms.coolmessenger.com">
                            <span class="img">
                                <img src="//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolsms.png" alt="쿨SMS" />
                            </span>
                            <span class="align-middle">쿨SMS</span>
                        </a>
                    </div>                    
                </div>
            </div>
        </div>
        `
    }

    coolProfileTemplate() {
        return `
            <style>
                .dropdown[coolProfile] img {
                    vertical-align: middle;
                    border-style: none;
                }
                .dropdown[coolProfile] .dropdown-toggle {
                    appearance: none !important;
                    -moz-appearance: none !important; /* Firefox */
                    -webkit-appearance: none !important; /* Safari and Chrome */
                    cursor: pointer !important;
                    background-color: #ffffff !important;
                    font-size: 14px;
                    display: inline-block;
                    height: auto;
                    vertical-align: middle;
                }
                .dropdown[coolProfile] .dropdown-toggle .profie_name {
                    font-weight: bold;
                    color: #000000;
                    vertical-align: middle;
                    margin-right: 3px;
                }
                .dropdown[coolProfile] .dropdown-toggle .coolprofile_arrow {
                    
                }
                .dropdown[coolProfile] .dropdown-toggle .profile_img {
                    border-radius: 50%;
                    height: 20px;
                    width: 20px;
                }
                .dropdown[coolProfile] .dropdown-toggle:after {
                    display: none !important;
                }
                .dropdown[coolProfile] .dropdown-menu {
                    background-color: #ffffff;
                    display: none;
                    font-family: 'Noto Sans', sans-serif !important;
                    padding: 12px 10px 10px;
                    min-width: 182px;
                    border: 1px solid #9b9b9b;
                    border-radius: .25rem;
                    top: 7px !important;
                }
                .dropdown[coolProfile] .dropdown-menu.show {
                    display: block;
                }
                .dropdown[coolProfile] .dropdown-menu .dropdown_tail {
                    position: absolute;
                    top: -8px;
                }
                .dropdown[coolProfile] .dropdown-menu p {
                    color: #000000;
                    font-size: 14px;
                    font-family: 'Noto Sans', sans-serif;
                    margin-bottom: 8px;
                    margin-top: 0;
                }
                .dropdown[coolProfile] .dropdown-menu div {
                    color: #7e7e7e;
                    font-size: 14px;
                }
                .dropdown[coolProfile] .dropdown-menu a {
                    color: #25a7df;
                    font-size: 14px;
                    float: right;
                    text-decoration: none;
                }
                .dropdown[coolProfile] .dropdown-menu a:hover {
                    text-decoration: none;
                }
                .dropdown[coolProfile] .dropdown-menu a img {
                   margin-top: -3px;
                   vertical-align: middle;
                }
                .dropdown[coolProfile] .dropdown-menu .logout {
                    height: 28px;
                    line-height: 28px;
                    font-size: 13px;
                    color: #232323;
                    background-color: #fafafa;
                    display: block;
                    border: 1px solid #dedede;
                    text-align: center;
                    margin-top: 17px;
                    cursor: pointer;
                }
            </style>
            <div class="dropdown" coolProfile>
            <span onclick="ga('send','event','link','click', 'coolProfile-profile')" class="dropdown-toggle" type="button" id="coolProfileDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img class="profile_img" src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png" alt="default_profile" />
                <span class="profie_name">김새미</span><img class="coolprofile_arrow" src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/coolprofile_arrow.png" alt="coolprofile_arrow" />
            </span>
            <div class="dropdown-menu" aria-labelledby="coolProfileDropdownMenuButton">
                <img class="dropdown_tail" src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png" alt="dropbox_tail" />
                <p>내정보 보기</p>
                <div>
                    내 쿨포인트
                    <a onclick="ga('send','event','link','click', 'coolProfile-coolpoint')" href="//point.coolschool.co.kr" target="_blank">
                        <img src="//update.coolmessenger.com/_ImageServer/coolschool/resources/images/point.png" alt="point" />   
                        1,345원         
                    </a>
                </div>
                <span onclick="ga('send','event','link','click', 'coolProfile-logout')" class="logout">로그아웃</span>
            </div>
        </div>
        `
    }
}
