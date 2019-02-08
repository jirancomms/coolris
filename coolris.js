var Coolris = /** @class */ (function () {
    function Coolris() {
    }
    Coolris.prototype.start = function (template) {
        $('#coolris').html(template);
    };
    Coolris.prototype.template = function () {
        return "\n        <style>\n            .dropdown[coolris] .dropdown-toggle {\n                appearance: none !important;\n                -moz-appearance: none !important; /* Firefox */\n                -webkit-appearance: none !important; /* Safari and Chrome */\n                cursor: pointer !important;\n                background-color: #ffffff !important;\n            }\n            .dropdown[coolris] .dropdown-toggle:after {\n                display: none !important;\n            }\n            .dropdown[coolris] .dropdown-menu {\n                border-color: #b2b2b2 !important;\n                min-width: 285px !important;\n            }   \n            .dropdown[coolris] .dropdown-menu .bottom {\n                background-color: #fbfbfb !important;\n            }   \n            .dropdown[coolris] .dropdown-menu a:hover {\n                text-decoration: none !important;\n            }   \n            .dropdown[coolris] .dropdown-menu a {\n                margin-top: 2px !important;\n            }   \n            .dropdown[coolris] .dropdown-menu span, .dropdown[coolris] .dropdown-menu p {\n                color: #000000 !important;\n                font-size: 14px !important;\n                line-height: 36px !important;\n                font-weight: bold !important;\n                font-family: 'Nanum Gothic', sans-serif;\n            }   \n            .dropdown[coolris] .dropdown-menu p {\n                line-height: 28px !important;\n            }   \n        </style>\n        <script>\n            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n\t\t\t(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\t\t\tm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n    \n            ga('create', 'UA-119402731-1', 'auto');\n            ga('send', 'pageview');\n            \n        </script>\n        <div class=\"dropdown\" coolris>\n            <span class=\"dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolservice.png\" alt=\"\uCFE8\uC2A4\uCFE8 \uC11C\uBE44\uC2A4 \uBC84\uD2BC\">\n            </span>\n            <div class=\"dropdown-menu pt-2\" aria-labelledby=\"dropdownMenuButton\">\n                <p class=\"pl-4 pr-4 mb-0\">\uCFE8\uC2A4\uCFE8 \uC544\uC774\uB514 \uD558\uB098\uB85C \uC774\uC6A9\uD574 \uBCF4\uC138\uC694!</p>\n                <div class=\"dropdown-divider\"></div>\n                <div class=\"pl-4 pr-4 clearfix\">\n                    <a onclick=\"ga('send','event','link','click', 'coolris-coolschool')\" class=\"col-6 float-left p-0\" href=\"http://www.coolschool.co.kr/\" target=\"_blank\">\n                        <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolschool.png\" alt=\"\uCFE8\uC2A4\uCFE8\" />\n                        <span class=\"align-middle\">\uCFE8\uC2A4\uCFE8</span>\n                    </a>\n                    <a onclick=\"ga('send','event','link','click', 'coolris-samstory')\" class=\"col-6 float-left p-0\" href=\"http://samstory.coolschool.co.kr\" target=\"_blank\">\n                        <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/samstory.png\" alt=\"\uC0D8\uC2A4\uD1A0\uB9AC\" />\n                        <span class=\"align-middle\">\uC0D8\uC2A4\uD1A0\uB9AC</span>\n                    </a>\n                </div>\n                <div class=\"pl-4 pr-4 clearfix\">\n                    <a onclick=\"ga('send','event','link','click', 'coolris-coolbooks')\" class=\"col-6 float-left p-0\" href=\"https://coolbooks.coolschool.co.kr/\" target=\"_blank\">\n                        <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolbooks.png\" alt=\"\uCFE8\uBD81\uC2A4\" />\n                        <span class=\"align-middle\">\uCFE8\uBD81\uC2A4</span>\n                    </a>\n                    <a onclick=\"ga('send','event','link','click', 'coolris-ourschoolBook')\" class=\"col-6 float-left p-0\" href=\"https://school.coolbooks.co.kr/\" target=\"_blank\">\n                        <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/our-library.png\" alt=\"\uC6B0\uB9AC\uD559\uAD50\uC11C\uC7AC\" />\n                        <span class=\"align-middle\">\uC6B0\uB9AC\uD559\uAD50\uC11C\uC7AC</span>\n                    </a>\n                </div>\n                <div class=\"pl-4 pr-4 clearfix\">\n                    <a onclick=\"ga('send','event','link','click', 'coolris-weteacher')\" class=\"col-6 float-left p-0\" href=\"http://weteacher.coolschool.co.kr/\" target=\"_blank\">\n                        <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/weteacher.png\" alt=\"\uC704\uD2F0\uCCD0\uBAB0\" />\n                        <span class=\"align-middle\">\uC704\uD2F0\uCCD0\uBAB0</span>\n                    </a>\n                    <a onclick=\"ga('send','event','link','click', 'coolris-coolissue')\" class=\"col-6 float-left p-0\" href=\"http://issue.coolschool.co.kr\" target=\"_blank\">\n                        <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolissue.png\" alt=\"\uCFE8\uC774\uC288\" />\n                        <span class=\"align-middle\">\uCFE8\uC774\uC288</span>\n                    </a>\n                </div>\n                <div class=\"pl-4 pr-4 clearfix\">                    \n                    <a onclick=\"ga('send','event','link','click', 'coolris-coolmessenger')\" class=\"col-6 float-left p-0\" href=\"http://school.coolmessenger.com/\" target=\"_blank\">\n                        <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolmessenger.png\" alt=\"\uCFE8\uBA54\uC2E0\uC800\" />\n                        <span class=\"align-middle\">\uCFE8\uBA54\uC2E0\uC800</span>\n                    </a>\n                </div>\n                <div class=\"dropdown-divider mb-0\"></div>\n                <div class=\"bottom pb-3 pt-2\">\n                    <div class=\"pl-4 pr-4 clearfix\">\n                        <a onclick=\"ga('send','event','link','click', 'coolris-coolview')\" class=\"col-6 float-left p-0\" href=\"https://coolview.coolschool.co.kr\" target=\"_blank\">\n                            <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolview.png\" alt=\"\uCFE8\uBDF0\" />\n                            <span class=\"align-middle\">\uCFE8\uBDF0</span>\n                        </a>\n                        <a onclick=\"ga('send','event','link','click', 'coolris-coolnote')\" class=\"col-6 float-left p-0\" href=\"http://coolnote.coolschool.co.kr/\" target=\"_blank\">\n                            <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolnote.png\" alt=\"\uCFE8\uB178\uD2B8\" />\n                            <span class=\"align-middle\">\uCFE8\uB178\uD2B8</span>\n                        </a>\n                    </div>\n                    <div class=\"pl-4 pr-4 clearfix\">\n                        <a onclick=\"ga('send','event','link','click', 'coolris-coolmova')\" class=\"col-6 float-left p-0\" href=\"http://coolmova.coolschool.co.kr/\" target=\"_blank\">\n                            <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolmova.png\" alt=\"\uCFE8\uBAA8\uBC14\" />\n                            <span class=\"align-middle\">\uCFE8\uBAA8\uBC14</span>\n                        </a>\n                        <a onclick=\"ga('send','event','link','click', 'coolris-coolsms')\" class=\"col-6 float-left p-0\" href=\"https://coolsms.coolmessenger.com\" target=\"_blank\">\n                            <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/coolsms.png\" alt=\"\uCFE8SMS\" />\n                            <span class=\"align-middle\">\uCFE8SMS</span>\n                        </a>\n                    </div>\n                    <div class=\"pl-4 pr-4 clearfix\">\n                        <a onclick=\"ga('send','event','link','click', 'coolris-timplus')\" class=\"col-6 float-left p-0\" href=\"http://timplus.coolschool.co.kr/\" target=\"_blank\">\n                            <img src=\"http://update.coolmessenger.com/_ImageServer/coolschool/commonTop/teamplus.png\" alt=\"\uD300\uD50C\uB7EC\uC2A4\" />\n                            <span class=\"align-middle\">\uD300\uD50C\uB7EC\uC2A4</span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        ";
    };
    return Coolris;
}());
$(function () {
    var coolris = new Coolris();
    var template = coolris.template();
    coolris.start(template);
});
