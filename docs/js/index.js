var content = document.getElementById("answer-content");

// 设置答题框的高度
var getViewPortSize = function() {
    var w = window;
    if (w.innerWidth != null) return { x: w.innerWidth, y: w.innerHeight };
    var d = w.document;
    // 表明是标准模式
    if (document.compatMode == "CSS1Compat") {
        return {
            x: d.documentElement.clientWidth,
            y: d.documentElement.clientHeight
        }
    }
    // 怪异模式
    return { x: d.body.clientWidth, y: d.body.clientHeight }
}

this.clientHeight = getViewPortSize().y;
this.clientWidth = getViewPortSize().x;

// content.style.height = this.clientHeight - this.clientWidth / 2 + 'px'

var addClass = function(element, className) {
    var classNames = element.className.split(/\s+/);
    if (classNames.indexOf(className) == -1) {
        classNames.push(className);
    }
    element.className = classNames.join(' ')
}

// 打字效果
var arr = [
    { type: 'text', text: 'W-L-J，又名万万ya，是个十足的美女吧，嗯？' },
    { type: 'wait', time: 900 },
    { type: 'delete', num: 4 },
    { type: 'text', text: '，嗯!' },
    { type: 'br' },
    { type: 'text', text: '她温柔美丽，善良大方' },
    { type: 'text', text: '，国色天香，沉鱼落雁，如花似玉，闭月羞花，贤良淑德，花容月貌，秋水伊人，一笑倾城，冰清玉洁，娇俏佳人，朱颜玉润，玉骨冰肌，窈窕淑女，美若天仙，一顾倾城，倾国倾城，温婉娴淑，千娇百媚，仪态万千，花容月貌，明目皓齿，清艳脱俗，香肌玉肤，仪态万端，婉风流转，美撼凡尘，聘婷秀雅，娥娜翩跹，俏丽多姿，顾盼流转，举步轻摇，艳冠群芳，才智国人，出水芙蓉，阿娇金屋，闭月羞花，逞娇呈美，春暖花香，春色满园……', time: 50 },
    { type: 'br' },
    { type: 'text', text: '给你们看张我们的照片吧~' },
    { type: 'wait', time: 900 },
    { type: 'img', src: 'img/love.jpg', id: "cat", style: "width: 50%;display: block;margin-left: auto;margin-right: auto;margin-top: 20px;margin-bottom: 20px;" },
    { type: 'wait', time: 900 },
    // { type: 'delete', num: 1, time: 1000 },
    { type: 'text', text: '她是不是美美哒~' },
    { type: 'br' },
    { type: 'wait', time: 900 },
    { type: 'text', text: '不要生气啦~ /抱抱' },
]

var autoType = new AutoType(content, arr);
autoType.once("end", function() {
    addClass(content, 'end')
})
