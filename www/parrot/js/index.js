
let data = 2;
(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 50)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.nav-link').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#navbar',
      offset: 56
    });
  
    
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#navbar").offset().top > 100) {
        $("#navbar").addClass("navbar-shrink");
      } else {
        $("#navbar").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  })(jQuery);

$(document).ready(function() {
    var btn = $(".play-btn");
    btn.click(function() {
        btn.toggleClass("pause-btn");
        return false;
    });
    var motorBtn = $(".play-motor-btn");
    motorBtn.click(function () {
      
        motorBtn.toggleClass("pause-motor-btn");
        return false;
    })

    var lightWheelBtn = $(".play-lightWheel-btn");
    lightWheelBtn.click(function(){
        lightWheelBtn.toggleClass("pause-lightWheel-btn");
        return false;
    });
    let batn = $("#loginBtn").click(function() {
        console.log("HelloWorld");
        return false;
    });
});

let lightWheelCommands = {
    start : {
        command: 'start'
    },
    stop :{
        command: 'stop'
    }
};
var arduinoCommands = [{
    name: 'Main',
    commands: [
        // {
        //     name:'Start',
        //     command: 'start'
        // },
        // {
        //     name:'Stop',
        //     command: 'stop'
        // },
        {
            name:'Open Curtain',
            command: 'open_cl'
        },
        {
            name:'Close Curtain',
            command: 'close_cl'
        },
        {
            name:'Stop Curtain Motor',
            command: 'stop_cl_motro'
        }
    ]}
];

var mainCommands = {
    name: 'Main',
    commands: [
        {
            name:'Start',
            command: 'start'
        },
        {
            name:'Stop',
            command: 'stop'
        }
    ]
}
let motor1Commands = {
    start : {
        command: 'motor1'
    },
    stop :{
        command: 'stop_motor1'
    }
};

let senario1 = [
    {
        name : 'سناریوی 1',
        commands: [ 
             {
                 name: 'سلام',
                 command: 'play_voice',
                 param: 14
             },
             {
                 name: 'ممنون تو خوبی؟',
                 command: 'play_voice',
                 param: 32
             },
             {
                 name: 'حوصلم سر رفته',
                 command: 'play_voice',
                 param: 28
             },
             {
                 name: 'آره فکر خوبیه',
                 command: 'play_voice',
                 param: 2
             },
              {
                  name: 'موافقم یکی تو یکی من',
                  command: 'play_voice',
                  param: 10
              },
             {
                 name: 'اول من شروع میکنم',
                 command: 'play_voice',
                 param: 7
             },
             {
                 name: 'آره راس میگی اشتباه گفتم. میشه وسطی',
                 command: 'play_voice',
                 param: 57
             },
             {
                 name: 'آفرین حالا من',
                 command: 'play_voice',
                 param: 0
             },
             {
                 name: 'آره',
                 command: 'play_voice',
                 param: 3
             },
             {
                 name: 'خنده',
                 command: 'play_voice',
                 param: 58
             },
             {
                 name: 'اشتباه گفتی میشه راست',
                 command: 'play_voice',
                 param: 59
             },
             {
                 name: 'سکه‌هامون زیاد شد',
                 command: 'play_voice',
                 param: 36
             },
               {
                   name: 'این مرحله تموم شد',
                   command: 'play_voice',
                   param: 33
               },
                {
                    name: 'بریم مرحله بعدی',
                    command: 'play_voice',
                    param: 16
                },
        ],
    },]
let senario2 = [
    {
        name : 'سناریوی 2',
        commands: [ 
             {
                 name: 'داستان تعریف کنم',
                 command: 'play_voice',
                 param: 60
             },
             {
                 name: 'خرگوشک خوشحال',
                 command: 'play_voice',
                 param: 61
             },
             {
                 name: 'خوشحاله چیکار میکنه',
                 command: 'play_voice',
                 param: 62
             },
             {
                 name: 'بلند پریده',
                 command: 'play_voice',
                 param: 63
             },
              {
                  name: 'بازی می‌کنه و می‌خنده',
                  command: 'play_voice',
                  param: 64
              },
             {
                 name: 'دلش درد میگیره',
                 command: 'play_voice',
                 param: 65
             },
             {
                 name: 'احساس خوبی داشته باشه',
                 command: 'play_voice',
                 param: 66
             },
             {
                 name: 'به مادربزرگش کمک می‌کنه',
                 command: 'play_voice',
                 param: 67
             },
             {
                 name: 'رفته گردش',
                 command: 'play_voice',
                 param: 68
             },
             {
                 name: 'با هم صحبت میکنن',
                 command: 'play_voice',
                 param: 69
             },
             {
                 name: 'دیرتر عصبانی بشه',
                 command: 'play_voice',
                 param: 70
             },
             {
                 name: 'مهربون باشه',
                 command: 'play_voice',
                 param: 71
             },
             {
                 name: 'بهش خوش میگذره',
                 command: 'play_voice',
                 param: 72
             }
        ],
    },
    ]
let intractiveSoundsCommand = [{
    name: 'Play Interactive Sounds',
    commands: [
        {
            name: 'سلام',
            command: 'play_voice',
            param: 14
        },
        {
            name: 'خوبی؟',
            command: 'play_voice',
            param: 31
        },
        {
            name: 'ممنون تو خوبی؟',
            command: 'play_voice',
            param: 32
        },
        {
            name: 'آره فکر خوبیه',
            command: 'play_voice',
            param: 2
        },/*
        {
            name: 'موافقم یکی تو یکی من',
            command: 'play_voice',
            param: 10
        },
        {
            name: 'اول من شروع میکنم',
            command: 'play_voice',
            param: 7
        },
        {
            name: 'باشه شروع کن',
            command: 'play_voice',
            param: 11
        },
        {
            name: 'اول تو بگو',
            command: 'play_voice',
            param: 8
        },
        {
            name: 'حالا نوبت منه',
            command: 'play_voice',
            param: 25
        },
        {
            name: 'آفرین',
            command: 'play_voice',
            param: 0
        },
        {
            name: 'آره برنده شدیم',
            command: 'play_voice',
            param: 1
        },
        {
            name: 'آره من اشتباه گفتم',
            command: 'play_voice',
            param: 4
        },
        {
            name: 'اشتباه بگی عصبانی میشه',
            command: 'play_voice',
            param: 5
        },
        {
            name: 'عصبانی شد',
            command: 'play_voice',
            param: 6
        },

        {
            name: 'هورا برنده شدیم',
            command: 'play_voice',
            param: 9
        },
        {
            name: 'اشتباه گفتی سکه کم شد',
            command: 'play_voice',
            param: 12
        },
        {
            name: 'درست بگیم سکه میده',
            command: 'play_voice',
            param: 13
        },

        {
            name: 'Snore.mp3',
            command: 'play_voice',
            param: 15
        },
        {
            name: 'بریم مرحله بعدی',
            command: 'play_voice',
            param: 16
        },
        {
            name: 'بشین پیش ما',
            command: 'play_voice',
            param: 17
        },
        {
            name: 'درست گفتی',
            command: 'play_voice',
            param: 18
        },
        {
            name: 'بله',
            command: 'play_voice',
            param: 3
        },
        {
            name: 'بشین روی صندلی',
            command: 'play_voice',
            param: 19
        },
        {
            name: 'بیا بازی باب اسفنجی',
            command: 'play_voice',
            param: 20
        },
        {
            name: 'اسمت چیه',
            command: 'play_voice',
            param: 24
        },
        {
            name: 'حواستو جمع کن',
            command: 'play_voice',
            param: 26
        },
        {
            name: 'هورا درست شد',
            command: 'play_voice',
            param: 27
        },
        {
            name: 'حوصلم سر رفته',
            command: 'play_voice',
            param: 28
        },
        {
            name: 'من خسته شدم دیگه',
            command: 'play_voice',
            param: 29
        },
        {
            name: 'من خیلی باب اسفنجیو دوست دارم',
            command: 'play_voice',
            param: 30
        },

        {
            name: 'خب این مرحله تموم شد',
            command: 'play_voice',
            param: 33
        },
        {
            name: 'نباید داد بزنی',
            command: 'play_voice',
            param: 34
        },
        {
            name: 'باید ساکت باشی',
            command: 'play_voice',
            param: 35
        },
        {
            name: 'چقد سکهامون زیاد شد',
            command: 'play_voice',
            param: 36
        },
        {
            name: 'زود باش بگو',
            command: 'play_voice',
            param: 37
        }*/
    ]
}];
let soundsCommands = [

    /*{
        name: 'Play Interactive Sounds',
        commands: [
            {
                name: 'سلام',
                command: 'play_voice',
                param: 14
            },
            {
                name: 'خوبی؟',
                command: 'play_voice',
                param: 31
            },
            {
                name: 'ممنون تو خوبی؟',
                command: 'play_voice',
                param: 32
            },
            {
                name: 'آره فکر خوبیه',
                command: 'play_voice',
                param: 2
            },
            {
                name: 'موافقم یکی تو یکی من',
                command: 'play_voice',
                param: 10
            },
            {
                name: 'اول من شروع میکنم',
                command: 'play_voice',
                param: 7
            },
            {
                name: 'باشه شروع کن',
                command: 'play_voice',
                param: 11
            },
            {
                name: 'اول تو بگو',
                command: 'play_voice',
                param: 8
            },
            {
                name: 'حالا نوبت منه',
                command: 'play_voice',
                param: 25
            },
            {
                name: 'آفرین',
                command: 'play_voice',
                param: 0
            },
            {
                name: 'آره برنده شدیم',
                command: 'play_voice',
                param: 1
            },
            {
                name: 'آره من اشتباه گفتم',
                command: 'play_voice',
                param: 4
            },
            {
                name: 'اشتباه بگی عصبانی میشه',
                command: 'play_voice',
                param: 5
            },
            {
                name: 'عصبانی شد',
                command: 'play_voice',
                param: 6
            },

            {
                name: 'هورا برنده شدیم',
                command: 'play_voice',
                param: 9
            },
            {
                name: 'اشتباه گفتی سکه کم شد',
                command: 'play_voice',
                param: 12
            },
            {
                name: 'درست بگیم سکه میده',
                command: 'play_voice',
                param: 13
            },

            {
                name: 'Snore.mp3',
                command: 'play_voice',
                param: 15
            },
            {
                name: 'بریم مرحله بعدی',
                command: 'play_voice',
                param: 16
            },
            {
                name: 'بشین پیش ما',
                command: 'play_voice',
                param: 17
            },
            {
                name: 'درست گفتی',
                command: 'play_voice',
                param: 18
            },
            {
                name: 'بله',
                command: 'play_voice',
                param: 3
            },
            {
                name: 'بشین روی صندلی',
                command: 'play_voice',
                param: 19
            },
            {
                name: 'بیا بازی باب اسفنجی',
                command: 'play_voice',
                param: 20
            },
            {
                name: 'اسمت چیه',
                command: 'play_voice',
                param: 24
            },
            {
                name: 'حواستو جمع کن',
                command: 'play_voice',
                param: 26
            },
            {
                name: 'هورا درست شد',
                command: 'play_voice',
                param: 27
            },
            {
                name: 'حوصلم سر رفته',
                command: 'play_voice',
                param: 28
            },
            {
                name: 'من خسته شدم دیگه',
                command: 'play_voice',
                param: 29
            },
            {
                name: 'من خیلی باب اسفنجیو دوست دارم',
                command: 'play_voice',
                param: 30
            },

            {
                name: 'خب این مرحله تموم شد',
                command: 'play_voice',
                param: 33
            },
            {
                name: 'نباید داد بزنی',
                command: 'play_voice',
                param: 34
            },
            {
                name: 'باید ساکت باشی',
                command: 'play_voice',
                param: 35
            },
            {
                name: 'چقد سکهامون زیاد شد',
                command: 'play_voice',
                param: 36
            },
            {
                name: 'زود باش بگو',
                command: 'play_voice',
                param: 37
            }
        ]
    },*/
    
    {
    name: 'Play Animal Sounds',
    commands: [
        {
            name: 'آهو',
            command: 'play_voice',
            param: 20
        },
        {
            name: 'اسب',
            command: 'play_voice',
            param: 21
        },
        {
            name: 'ببر',
            command: 'play_voice',
            param: 22
        },
        {
            name: 'گاو',
            command: 'play_voice',
            param: 23
        },
        {
            name: 'گربه',
            command: 'play_voice',
            param: 24
        },
        {
            name: 'گرگ',
            command: 'play_voice',
            param: 25
        },
        {
            name: 'گوسفند',
            command: 'play_voice',
            param: 26
        },
        {
            name: 'خرگوش',
            command: 'play_voice',
            param: 27
        },
        {
            name: 'خروس',
            command: 'play_voice',
            param: 28
        },
        {
            name: 'مرغ',
            command: 'play_voice',
            param: 29
        },
        {
            name: 'پلنگ',
            command: 'play_voice',
            param: 30
        },
        {
            name: 'روباه',
            command: 'play_voice',
            param: 31
        },
        {
            name: 'سگ',
            command: 'play_voice',
            param: 32
        },
        {
            name: 'شیر',
            command: 'play_voice',
            param: 33
        }
    ]
},
    {
        name: 'Play Fruit Sounds',
        commands: [
            {
                name: 'آناناس',
                command: 'play_voice',
                param: 34
            },
            {
                name: 'انگور',
                command: 'play_voice',
                param: 35
            },
            {
                name: 'گیلاس',
                command: 'play_voice',
                param: 36
            },
            {
                name: 'گلابی',
                command: 'play_voice',
                param: 37
            },
            {
                name: 'هندوانه',
                command: 'play_voice',
                param: 38
            },
            {
                name: 'هلو',
                command: 'play_voice',
                param: 39
            },
            {
                name: 'خیار',
                command: 'play_voice',
                param: 40
            },
            {
                name: 'کیوی',
                command: 'play_voice',
                param: 41
            },
            {
                name: 'موز',
                command: 'play_voice',
                param: 42
            },
            {
                name: 'پرتغال',
                command: 'play_voice',
                param: 43
            },
            {
                name: 'سیب',
                command: 'play_voice',
                param: 44
            },
            {
                name: 'زردآلو',
                command: 'play_voice',
                param: 45
            },
        ]
    },
    {
        name: 'Play Body Sounds',
        commands: [
            {
                name: 'ابرو',
                command: 'play_voice',
                param: 46
            },
            {
                name: 'انگشت',
                command: 'play_voice',
                param: 47
            },
            {
                name: 'بازو',
                command: 'play_voice',
                param: 48
            },
            {
                name: 'چشم',
                command: 'play_voice',
                param: 49
            },
            {
                name: 'دست',
                command: 'play_voice',
                param: 50
            },
            {
                name: 'گردن',
                command: 'play_voice',
                param: 51
            },
            {
                name: 'گوش',
                command: 'play_voice',
                param: 52
            },
            {
                name: 'لب',
                command: 'play_voice',
                param: 53
            },
            {
                name: 'پا',
                command: 'play_voice',
                param: 54
            },
            {
                name: 'سر',
                command: 'play_voice',
                param: 55
            },
            {
                name: 'شکم',
                command: 'play_voice',
                param: 56
            }
        ]
    },
];
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(e){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,n=function(){return e.URL||e.webkitURL||e},o=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in o,i=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),c=e.webkitRequestFileSystem,d=e.requestFileSystem||c||e.mozRequestFileSystem,u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s="application/octet-stream",f=0,l=4e4,v=function(e){var t=function(){"string"==typeof e?n().revokeObjectURL(e):e.remove()};setTimeout(t,l)},p=function(e,t,n){t=[].concat(t);for(var o=t.length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(i){u(i)}}},w=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e},y=function(t,u,l){l||(t=w(t));var y,m,S,h=this,R=t.type,O=!1,g=function(){p(h,"writestart progress write writeend".split(" "))},b=function(){if(m&&a&&"undefined"!=typeof FileReader){var o=new FileReader;return o.onloadend=function(){var e=o.result;m.location.href="data:attachment/file"+e.slice(e.search(/[,;]/)),h.readyState=h.DONE,g()},o.readAsDataURL(t),void(h.readyState=h.INIT)}if((O||!y)&&(y=n().createObjectURL(t)),m)m.location.href=y;else{var r=e.open(y,"_blank");void 0===r&&a&&(e.location.href=y)}h.readyState=h.DONE,g(),v(y)},E=function(e){return function(){return h.readyState!==h.DONE?e.apply(this,arguments):void 0}},N={create:!0,exclusive:!1};return h.readyState=h.INIT,u||(u="download"),r?(y=n().createObjectURL(t),void setTimeout(function(){o.href=y,o.download=u,i(o),g(),v(y),h.readyState=h.DONE})):(e.chrome&&R&&R!==s&&(S=t.slice||t.webkitSlice,t=S.call(t,0,t.size,s),O=!0),c&&"download"!==u&&(u+=".download"),(R===s||c)&&(m=e),d?(f+=t.size,void d(e.TEMPORARY,f,E(function(e){e.root.getDirectory("saved",N,E(function(e){var n=function(){e.getFile(u,N,E(function(e){e.createWriter(E(function(n){n.onwriteend=function(t){m.location.href=e.toURL(),h.readyState=h.DONE,p(h,"writeend",t),v(e)},n.onerror=function(){var e=n.error;e.code!==e.ABORT_ERR&&b()},"writestart progress write abort".split(" ").forEach(function(e){n["on"+e]=h["on"+e]}),n.write(t),h.abort=function(){n.abort(),h.readyState=h.DONE},h.readyState=h.WRITING}),b)}),b)};e.getFile(u,{create:!1},E(function(e){e.remove(),n()}),E(function(e){e.code===e.NOT_FOUND_ERR?n():b()}))}),b)}),b)):void b())},m=y.prototype,S=function(e,t,n){return new y(e,t,n)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return n||(e=w(e)),navigator.msSaveOrOpenBlob(e,t||"download")}:(m.abort=function(){var e=this;e.readyState=e.DONE,p(e,"abort")},m.readyState=m.INIT=0,m.WRITING=1,m.DONE=2,m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null,S)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define([],function(){return saveAs});
var parrotCommands = [
    // Added manually in html
    // {
    //     name: 'Main',
    //     commands: [
    //         {
    //             name:'Start',
    //             command: 'start'
    //         },
    //         {
    //             name:'Stop',
    //             command: 'stop'
    //         }
    //     ]
    // },
    // Motor1 added in motor1Commands
    // {
    //     name: 'Motors',
    //     commands: [
    //         {
    //             name:'Start Motor 1',
    //             command: 'motor1'
    //         },
    //         {
    //             name:'Stop Motor 1',
    //             command: 'stop_motor1'
    //         },
    //         {
    //             name:'Stop Motor 2',
    //             command: 'stop_motor2'
    //         }
    //     ]
    // },
    {
        name: 'Eyes',
        commands: [
            {
                name:'Open Eyes',
                command: 'open_eyes'
            },
            {
                name:'Close Eyes',
                command: 'close_eyes'
            },
            {
                name:'Blink Eyes',
                command: 'blink_eyes'
            }
        ]
    },
    {
        name: 'Mouth',
        commands: [
            {
                name:'Open Mouth',
                command: 'open_mouth'
            },
            {
                name:'Close Mouth',
                command: 'close_mouth'
            },
            {
                name:'Open And Close Mouth',
                command: 'open_and_close_mouth'
            }
        ]
    },
    // TODO :: This is Temporary
    // {
    //     name: 'Movement',
    //     commands: [
    //         {
    //             name:'Move Left',
    //             command: 'move_left'
    //         },
    //         {
    //             name:'Move Right',
    //             command: 'move_right'
    //         }
    //     ]
    // },
    // {
    //     name: 'Wings',
    //     commands: [
    //         {
    //             name:'Open Wings',
    //             command: 'open_wings'
    //         },
    //         {
    //             name:'Close Wings',
    //             command: 'close_wings'
    //         }
    //     ]
    // },
    {
        name: 'Cards Position',
        commands: [
            {
                name: 'چپ',
                command: 'play_voice',
                param: 21
            },
            {
                name: 'وسط',
                command: 'play_voice',
                param: 23
            },
	    {
                name: 'راست',
                command: 'play_voice',
                param: 22
            },
	    
        ]
    },


];

var app = new Vue({
    el: '#vue-app',
    data: {
        state: 'Hi!',
        stateClass: 'alert-info',
        command: '',
        commandResult: 'response: ',
        videoFrame: undefined,
        videoEnabled: false,
        params: [
            { name: '/camera/device_id' },
            { name: '/parrot/port' }
        ],
        isParrotConnected: false,
        parrotCommands: parrotCommands,
        mainCommands: mainCommands,
        play:false,
        motor1Play:false,
        motor1Commands:motor1Commands,
        soundsCommands:soundsCommands,
        lightWheelCommands:lightWheelCommands,
        lightWheelPlay : false,
        senario1:senario1,
        senario2:senario2,
        intracriveSounds:intractiveSoundsCommand,
        loginUIclass:"disabled",
        loginBtnClass:"disabled",
        loginInputsClass:"active",
        endClass:"",
        loginedActive:"",
        name:"",
        familyName:"",
        number:"",
        users : {},
        userId: 0,
        url:"http://127.0.0.1:8000/"






    },
    methods: {
        changeName: function(event){
            app.name = event.target.value;
            this.checkLoginBtnIsOk();
        },
        changeFamilyName : function (event) {
            app.familyName = event.target.value;
            this.checkLoginBtnIsOk();
        },
        changeNumber: function (event) {
            app.number = event.target.value;
            this.checkLoginBtnIsOk();
        },
        checkLoginBtnIsOk : function () {

            if((app.number.length === 11  || app.number.length === 13 || app.number.length === 8) && app.name !== "" && app.familyName!== "")
            {
                app.loginBtnClass = "";
            }
            else
                app.loginBtnClass = "disabled";
        },
        login: function (event) {
            app.loginUIclass  = "";
            app.loginInputsClass = "disabled";
            app.loginedActive = "active";
            data ={
                name : app.name,
                familyName : app.familyName,
                phoneNumber : app.number
            };
            this.sendLogData(data);
        },
        sendLogData : function(data)
        {
            this.$http.options.emulateJSON = true;
            let url = app.url + "Log/";
            this.$http.post(url, data).then(response => {
                console.log(response)
                app.userId = response.body.id;
            }, response => {
                console.log(response);
            });
        },
        sendCommandData : function(data)
        {
            this.$http.options.emulateJSON = true;
            let url = app.url + "Command/";
            this.$http.post(url, data).then(response => {
               console.log(response);
            }, response => {
                console.log(response);
            });
        },
        endTest : function()
        {
            app.loginInputsClass = "disabled";
            app.loginUIclass = "disabled";
            app.loginedActive = "";
        },
        sendCommand: function (c, p, service) {
            pa = p !== undefined ? p : null;
            this.sendCommandData({owner : app.userId, commandName : c, param : pa});
            let trimmed_c = c.trim();
            if (!trimmed_c) {
                return;
            }
            app.commandResult = '';

            var request;

            if (typeof p !== 'undefined') {
                request = new ROSLIB.ServiceRequest({
                    command: trimmed_c,
                    param: p
                });
            }
            else {
                request = new ROSLIB.ServiceRequest({
                    command: trimmed_c
                });
            }

            if (typeof service !== 'undefined' && service === 'arduino') {
                arduinoClient.callService(request, function (result) {
                    console.log('Result for service call on ' + arduinoClient.name + ': ' + result.result);
                    app.commandResult = 'response: ' + arduinoClient.name + ': ' + result.result;
                });
            } else {
                parrotClient.callService(request, function (result) {
                    console.log('Result for service call on ' + parrotClient.name + ': ' + result.result);
                    app.commandResult = 'response: ' + parrotClient.name + ': ' + result.result;
                });
            }
        },
        sendStartOrStopCommand :function () {
            var c ;
            if(app.play === true)
            {
                c = 'stop';
            }
            else
                c = 'start';
            app.play = !app.play;
            this.sendCommand(c, undefined, 'arduino');
            this.sendCommand(c);
        },
        sendStartOrStopMotor1Command :function () {
            var c ;
            if(app.motor1Play === true)
            {
                c = app.motor1Commands.stop.command;
            }
            else
                c = app.motor1Commands.start.command;
            app.motor1Play= !app.motor1Play;
            this.sendCommand(c);
        },
        sendStartOrStopLightWheelCommand :function () {
            var c ;
            if(app.lightWheelPlay === true)
            {
                c = app.lightWheelCommands.stop.command;
            }
            else
                c = app.lightWheelCommands.start.command;
            app.lightWheelPlay= !app.lightWheelPlay;
            this.sendCommand(c);
        },
        toggleCamera: function () {
            app.videoEnabled = !app.videoEnabled;
            if (app.videoEnabled) {
                subscribeToCamera();
            }
            else {
                if (cameraTopic) {
                    cameraTopic.unsubscribe();
                }
            }
        },
        groupSend: function(c) {
            sendCommand(c);
        }
    }
})

$(function(){
    $('#command-input').keypress(function(e){
        if(e.which == 13) {
            app.sendCommand();
        }
    })
})

var cameraTopic;

var logLevels = {
    1: 'secondary', //debug,
    2: 'info', //info,
    4: 'warning', //warn,
    8: 'danger', //error,
    16: 'danger', //fatal
};

var logLevelNames = {
    1: 'debug',
    2: 'info',
    4: 'warn',
    8: 'error',
    16: 'fatal'
};

function subscribeToLogs() {
    //subscribe to a /rosout topic
    var topic = new ROSLIB.Topic({
        ros : ros,
        name : '/rosout',
        messageType : 'rosgraph_msgs/Log'
    });

    topic.subscribe(function(message) {
        console.log('Received message on ' + topic.name + ': ' + message.data);
        
        // If desired, we can unsubscribe from the topic as well.
        // listener.unsubscribe();

        var row = document.createElement("tr");
        row.setAttribute('class', 'table-' + logLevels[message.level]);
        
        var levelRow = document.createElement("td");
        levelRow.innerHTML = logLevelNames[message.level];

        var nameRow = document.createElement("td");
        nameRow.innerHTML = message.name;

        var messageRow = document.createElement("td");
        messageRow.innerHTML = message.msg;

        row.appendChild(levelRow);
        row.appendChild(nameRow);
        row.appendChild(messageRow);

        document.getElementById("log-table-body").appendChild(row);
        var logTable = document.getElementById("log-table");
        logTable.scrollTop = logTable.scrollHeight;
    });
}

function subscribeToCamera() {
    cameraTopic = new ROSLIB.Topic({
        ros : ros,
        name : '/camera1/image_raw/compressed',
        messageType : 'sensor_msgs/CompressedImage'
    });

    cameraTopic.subscribe(function(message) {
        app.videoFrame = 'data:image/jpeg;base64,' + message.data;
    });
}

// Connecting to ROS
// -----------------
var ros = new ROSLIB.Ros();

// If there is an error on the backend, an 'error' emit will be emitted.
ros.on('error', function (error) {
    console.log(error);
    app.state = 'connection error';
    app.stateClass = 'alert-error';
});

// Find out exactly when we made a connection.
ros.on('connection', function () {
    console.log('connected!');
    app.state = 'connected!';
    app.stateClass = 'alert-success';

    subscribeToLogs();
    
    if (app.videoFrame) {
        subscribeToCamera();
    }
});

ros.on('close', function () {
    console.log('connection closed');
    app.state = 'connection closed';
    app.stateClass = 'alert-dark'
});

app.state = 'connecting...';

ros.connect('ws://' + location.hostname + ':9090');

var parrotClient = new ROSLIB.Service({
    ros: ros,
    name: '/parrot',
    serviceType: 'parrot/Parrot'
});

var arduinoClient = new ROSLIB.Service({
    ros: ros,
    name: '/arduino',
    serviceType: 'parrot/Arduino'
});

function setParam(paramName, value) {
    var param = new ROSLIB.Param({
        ros : ros,
        name : paramName
    });

    param.set(value);
}

function getParam(paramName, callback) {
    var param = new ROSLIB.Param({
        ros : ros,
        name : paramName
    });

    param.get(function(value) {
        callback(value);
    });
}
