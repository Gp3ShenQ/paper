function fir(){let t=$(window).scrollTop();0==t?$(".scroll-down").show():t<=99?($(".scroll-down").hide(),$(".mountain:nth-child(1)").css("top","100%")):t<=399?($(".mountain:nth-child(1)").css("top","0px"),$(".mountain:nth-child(2)").css("top","100%")):t<=799?($(".mountain:nth-child(2)").css("top","0px"),$(".mountain:nth-child(3)").css("top","100%")):t<=1199?($(".mountain:nth-child(3)").css("top","0px"),$(".mountain:nth-child(4)").css("top","100%")):t<=1599?($(".mountain:nth-child(4)").css("top","0px"),$(".mountain:nth-child(5)").css("top","100%")):t<=1999?($(".mountain:nth-child(5)").css("top","0px"),$(".mountain:nth-child(6)").css("top","100%")):t<=2399?($(".mountain:nth-child(6)").css("top","-5px"),$(".mountain:nth-child(7)").css("top","100%")):t<=2799?($(".mountain:nth-child(7)").css("top","-5px"),$(".mountain:nth-child(8)").css("top","100%")):t<=3199?($(".mountain:nth-child(8)").css("top","-5px"),$(".mountain:nth-child(9)").css("top","100%")):t<=3599?($(".mountain:nth-child(9)").css("top","-5px"),$(".mountain:nth-child(10)").css("top","100%")):t<=4e3?$(".mountain:nth-child(10)").css("top","-20px"):t<=6299?($(".three-house:nth-child(1)").css("top","0"),$(".three-house:nth-child(2)").css("top","100%")):t<=6899?($(".three-house:nth-child(2)").css("top","0"),$(".three-house:nth-child(3)").css("top","100%")):t<=7399?($(".three-house:nth-child(3)").css("top","0"),$(".three-house:nth-child(4)").css("top","100%")):t<=7999&&$(".three-house:nth-child(4)").css("top","0")}function ind(){$(window).on("scroll",(function(){fir()}))}fir(),ind();