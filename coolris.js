/*!
 * coolschool relationship service, coolris-service v1.1.0
 * https://github.com/jirancomms/coolris
 *
 * Copyright Jirancomms
 * http://jirancomms.com/
 *
 * Date: 2019-02-11
 */
var Coolris = /** @class */ (function () {
    function Coolris() {
    }
    Coolris.prototype.start = function () {
        $('#coolris').html(this.coolrisTemplate());
        $('#coolProfile').html(this.coolProfileTemplate());
    };
    Coolris.prototype.coolrisTemplate = function () {
        return "\n        <style>\n            .dropdown[coolris] .clearfix:after {\n                content: '';\n                display: block;\n                clear: both;\n            }\n            .dropdown[coolris] .float-left {\n                float: left!important;\n            }\n            .dropdown[coolris] img {\n                vertical-align: middle;\n                border-style: none;\n            }\n            .dropdown[coolris] .pl-4, .px-4 {\n                padding-left: 1.5rem!important;\n            }\n            .dropdown[coolris] .pr-4, .px-4 {\n                padding-right: 1.5rem!important;\n            }\n            .dropdown[coolris] .pt-2, .py-2 {\n                padding-top: .5rem!important;\n            }\n            .dropdown[coolris] .col-6 {\n                flex: 0 0 50%;\n                max-width: 50%;\n                position: relative;\n                width: 100%;\n            }\n            .dropdown[coolris] .dropdown-toggle {\n                appearance: none !important;\n                -moz-appearance: none !important; /* Firefox */\n                -webkit-appearance: none !important; /* Safari and Chrome */\n                cursor: pointer !important;\n                background-color: #ffffff !important;\n            }\n            .dropdown[coolris] .pb-3, .dropdown[coolris] .py-3 {\n                padding-bottom: 1rem!important;\n            }\n            .dropdown[coolris] .mb-0, .dropdown[coolris] .my-0 {\n                margin-bottom: 0!important;\n            }\n            .dropdown[coolris] .dropdown-toggle:after {\n                display: none !important;\n            }\n            .dropdown[coolris] .dropdown-menu {\n                padding: .5rem 0;\n                margin: .125rem 0 0;\n                font-size: 1rem;\n                color: #212529;\n                text-align: left;\n                list-style: none;\n                background-clip: padding-box;\n                border-radius: .25rem;\n                display: none;\n                border: 1px solid #b2b2b2 !important;\n                min-width: 285px !important;\n                z-index: 99999 !important;\n                background-color: #ffffff;\n            }   \n            .dropdown[coolris] .dropdown-menu.show {\n                display: block;\n            }\n            .dropdown-divider {\n                height: 0;\n                margin: .5rem 0;\n                overflow: hidden;\n                border-top: 1px solid #e9ecef;\n            }\n            .dropdown[coolris] .dropdown-menu .bottom {\n                background-color: #fbfbfb !important;\n            }   \n            .dropdown[coolris] .dropdown-menu > p {\n                margin: 0;\n            }\n            .dropdown[coolris] .dropdown-menu a:hover {\n                text-decoration: none !important;\n            }   \n            .dropdown[coolris] .dropdown-menu a {\n                margin-top: 2px !important;\n                text-decoration: none;\n            }   \n            .dropdown[coolris] .dropdown-menu span, .dropdown[coolris] .dropdown-menu p {\n                color: #000000 !important;\n                font-size: 14px !important;\n                line-height: 36px !important;\n                font-weight: bold !important;\n                font-family: 'Noto Sans', sans-serif;\n                letter-spacing : -0.5px !important;\n            }   \n            .dropdown[coolris] .dropdown-menu p {\n                line-height: 28px !important;\n            } \n            .dropdown[coolris] .dropdown-menu .img {\n                width: 26px; !important;\n                display: inline-block;\n                margin-right: 1px;\n            }   \n        </style>\n        <div class=\"dropdown\" coolris>\n            <span onclick=\"ga('send','event','link','click', 'coolris-coolfamily')\" class=\"dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolservice.png\" alt=\"\uCFE8\uC2A4\uCFE8 \uC11C\uBE44\uC2A4 \uBC84\uD2BC\">\n            </span>\n            <div class=\"dropdown-menu pt-2\" aria-labelledby=\"dropdownMenuButton\">\n                <p class=\"pl-4 pr-4 mb-0\">\uCFE8\uC2A4\uCFE8 \uC544\uC774\uB514 \uD558\uB098\uB85C \uC774\uC6A9\uD574 \uBCF4\uC138\uC694!</p>\n                <div class=\"dropdown-divider\"></div>\n                <div class=\"pl-4 pr-4 clearfix\">\n                    <a onclick=\"ga('send','event','link','click', 'coolris-coolschool')\" class=\"col-6 float-left p-0\" href=\"//www.coolschool.co.kr/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png\" alt=\"\uCFE8\uC2A4\uCFE8\" />\n                        </span>\n                        <span class=\"align-middle\">\uCFE8\uC2A4\uCFE8</span>\n                    </a>\n                    <a onclick=\"ga('send','event','link','click', 'coolris-samstory')\" class=\"col-6 float-left p-0\" href=\"//samstory.coolschool.co.kr\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/samstory.png\" alt=\"\uC0D8\uC2A4\uD1A0\uB9AC\" />\n                        </span>\n                        <span class=\"align-middle\">\uC0D8\uC2A4\uD1A0\uB9AC</span>\n                    </a>\n                </div>\n                <div class=\"pl-4 pr-4 clearfix\">\n                    <a onclick=\"ga('send','event','link','click', 'coolris-coolbooks')\" class=\"col-6 float-left p-0\" href=\"https://coolbooks.coolschool.co.kr/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolbooks.png\" alt=\"\uCFE8\uBD81\uC2A4\" />\n                        </span>\n                        <span class=\"align-middle\">\uCFE8\uBD81\uC2A4</span>\n                    </a>\n                    <a onclick=\"ga('send','event','link','click', 'coolris-ourschoolBook')\" class=\"col-6 float-left p-0\" href=\"https://school.coolbooks.co.kr/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/our-library.png\" alt=\"\uC6B0\uB9AC\uD559\uAD50\uC11C\uC7AC\" />\n                        </span>\n                        <span class=\"align-middle\">\uC6B0\uB9AC\uD559\uAD50\uC11C\uC7AC</span>\n                    </a>\n                </div>\n                <div class=\"pl-4 pr-4 clearfix\">\n                    <!--<a onclick=\"ga('send','event','link','click', 'coolris-weteacher')\" class=\"col-6 float-left p-0\" href=\"//weteacher.coolschool.co.kr/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/weteacher.png\" alt=\"WeTeacher\" />\n                        </span>\n                        <span class=\"align-middle\">WeTeacher</span>\n                    </a>-->\n                    <a onclick=\"ga('send','event','link','click', 'coolris-coolissue')\" class=\"col-6 float-left p-0\" href=\"//issue.coolschool.co.kr\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolissue.png\" alt=\"\uCFE8\uC774\uC288\" />\n                        </span>\n                        <span class=\"align-middle\">\uCFE8\uC774\uC288</span>\n                    </a>\n                    <a onclick=\"ga('send','event','link','click', 'coolris-coolmessenger')\" class=\"col-6 float-left p-0\" href=\"//school.coolmessenger.com/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolmessenger.png\" alt=\"\uCFE8\uBA54\uC2E0\uC800\" />\n                        </span>\n                        <span class=\"align-middle\">\uCFE8\uBA54\uC2E0\uC800</span>\n                    </a>\n                </div>\n                <div class=\"pl-4 pr-4 clearfix\">                    \n                    <a onclick=\"ga('send','event','link','click', 'coolris-cooledu')\" class=\"col-6 float-left p-0\" href=\"//cooledu.coolschool.co.kr\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/cooledu.png\" alt=\"\uD1B5\uD569\uC5F0\uC218\" />\n                        </span>\n                        <span class=\"align-middle\">\uD1B5\uD569\uC5F0\uC218</span>\n                    </a>\n                    <a onclick=\"ga('send','event','link','click', 'coolris-coolmarket')\" class=\"col-6 float-left p-0\" href=\"//coolmarket.coolschool.co.kr/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png\" alt=\"\uCFE8\uC2A4\uCFE8\" />\n                        </span>\n                        <span class=\"align-middle\">\uCFE8\uB9C8\uCF13</span>\n                    </a>\n                </div>\n                <div class=\"pl-4 pr-4 clearfix\">                    \n                    <a onclick=\"ga('send','event','link','click', 'coolris-tmall')\" class=\"col-6 float-left p-0\" href=\"//t-mall.coolschool.co.kr/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png\" alt=\"\uCFE8\uC2A4\uCFE8\" />\n                        </span>\n                        <span class=\"align-middle\">\uBCF5\uC9C0\uBAB0</span>\n                    </a>                    \n                    <a onclick=\"ga('send','event','link','click', 'coolris-tfun')\" class=\"col-6 float-left p-0\" href=\"//t-fun.coolschool.co.kr/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png\" alt=\"\uCFE8\uC2A4\uCFE8\" />\n                        </span>\n                        <span class=\"align-middle\">\uD2F0\uD380</span>\n                    </a>\n                </div>\n                <div class=\"pl-4 pr-4 clearfix\">                    \n                    <a onclick=\"ga('send','event','link','click', 'coolris-tmall')\" class=\"col-6 float-left p-0\" href=\"//coolpama.coolschool.co.kr/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png\" alt=\"\uCFE8\uC2A4\uCFE8\" />\n                        </span>\n                        <span class=\"align-middle\">\uCFE8\uD30C\uB9C8</span>\n                    </a>                    \n                    <!--<a onclick=\"ga('send','event','link','click', 'coolris-tfun')\" class=\"col-6 float-left p-0\" href=\"//t-fun.coolschool.co.kr/\">\n                        <span class=\"img\">\n                            <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png\" alt=\"\uCFE8\uC2A4\uCFE8\" />\n                        </span>\n                        <span class=\"align-middle\">\uD2F0\uD380</span>\n                    </a>-->\n                </div>\n                <div class=\"dropdown-divider mb-0\"></div>\n                <div class=\"bottom pb-3 pt-2\">\n                    <!--<div class=\"pl-4 pr-4 clearfix\">\n                        <a onclick=\"ga('send','event','link','click', 'coolris-coolview')\" class=\"col-6 float-left p-0\" href=\"https://coolview.coolschool.co.kr\">\n                            <span class=\"img\">\n                                <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolview.png\" alt=\"\uCFE8\uBDF0\" />\n                            </span>\n                            <span class=\"align-middle\">\uCFE8\uBDF0</span>\n                        </a>\n                        <a onclick=\"ga('send','event','link','click', 'coolris-coolnote')\" class=\"col-6 float-left p-0\" href=\"//coolnote.coolschool.co.kr/\">\n                            <span class=\"img\">\n                                <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolnote.png\" alt=\"\uCFE8\uB178\uD2B8\" />\n                            </span>\n                            <span class=\"align-middle\">\uCFE8\uB178\uD2B8</span>\n                        </a>\n                    </div>-->\n                    <div class=\"pl-4 pr-4 clearfix\">\n                        <a onclick=\"ga('send','event','link','click', 'coolris-coolmova')\" class=\"col-6 float-left p-0\" href=\"//coolmova.coolschool.co.kr/\">\n                            <span class=\"img\">\n                                <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolmova.png\" alt=\"\uCFE8\uBAA8\uBC14\" />\n                            </span>\n                            <span class=\"align-middle\">\uCFE8\uBAA8\uBC14</span>\n                        </a>\n                        <a onclick=\"ga('send','event','link','click', 'coolris-coolsms')\" class=\"col-6 float-left p-0\" href=\"https://coolsms.coolmessenger.com\">\n                            <span class=\"img\">\n                                <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolsms.png\" alt=\"\uCFE8SMS\" />\n                            </span>\n                            <span class=\"align-middle\">\uCFE8SMS</span>\n                        </a>\n                    </div>                    \n                </div>\n            </div>\n        </div>\n        ";
    };
    Coolris.prototype.coolProfileTemplate = function () {
        return "\n            <style>\n                .dropdown[coolProfile] img {\n                    vertical-align: middle;\n                    border-style: none;\n                }\n                .dropdown[coolProfile] .dropdown-toggle {\n                    appearance: none !important;\n                    -moz-appearance: none !important; /* Firefox */\n                    -webkit-appearance: none !important; /* Safari and Chrome */\n                    cursor: pointer !important;\n                    background-color: #ffffff !important;\n                    font-size: 14px;\n                    display: inline-block;\n                    height: auto;\n                    vertical-align: middle;\n                }\n                .dropdown[coolProfile] .dropdown-toggle .profie_name {\n                    font-weight: bold;\n                    color: #000000;\n                    vertical-align: middle;\n                    margin-right: 3px;\n                }\n                .dropdown[coolProfile] .dropdown-toggle .coolprofile_arrow {\n                    \n                }\n                .dropdown[coolProfile] .dropdown-toggle .profile_img {\n                    border-radius: 50%;\n                    height: 20px;\n                    width: 20px;\n                }\n                .dropdown[coolProfile] .dropdown-toggle:after {\n                    display: none !important;\n                }\n                .dropdown[coolProfile] .dropdown-menu {\n                    background-color: #ffffff;\n                    display: none;\n                    font-family: 'Noto Sans', sans-serif !important;\n                    padding: 12px 10px 10px;\n                    min-width: 182px;\n                    border: 1px solid #9b9b9b;\n                    border-radius: .25rem;\n                    top: 7px !important;\n                }\n                .dropdown[coolProfile] .dropdown-menu.show {\n                    display: block;\n                }\n                .dropdown[coolProfile] .dropdown-menu .dropdown_tail {\n                    position: absolute;\n                    top: -8px;\n                }\n                .dropdown[coolProfile] .dropdown-menu p {\n                    color: #000000;\n                    font-size: 14px;\n                    font-family: 'Noto Sans', sans-serif;\n                    margin-bottom: 8px;\n                    margin-top: 0;\n                }\n                .dropdown[coolProfile] .dropdown-menu div {\n                    color: #7e7e7e;\n                    font-size: 14px;\n                }\n                .dropdown[coolProfile] .dropdown-menu a {\n                    color: #25a7df;\n                    font-size: 14px;\n                    float: right;\n                    text-decoration: none;\n                }\n                .dropdown[coolProfile] .dropdown-menu a:hover {\n                    text-decoration: none;\n                }\n                .dropdown[coolProfile] .dropdown-menu a img {\n                   margin-top: -3px;\n                   vertical-align: middle;\n                }\n                .dropdown[coolProfile] .dropdown-menu .logout {\n                    height: 28px;\n                    line-height: 28px;\n                    font-size: 13px;\n                    color: #232323;\n                    background-color: #fafafa;\n                    display: block;\n                    border: 1px solid #dedede;\n                    text-align: center;\n                    margin-top: 17px;\n                    cursor: pointer;\n                }\n            </style>\n            <div class=\"dropdown\" coolProfile>\n            <span onclick=\"ga('send','event','link','click', 'coolProfile-profile')\" class=\"dropdown-toggle\" type=\"button\" id=\"coolProfileDropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <img class=\"profile_img\" src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/default_profile.png\" alt=\"default_profile\" />\n                <span class=\"profie_name\">\uAE40\uC0C8\uBBF8</span><img class=\"coolprofile_arrow\" src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/coolprofile_arrow.png\" alt=\"coolprofile_arrow\" />\n            </span>\n            <div class=\"dropdown-menu\" aria-labelledby=\"coolProfileDropdownMenuButton\">\n                <img class=\"dropdown_tail\" src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/dropbox_tail.png\" alt=\"dropbox_tail\" />\n                <p>\uB0B4\uC815\uBCF4 \uBCF4\uAE30</p>\n                <div>\n                    \uB0B4 \uCFE8\uD3EC\uC778\uD2B8\n                    <a onclick=\"ga('send','event','link','click', 'coolProfile-coolpoint')\" href=\"//point.coolschool.co.kr\" target=\"_blank\">\n                        <img src=\"//update.coolmessenger.com/_ImageServer/coolschool/resources/images/point.png\" alt=\"point\" />   \n                        1,345\uC6D0         \n                    </a>\n                </div>\n                <span onclick=\"ga('send','event','link','click', 'coolProfile-logout')\" class=\"logout\">\uB85C\uADF8\uC544\uC6C3</span>\n            </div>\n        </div>\n        ";
    };
    return Coolris;
}());
