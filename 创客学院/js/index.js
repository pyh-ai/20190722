window.onload = function () {
        var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                setWrapperSize: true,
                preventInteractionOnTransition : true,
                //设置固定宽度，隐藏时初始化swiper
                width: 800,
                //设置宽度为全屏  
                width: window.innerWidth,
                //设置断点宽度
                breakpoints: {
                    1024: {
                        width: 500,
                    },
                    768: {
                        width: undefined, //取消width，恢复自适应
                    },
                    //窗口缩放时设置width
                    on: {
                        resize: function () {
                            this.params.width = window.innerWidth;
                            this.update();
                        },
                    },

                }
            })

            var btn1 = document.querySelector(".click");
            var btn2 = document.getElementsByClassName('click')[1];
            var btn3 = document.getElementsByClassName('click')[2];
            var tuijian = document.querySelector(".content-tuijian")
            var jinghua = document.querySelector(".content-jinghua")
            var wait = document.querySelector(".content-wait")
            btn1.addEventListener('click', function () {
                tuijian.setAttribute('style', 'display:block');
                jinghua.setAttribute('style', 'display:none');
                wait.setAttribute('style', 'display:none');

            }) 
            btn2.addEventListener('click', function () {
                jinghua.setAttribute('style', 'display:block');
                tuijian.setAttribute('style', 'display:none');
                wait.setAttribute('style', 'display:none');

            }) 
            btn3.addEventListener('click', function () {
                wait.setAttribute('style', 'display:block');
                jinghua.setAttribute('style', 'display:none');
                tuijian.setAttribute('style', 'display:none');

            })



        }