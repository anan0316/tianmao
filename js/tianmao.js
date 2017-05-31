/*
* @Author: Administrator
* @Date:   2017-05-08 13:44:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-31 12:36:36
*/

'use strict';

$(function(){


    let colors=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#FF0036'];
    let cebianlan=$('.cebianlan')[0];
    cebianlan.style.transform='translate(0,0)';

    let nav=document.querySelector('nav');
    let xuanxiang=$('.xuanxiang')[0];
    let xxdaohang=$('.xxdaohang')[0];
    let dhLi=$('li',xxdaohang);
    let n=0,flag=true;
    let backTop=$('.backTop')[0];
    let backTopLi=$('li',backTop);
	let floor=document.querySelectorAll('.floor');
	let floorArr=[];
	floor.forEach(function(value,index){
		floorArr.push(value.offsetTop);
	});
    for(let i=0;i<dhLi.length;i++){
        dhLi[i].onclick=function(){
            flag=false;
            dhLi[n].style.background='#626262';
            this.style.background=colors[i];
            animate(document.body,{scrollTop:floorArr[i]},function(){
                flag=true;
            });
            n=i;
        }
    }
    for(let i=0;i<dhLi.length;i++){
            dhLi[i].onmouseenter=function(){
                this.style.background=colors[i];
            }
            dhLi[i].onmouseleave=function(){
            if(dhLi[i].className!='hot'){
                this.style.background='#626262';
            }
        }
        
    }
    
	// 屏幕的高度
	let tops=innerHeight;
	window.onscroll=function(){
        if(!flag){
            return ;
        }
		// 获取滚动条滚动位置
		let scrollTops=document.body.scrollTop;
		for(let i=0;i<floorArr.length;i++){
			if(scrollTops+tops>floorArr[i]+200){
				let imgs=floor[i].getElementsByTagName('img');
				for(let i=0;i<imgs.length;i++){
					imgs[i].src=imgs[i].title;
				}
			}
		}
        for(let i=0;i<floorArr.length;i++){
            if(scrollTops+tops>floorArr[i]+200){
                dhLi[n].classList.remove('hot');
                dhLi[i].classList.add('hot');
                dhLi[n].style.background='#626262';
                dhLi[i].style.background=colors[i];
                n=i;
            }
        }
        
        if(scrollTops>=500){
            nav.style.transform=`translateY(100px)`;
            xuanxiang.style.transform='translate(0,-80%)';
        }else{
            nav.style.transform=`translateY(0)`;
            xuanxiang.style.transform='translate(-100px,30%)';
        }

        if(scrollTops>=165){
            backTopLi[2].style.opacity='1';
        }else{
            backTopLi[2].style.opacity='0';
        }
	}


	// banner轮播
	let banner=$('.banner')[0];
	let bannerPic=$('.bannerPic')[0];
	let lis=$('li',bannerPic);
	let imgs=[];
	let bannerDian=$('.bannerDian')[0];
	let llis=$('li',bannerDian);
	let current=0,next=0;
	// 初始化，默认第一张图显示，将其余所有的图片都隐藏
	for(let i=0;i<lis.length;i++){
		let img=$('img',lis[i])[0];
		imgs.push(img);
        img.style.opacity='0';
        llis[i].classList.remove('hot');
	}
    llis[current].classList.add('hot');
    imgs[current].style.opacity='1';
    banner.classList.add('yi');
    let t=setInterval(opa,3000);
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        t=setInterval(opa,3000);
    }
    for(let i=0;i<llis.length;i++){
        llis[i].onmouseenter=function(){
            for(let j=0;j<imgs.length;j++){
                imgs[j].style.opacity='0';
                llis[j].classList.remove('hot');
            }
            switch (i){
                case 0:
                    banner.style.background='#0A44FF';
                    break;
                case 1:
                    banner.style.background='#E8E8E8';
                    break;
                case 2:
                    banner.style.background='#67A623';
                    break;
                case 3:
                    banner.style.background='#E8E8E8';
                    break;
                case 4:
                    banner.style.background='#FFEBEB';
                    break;
                case 5:
                    banner.style.background='#FC95C3';
                    break;
                default:
                    break;
            }
            llis[i].classList.add('hot');
            imgs[i].style.opacity='1';
            current=next=i;
        }
    }
	function opa(){
		next++;
		if(next>=imgs.length){
			next=0;
		}
		// 动画
		for(let i=0;i<imgs.length;i++){
            imgs[i].style.opacity='0';
            llis[i].classList.remove('hot');
		}
		switch (next){
			case 0:
                banner.style.background='#0A44FF';
				break;
            case 1:
                banner.style.background='#E8E8E8';
                break;
            case 2:
                banner.style.background='#67A623';
                break;
            case 3:
                banner.style.background='#E8E8E8';
                break;
            case 4:
                banner.style.background='#FFEBEB';
                break;
            case 5:
                banner.style.background='#FC95C3';
                break;
			default:
				break;
		}
        llis[next].classList.add('hot');
        imgs[next].style.opacity='1';
		current=next;
	}

    let pinzhong=$('.pinzhong')[0];
    let pls=$('li',pinzhong);
    hoverEvent(pls,'a1');
    function hoverEvent(obj,str){
        for(let i=0;i<obj.length;i++){
            obj[i].onmouseenter=function(){
                obj[i].classList.add(str);
            }
            obj[i].onmouseleave=function(){
                obj[i].classList.remove(str);
            }
        }
    }


    /*let bigbox=$('.bigbox')[0];
    let bigLi=$('li',bigbox);
    let panel=[];
    for(let i=0;i<bigLi.length;i++){
        panel.push($('.tanchu',bigLi[i])[0]);
    }
    for(let i=0;i<bigLi.length;i++){
        bigLi[i].onmouseenter=function(){
            panel[i].style.display='block';
        }
        bigLi[i].onmouseleave=function(){
            panel[i].style.display='none';
        }
    }*/


    let text=$('.kuhu');
    for(let i=0;i<text.length;i++){
        let lis1=$('li',text[i]);
        textLunbo(text[i],lis1);
    }

    function textLunbo(obj,lis){
    let speed=parseInt(getComputedStyle(lis[0],null).height);
        let ts=setInterval(textMove, 3000);
        function textMove(){
            // 获取当前UL的top
            let h=parseInt(getComputedStyle(obj,null).top)-speed;
            obj.style.transition='all 0.5s ease';
            if(h<=-85){
                obj.style.transition='none';
                h=0;
            }
            // 设置当前UL位置
            obj.style.top=h+'px';
        }
    }

    let left=$('.left');
    for(let i=0;i<left.length;i++){
        left[i].onmouseenter=function(){
            let a=$('a',this);
            for(let j=0;j<a.length;j++){
                a[j].style.color=colors[i];
            }
            
        }
        left[i].onmouseleave=function(){
            let a=$('a',this);
            for(let j=0;j<a.length;j++){
                a[j].style.color='#000000';
            }
            
        }
    }

});


