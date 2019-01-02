jQuery(document).ready(function(){
	/////////////////////////////////////////////////////////
	
			//LOADING
	
	/////////////////////////////////////////////////////////	
	
	setTimeout(function(){
		$('.loading').fadeOut();
	},4000);
	
	
	/////////////////////////////////////////////////////////
	
			//MENU SCROLL
	
	/////////////////////////////////////////////////////////	

	var menu=$('#header_box .menu_box p');
	var content=$('#section>div');
	
	$('.menu_box .profile').click(function(){		
		$('html, body').stop().animate({scrollTop:'838px'},1000);
		return false;
	});
	
	$('.menu_box .css').click(function(){		
		$('html, body').stop().animate({scrollTop:'1644px'},1000);
		return false;
	});
	
	$('.menu_box .jquery1').click(function(){		
		$('html, body').stop().animate({scrollTop:'3244px'},1000);
		return false;
	});
	
	$('.menu_box .mobile').click(function(){		
		$('html, body').stop().animate({scrollTop:'4844px'},1000);
		return false;
	});
	
	$('.menu_box .jquery2').click(function(){		
		$('html, body').stop().animate({scrollTop:'6444px'},1000);
		return false;
	});
	
	$('.menu_box .adaptive1').click(function(){		
		$('html, body').stop().animate({scrollTop:'8044px'},1000);
		return false;
	});
	
	$('.menu_box .adaptive2').click(function(){		
		$('html, body').stop().animate({scrollTop:'9644px'},1000);
		return false;
	});
	
	$('.menu_box .video').click(function(){		
		$('html, body').stop().animate({scrollTop:'11244px'},1000);
		return false;	
	});	
	
	$('.menu_box .epilogue').click(function(){		
		$('html, body').stop().animate({scrollTop:'12844px'},1000);
		return false;	
	});		

	/////////////////////////////////////////////////////////
	
						//MENU HOVER 
	
	/////////////////////////////////////////////////////////		
	$('#header_box .menu_box p').hover(function(){
		var tg=$(this);

		var aTag=tg.find('a');
		aTag.css({color:'#4e9ea9'});
	},function(){
		var tg=$(this);

		var aTag=tg.find('a');
		aTag.css('color','#E6E6E6');
	});

	/////////////////////////////////////////////////////////
	
			//BOOK MARK

	/////////////////////////////////////////////////////////	

	   $('.fav').on('click', function(e) {
			var bookmarkURL = window.location.href;
			var bookmarkTitle = document.title;
			var triggerDefault = false;
	 
			if (window.sidebar && window.sidebar.addPanel) {
				// Firefox version < 23
				window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
			} else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) {
				// Firefox version >= 23 and Opera Hotlist
				var $this = $(this);
				$this.attr('href', bookmarkURL);
				$this.attr('title', bookmarkTitle);
				$this.attr('rel', 'sidebar');
				$this.off(e);
				triggerDefault = true;
			} else if (window.external && ('AddFavorite' in window.external)) {
				// IE Favorite
				window.external.AddFavorite(bookmarkURL, bookmarkTitle);
			} else {
				// WebKit - Safari/Chrome
				alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.');
			}
	 
			return triggerDefault;
		});
	
		$('.tape li.dont').click(function(e){
			e.preventDefault();
		});

	/////////////////////////////////////////////////////////
	
			//PROFILE TOP SECTION
	
	/////////////////////////////////////////////////////////
	
	$('.center_box .top').stop().animate({width:'100%'},1000);
	$('.center_box .bottom').stop().animate({width:'100%'},1000);
	$('.center_box .right').stop().animate({height:'100%'},1000);
	$('.center_box .left').stop().animate({height:'100%'},1000);
	
	$('.text_position .title1').animate({left:0,opacity:1},500,function(){
		$('.text_position .title2').animate({left:0,opacity:1},500,function(){
			$('.text_position .title3').animate({left:0,opacity:1},500,function(){
				$('.text_position .title4').animate({left:0,opacity:1},500)
			});
		});
	});

	

		var circle=1
		$('.center_box img.star').css({transform:'rotate(360deg)'})
		setInterval(function(){
			circle++;
			$('.center_box img.star').css({transform:'rotate('+360*circle+'deg)'})

		},235000)

	

	/////////////////////////////////////////////////////////
	
			//PROFILE BOTTOM SECTION
	
	/////////////////////////////////////////////////////////	
	
	
	var i=$('.profile_box>li').index();
	
	$('.profile_box>.list1').hover(function(){
		var tg=$(this);
		$('.profile_box>.list2').stop().animate({width:'15%',left:'55%'},200);
		$('.profile_box>.list3').stop().animate({width:'15%',left:'70%'},200);
		$('.profile_box>.list4').stop().animate({width:'15%',left:'85%'},200);
		tg.stop().animate({width:'55%'},200)
		tg.find('ul').stop().animate({width:'600px',left:'25%'},200);
		tg.find('p').stop().animate({top:'100px',left:'33%'},200);
		tg.find('.black').addClass('on');
		
	},function(){
		var tg=$(this);
		tg.stop().animate({width:'25%'},200)
		tg.find('ul').stop().animate({width:'0%',left:'30%'},200);
		tg.find('p').stop().animate({top:'280px'},200);
		$('.profile_box>.list2').stop().animate({width:'25%',left:'25%'},200);
		$('.profile_box>.list3').stop().animate({width:'25%',left:'50%'},200);
		$('.profile_box>.list4').stop().animate({width:'25%',left:'75%'},200);
		tg.find('.black').removeClass('on');
	});
	
	$('.profile_box>.list2').hover(function(){
		var tg=$(this);
		$('.profile_box>.list1').stop().animate({width:'15%',left:'0'},200)
		$('.profile_box>.list3').stop().animate({width:'15%',left:'70%'},200)
		$('.profile_box>.list4').stop().animate({width:'15%',left:'85%'},200)
		tg.stop().animate({left:'15%',width:'55%'},200);
		tg.find('ul').stop().animate({width:'600px',left:'25%'},200);
		tg.find('p').stop().animate({top:'100px',left:'20%'},200);
		tg.find('.black').addClass('on');
		
	},function(){
		var tg=$(this);
		tg.stop().animate({left:'25%',width:'25%'},200);
		tg.find('ul').stop().animate({width:'0%',left:'70%'},200);
		tg.find('p').stop().animate({top:'280px'},200);
		$('.profile_box>.list1').stop().animate({width:'25%',left:'0'},200);
		$('.profile_box>.list3').stop().animate({width:'25%',left:'50%'},200);
		$('.profile_box>.list4').stop().animate({width:'25%',left:'75%'},200);
		tg.find('.black').removeClass('on');
	});
	
	$('.profile_box>.list3').hover(function(){
		var tg=$(this);
		$('.profile_box>.list1').stop().animate({width:'15%',left:'0'},200)
		$('.profile_box>.list2').stop().animate({width:'15%',left:'15%'},200)
		$('.profile_box>.list4').stop().animate({width:'15%',left:'85%'},200)
		tg.stop().animate({left:'30%',width:'55%'},200);
		tg.find('ul').stop().animate({width:'600px',left:'24%'},200);
		tg.find('p').stop().animate({top:'100px',left:'30%'},200);	
		tg.find('.black').addClass('on');
		
	},function(){
		var tg=$(this);
		tg.stop().animate({left:'50%',width:'25%'},200);
		tg.find('ul').stop().animate({width:'0%',left:'50%'},200);
		tg.find('p').stop().animate({top:'280px'},200);		
		$('.profile_box>.list1').stop().animate({width:'25%',left:'0'},200);
		$('.profile_box>.list2').stop().animate({width:'25%',left:'25%'},200);
		$('.profile_box>.list4').stop().animate({width:'25%',left:'75%'},200);
		tg.find('.black').removeClass('on');
	});

	$('.profile_box>.list4').hover(function(){
		var tg=$(this);
		$('.profile_box>.list1').stop().animate({width:'15%',left:'0'},200)
		$('.profile_box>.list2').stop().animate({width:'15%',left:'15%'},200)
		$('.profile_box>.list3').stop().animate({width:'15%',left:'30%'},200)
		tg.stop().animate({left:'45%',width:'55%'},200);
		tg.find('ul').stop().animate({width:'600px',left:'24%'},200);
		tg.find('p').stop().animate({top:'100px',left:'38%'},200,function(){
			$('.list4 .w95').stop().animate({width:'80%'},2500);
			$('.list4 .w85').stop().animate({width:'75%'},2300);
			$('.list4 .w75').stop().animate({width:'65%'},2000);
			var a=1;
			var b=1;
			var c=1;
			var per95=$('.w95');
			var per85=$('.w85');
			var per75=$('.w75');
			function setPer1(){
				setTimeout(function(){
				a++;
				per95.text(a+'%');
				if(a>94)   return false;
				setPer1();
				},24);
			}
			setPer1();
			function setPer2(){
				setTimeout(function(){
				b++;
				per85.text(b+'%');
				if(b>84)   return false;
				setPer2();
				},20);
			}
			setPer2();
			function setPer3(){
				setTimeout(function(){
				c++;
				per75.text(c+'%');
				if(c>74)   return false;
				setPer3();
				},25);
			}
			setPer3();			
		});	
		tg.find('.black').addClass('on');

		
		
		
	},function(){
		var tg=$(this);
		tg.stop().animate({left:'75%',width:'25%'},200);
		tg.find('ul').stop().animate({width:'0%',left:'50%'},200);
		tg.find('p').stop().animate({top:'280px'},200);			
		$('.profile_box>.list1').stop().animate({width:'25%',left:'0'},200);
		$('.profile_box>.list2').stop().animate({width:'25%',left:'25%'},200);
		$('.profile_box>.list3').stop().animate({width:'25%',left:'50%'},200);
		tg.find('.black').removeClass('on');
	});
	


	/////////////////////////////////////////////////////////
	
			//+CSS
	
	/////////////////////////////////////////////////////////	
	
	
	
	function aniCss(){

	
	$('#css .img_box a.main').animate({bottom:'-140px',right:'-240px'},800);
	$('#css .img_box a.sub1').animate({bottom:'-90px',right:'-280px'},1000);
	$('#css .img_box a.sub2').animate({bottom:'-40px',right:'-220px'},1200);
	$('#css .img_box a.sub3').animate({bottom:'10px',right:'-160px'},1400);
	$('#css .img_box a.sub4').animate({bottom:'60px',right:'-100px'},1600);
	$('#css .img_box a.sub5').animate({bottom:'110px',right:'-40px'},1800);
	$('#css .img_box a.sub6').animate({bottom:'160px',right:'20px'},2000);

	var mainImg=$('#css .img_box a.main img')
	
	$('#css .img_box').hover(function(){	
		mainImg.attr('src',mainImg.attr('src').replace('off.png','on.png'));	
	},function(){
		mainImg.attr('src',mainImg.attr('src').replace('on.png','off.png'));
	});		
	
	};
	



	

		
	


	/////////////////////////////////////////////////////////
	
			//Mobile
	
	/////////////////////////////////////////////////////////		

	function aniMob(){
	

		$('#mobile .mobile8').stop().animate({top:'500px',left:'620px'},150,function(){
			$('#mobile .mobile6').stop().animate({top:'530px',left:'220px'},150,function(){
				$('#mobile .mobile4').animate({top:'250px',left:'180px'},150);
				$('#mobile .mobile7').animate({top:'550px',left:'-200px'},200);	
				$('#mobile .mobile5').stop().animate({top:'270px',left:'670px'},250,function(){
					$('#mobile .mobile1').stop().animate({top:'0px',left:'-260px'},150);
					$('#mobile .mobile2').stop().animate({top:'20px',left:'240px'},200);
					$('#mobile .mobile3').stop().animate({top:'270px',left:'-240px'},250);			
					$('#mobile .mobile9').stop().animate({top:'0px',left:'680px'},250);				
				});	
			});
		});
	};
	
	$('#mobile >.img_box').hover(function(){
		var tg=$(this);
		$('.mobile4 > .off').css({opacity:1});
	},function(){
		var tg=$(this);
		$('.mobile4 > .off').css({opacity:0});
	});
	
	$('#mobile >.img_box a.follow').click(function(){
		
		window.open('13_mobile/1limit/index/index1.html','_blank',"resizable=yes,toolbar=yes,width=360,height=640");
		return false;
	});


	setInterval(function(){
		$('#mobile .text .to_jiwoo .fa-angle-double-left').stop().animate({left:'-10px'},500,function(){
			$('.fa-angle-double-left').stop().animate({left:'0px'},500)
		});
	},1000);
	

	

	/////////////////////////////////////////////////////////
	
						//jQuery1
	
	/////////////////////////////////////////////////////////		
	
	
	function aniJs1(){

	var aTag=$('#jquery1 .img_box a')
	$('#jquery1 .img_box .sub2').stop().animate({bottom:'0px',right:'50px',opacity:0.8},150);
	$('#jquery1 .img_box .sub3').stop().animate({bottom:'80px',right:'50px',opacity:0.8},200);
	$('#jquery1 .img_box .sub4').stop().animate({bottom:'160px',right:'50px',opacity:0.8},250);
	$('#jquery1 .img_box .sub5').stop().animate({bottom:'240px',right:'50px',opacity:0.8},300);
	$('#jquery1 .img_box .sub1').stop().animate({bottom:'320px',right:'50px',opacity:0.8},350);
	
	$('#jquery1 .img_box').hover(function(){
		$('#jquery1 .img_box .on').stop().animate({opacity:1},200)
	},function(){
		$('#jquery1 .img_box .on').stop().animate({opacity:0},300);
	});		
	
	};

	

	
	/////////////////////////////////////////////////////////
	
						//jQuery2
	
	/////////////////////////////////////////////////////////		

	function aniJs2(){
		$('#jquery2 .img_box .page1').stop().animate({left:'-10%',opacity:0.9},150, function(){
			$('#jquery2 .img_box .page2').stop().animate({right:'-10%',opacity:0.9},150, function(){
				$('#jquery2 .img_box .page3').stop().animate({top:'-1%',opacity:0.9},150, function(){
					$('#jquery2 .img_box .page4').stop().animate({bottom:'-11%',opacity:0.9},150)

				});
			});
		});
		
		
		$('#jquery2 .img_box').hover(function(){
			var tg=$(this);	
			tg.find('.bg_jquery2').stop().animate({opacity:0.6},300);
		},function(){
			var tg=$(this); 
			tg.find('.bg_jquery2').stop().animate({opacity:0},300);		
		})
	}
	

	/////////////////////////////////////////////////////////
	
						//ADAPTIVE1
	
	/////////////////////////////////////////////////////////			
	

	$('#adaptive1 >.text_box .text ul>li.phone2').click(function(){
		
		window.open('project04/index.html','_blank',"resizable=yes,toolbar=yes,width=450,height=640");
		return false;
	});	
	$('#adaptive1 >.text_box .text ul>li.pad2').click(function(){
		
		window.open('project04/index.html','_blank',"resizable=yes,toolbar=yes,width=1039,height=950");
		return false;
	});	
	/////////////////////////////////////////////////////////
	
						//ENDING CREDIT
	
	/////////////////////////////////////////////////////////	

	function tonadoId(){
		var tonado=0;
		setTonado=setInterval(function(){
			tonado++;
			
			$('.ending_credit').css({transform:'rotateY('+(1800+720*tonado)+'deg)'})
			if (tonado==1) {
				$('.contact').stop().fadeIn(1000);
				$('.thk').stop().fadeOut();
				tonado=tonado-2;
			}
			if(tonado==0){
				$('.thk').stop().fadeIn(1000);
				$('.contact').stop().fadeOut();
			
			}
		},5000);
	};
	tonadoId();	

	/////////////////////////////////////////////////////////
	
						//WINDOW SCROLL
	
	/////////////////////////////////////////////////////////						
		
		$(window).scroll(function(){
		
		var sct=$(window).scrollTop();

		if (sct>10){
			$('#header').stop().animate({top:'-40px'});
			$('#header h1').fadeOut();
			$('#header p').css({top:'20px',margin:0});
			$('#header p a').css({color:'#E6E6E6'});
			$('#header').css({background:'#ffffff',boxShadow:'1px 1px 1px #707070'});
			}
			else{
			$('#header').stop().animate({top:'0px'});
			$('#header h1').fadeIn();
			$('#header p').css({top:'0px',margin:0});		
			$('#header p a').css({color:'#ffffff'});
			$('#header').css({background:'none',boxShadow:'0px 0px 0px #707070'});			
			};
			

		if (sct<1600) {
			$('#header_box p:eq(0) a').css({color:'#1DC4DA'});
			}		

				
		var css1=$('#css');
		if (1640<=sct && sct<2504) {
			aniCss(); 
			css1.css({position:'fixed',top:38}); 
			css1.fadeIn();
			$('#css .text_box').stop().animate({left:'50%'},300);
			$('#header_box p:eq(1) a').css({color:'#4e9ea9'});
			}		
			else if (sct>2504) {
				css1.fadeOut(); 
				$('#css .text_box').stop().animate({left:'0%'},300);
				
				}
			else if (sct<1644) {
				css1.css({position:'absolute',top:'1604px'});
				$('#css .text_box').stop().animate({left:'0%'},300);
				};


		
		
		var jquery1=$('#jquery1');	
		if (3240<=sct && sct<4100) { 
			aniJs1(); 
			jquery1.css({position:'fixed',top:38}); 
			jquery1.fadeIn();
			$('#jquery1 .text_box').stop().animate({right:'50%'},300);
			$('#header_box p:eq(2) a').css({color:'#4e9ea9'});
			}
			else if (sct>4199) {
				$('#jquery1 .img_box .sub2').stop().animate({bottom:'-80px',right:'50px',opacity:0},150);
				$('#jquery1 .img_box .sub3').stop().animate({bottom:'-80px',right:'50px',opacity:0},250);
				$('#jquery1 .img_box .sub4').stop().animate({bottom:'-80px',right:'50px',opacity:0},350);
				$('#jquery1 .img_box .sub5').stop().animate({bottom:'-80px',right:'50px',opacity:0},550);
				$('#jquery1 .img_box .sub1').stop().animate({bottom:'-80px',right:'50px',opacity:0},600);		
				jquery1.fadeOut();
				$('#jquery1 .text_box').stop().animate({right:'0%'},300);				
			
			}	
			
			else if (sct<=3244) {
				jquery1.css({position:'absolute',top:'3204px'});
				$('#jquery1 .img_box .sub2').stop().animate({bottom:'-80px',right:'50px',opacity:0},150);
				$('#jquery1 .img_box .sub3').stop().animate({bottom:'-80px',right:'50px',opacity:0},250);
				$('#jquery1 .img_box .sub4').stop().animate({bottom:'-80px',right:'50px',opacity:0},350);
				$('#jquery1 .img_box .sub5').stop().animate({bottom:'-80px',right:'50px',opacity:0},550);
				$('#jquery1 .img_box .sub1').stop().animate({bottom:'-80px',right:'50px',opacity:0},600);
				$('#jquery1 .text_box').stop().animate({right:'0%'},300);		
				};


		
		var mob=$('#mobile');	
		if (4840<=sct && sct<5799) { 
			aniMob();
			mob.css({position:'fixed',top:38}); 
			mob.fadeIn();
			$('#mobile .text_box').stop().animate({right:'50%'},300);
			$('#header_box p:eq(3) a').css({color:'#4e9ea9'});
			}
			else if (sct>5799){
				mob.fadeOut();
				$('#mobile .text_box').stop().animate({right:'0%'},300);		
			}
			else if (sct<4844) {
				mob.css({position:'absolute',top:'4804px'});
				$('#mobile .text_box').stop().animate({right:'0%'},300);
				};



			
		var jsTop2=$('#jquery2').offset();
		var jquery2=$('#jquery2');	
		if (6440<=sct && sct<7399)  {
			aniJs2(); 
			jquery2.css({position:'fixed',top:38}); 
			jquery2.fadeIn();
			$('#jquery2 .text_box').stop().animate({right:'50%'},300);
			$('#header_box p:eq(4) a').css({color:'#4e9ea9'});
			}
			else if (sct>7399) {
				$('#jquery2 .img_box .page1').stop().animate({left:'-60%',opacity:0.9},200, function(){
				$('#jquery2 .img_box .page2').stop().animate({right:'-60%',opacity:0.9},200, function(){
					$('#jquery2 .img_box .page3').stop().animate({top:'-40%',opacity:0.9},200, function(){
						$('#jquery2 .img_box .page4').stop().animate({bottom:'-50%',opacity:0.9},200);
						});
					});
				});	
				jquery2.fadeOut();	
				$('#jquery2 .text_box').stop().animate({right:'0%'},300);
			}
			else if (sct<6444) {
				jquery2.css({position:'absolute',top:'6400px'});
				$('#jquery2 .img_box .page1').stop().animate({left:'-60%',opacity:0.9},200, function(){
					$('#jquery2 .img_box .page2').stop().animate({right:'-60%',opacity:0.9},200, function(){
						$('#jquery2 .img_box .page3').stop().animate({top:'-40%',opacity:0.9},200, function(){
							$('#jquery2 .img_box .page4').stop().animate({bottom:'-50%',opacity:0.9},200);
						});
					});
				});	
				$('#jquery2 .text_box').stop().animate({right:'0%'},300);
				};
		
		
		
		var adaptive1=$('#adaptive1');	
		if (8037<=sct && sct<8900)  {
			adaptive1.css({position:'fixed',top:38}); 
			adaptive1.fadeIn();

			$('#header_box p:eq(5) a').css({color:'#4e9ea9'});
			$('#adaptive1 .bg_black,#adaptive1 .lap').fadeIn(300,function(){
				$('#adaptive1 .pad2').fadeIn(300,function(){
					$('#adaptive1 .phone2').fadeIn(300);
				});
			});
			}
			else if (sct>8899) {
	
				adaptive1.fadeOut();	
				$('#adaptive1 .bg_black,#adaptive1 .lap,#adaptive1 .pad2,#adaptive1 .phone2').fadeOut();
			}
			else if (sct<8037) {
				adaptive1.css({position:'absolute',top:'8000px'});						
				$('#adaptive1 .bg_black,#adaptive1 .lap,#adaptive1 .pad2,#adaptive1 .phone2').fadeOut();			
				};
		
		

		var adaptive2=$('#adaptive2');	
		
		if (9640<=sct && sct<10500)  {
			adaptive2.css({position:'fixed',top:38}); 
			adaptive2.fadeIn();
			$('#adaptive2 .text_box').stop().animate({right:'50%'},300);
			$('#adaptive2 .img_box .com img').fadeIn(500,function(){
				$('#adaptive2 .img_box .lap img').fadeIn(500,function(){
					$('#adaptive2 .img_box .pad img').fadeIn(500,function(){
						$('#adaptive2 .img_box .phone img').fadeIn(500)
					});
				});
			});
			$('#header_box p:eq(6) a').css({color:'#4e9ea9'});
			}
			else if (sct>10499) {
	
				adaptive2.fadeOut();	
				$('#adaptive2 .text_box').stop().animate({right:'0%'},300);

			}
			else if (sct<9644) {
				adaptive2.css({position:'absolute',top:'9600px'});

				$('#adaptive2 .text_box').stop().animate({right:'0%'},300);

				};
				

				
		var video=$('#video');	
		if (11240<=sct && sct<12100)  {
			
			
			video.css({position:'fixed',top:38}); 
			video.fadeIn();
			$('#header_box p:eq(7) a').css({color:'#4e9ea9'});
			

			}
			else if (sct>12099) {
	
				video.fadeOut(200);	

				
				
				
			}
			else if (sct<11244) {
				video.css({position:'absolute',top:'11200px'});


				};
				
		var epilogue=$('#epilogue');	
		if (12840<=sct && sct<13700)  {
			
			
			epilogue.css({position:'fixed',top:38}); 
			epilogue.fadeIn();
			$('#epilogue .text_box').stop().animate({right:'50%'},300);
			$('#header_box p:eq(8) a').css({color:'#4e9ea9'});
			
			$('.season .spring').fadeIn(150,function(){
				$('.season .summer').fadeIn(150,function(){
					$('.season .fall').fadeIn(150,function(){
						$('.season .winter').fadeIn(150)
					});
				})
			});
			
			}
			else if (sct>13699) {
	
				epilogue.fadeOut();	
				$('#epilogue .text_box').stop().animate({right:'0%'},300);

			}
			else if (sct<12844) {
				epilogue.css({position:'absolute',top:'12800px'});

				$('#epilogue .text_box').stop().animate({right:'0%'},300);
		
				};	

		if (sct>=13700) {

			$('.ending_credit').fadeIn(500,function(){
				$('.ending_credit').addClass('on');
			});	

		} else {
		
			$('.ending_credit').fadeOut(300,function(){
				$(this).css({transform:'rotateY(0deg)'})
			});		
		}
	});


	
});