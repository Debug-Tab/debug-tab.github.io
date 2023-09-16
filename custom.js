var binft = function (r) {
    var isTransparent = true;
    function getRandomColor() {
        if(isTransparent){
            isTransparent = false;
            //此处修改字体颜色,最后的 0 和 1 不要改
            return "rgba(255,255,255,0)"
        }else{
            isTransparent = true;
            return "rgba(255,255,255,1)"
        }
    }  
    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var oneword = document.createElement("span");
            oneword.textContent = "|"; // _此处是末尾字符,如果想用光标样式可以改为"|"
            oneword.style.color = getRandomColor();
            n.appendChild(oneword);
        }
        return n
    }
    function i() {
        var t = wordList[c.skillI];
        c.step ? c.step-- : (c.step = refreshDelayTime, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = showTotalWordDelayTime) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = Math.floor(Math.random() * wordList.length), c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(maxLength, maxLength + c.prefixP) : Math.min(maxLength, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    //此处改成你自己的诗词
    wordList = [ 
			"钱那么靠谱的东西都有假，何况人说的话呢。",
			"人们相互蔑视，又相互奉承，人们各自希望自己高于别人，又各自匍匐在别人面前。",
			"当一束光照进了黑暗里，那这束光就有罪。",
			"丑小鸭能变成白天鹅,不是因为她有多努力,而是他爸妈本来就是白天鹅。",
			"撒谎是人之本性，在多数时间里我们甚至都不能对自己诚实。",
            "中国人骂人有个规矩，以妈妈为中心，以亲戚为半径，画圆开草。",
			"愚昧成为主流，清醒就是犯罪",
			"你所谓的迷茫，不过是清醒地看着自己沉沦。",
			"冤枉你的人比谁都知道你冤枉。",
			"你是在拜佛，还是在拜自己的欲望？",
			"平行的两只眼睛，却不平等看人；长在左右两只耳朵，却总听一面之词；只有一张嘴，却总能说出两面话。",
			"我见过的人越多，我就越喜欢狗。",
			"当你到达一定高度的时候，全世界都对你彬彬有礼。",
			"人们把少年的勇气当做叛逆，把成年人的懦弱当做顾全大局。",
			"比世人的目光还要可怕的，实际上是你自己那颗在意世人目光的心。",
			"人们一边劝绝望的人活下去，一边让充满希望的人慢慢失望",
			"那些听不见音乐的人，都以为那些跳舞的人疯了。",
			"奇怪的动物被保护，奇怪的人却被排挤。",
			"大家都愿意盲从，好像世界上最安全的事就是让自己消失在多数之中。",
			"我瞧不上的人和事太多了，虽然我自己也狗屁不是，但这两者并不冲突。",
			"很多东西如果不是怕别人捡去，我们一定会扔掉。",
			"很多人恨特权，因为特权没有在自己手中。",
			"他们举起了键盘，以为自己是至高无上的神；他们张开了嘴，以为自己站在道德的至高点。",
			"“枪响了。” “你看到是谁开的枪吗?” “我看不清，他站在道德制高点上，他在阳光下。”",
			"“怎样算欺凌？” “十人欺负一人算欺凌。一百个人欺负一人也是。” “那么一万个人呢？” “是正义啊！”",
			"你凭什么以为你十年寒窗，抵得过我三代从商。",
			"打断你的腿，再给你一副拐杖，然后告诉你，没有我，你连路都走不了，所以你要懂得感恩。",
			"我年轻时以为金钱至上，而今年事已迈，发现果真如此。",
			"人类之所以进步，主要原因是下一代不听上一代的话。",
			"我承认我个子矮，但你如果以此来嘲笑我，我会砍掉你的脑袋，来缩短我们的差距。",
			"不要因为睡懒觉而感到自责，因为你起来也创造不了什么价值。能从浪费时间中获得乐趣，就不是浪费时间。",
			"人哪有好的？只是坏的程度不一样而已。",
			"世界上最无耻、最阴险、最歹毒的赞美，就是用穷人的艰辛和苦难，当作励志故事来愚弄底层人",
			"格局要打开，能怪别人的事情，尽量不要怪自己。拒绝精神内耗，有事直接发疯。",
			"如果你讨厌的人骂你，那你一定是做对了什么。",
			"社会资源永远是有限的，好东西要靠抢。只有弱者才会坐等分配。",
			"情商一定是让别人和自己都舒服。如果让别人舒服自己却很痛苦，那不叫情商，叫智障。",
			"你的好对别人来说就像一颗糖，吃了就没了；你的坏对别人来说就像一个疤痕，留下就永久在，这就是人性。",
			"妈的，这些混蛋教授，不但不知道自己泄气，还整天考，不是你考，就是我考，考他娘的什么东西。",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
			"",
        ].map(function (r) {
    return r + ""
    }),
    showTotalWordDelayTime = 2,
    refreshDelayTime = 1,
    maxLength = 1,
    d = 75,
    c = {
        text: "",
        prefixP: -maxLength,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: showTotalWordDelayTime,
        step: refreshDelayTime
    };
    i()
};
binft(document.getElementById('binft'));