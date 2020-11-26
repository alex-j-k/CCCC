// const endpoint = 'https://github.com/alex-j-k/cc/blob/main/character.json';
// const endpoint = 'https://github.com/alex-j-k/cc/blob/main/character.jscrc';

// const bodyParser = require("body-parser");



// const endpoint = 'http://alex-j-k.github.io/CC/character.json';
// const endpoint = 'http://alex-j-k.github.io/CC/character.jscrc';


// const endpoint = 'https://raw.githubusercontent.com/alex-j-k/cc/main/character.json';

// const characters = [];

// fetch(endpoint)
//     .then(response => response.json())
//     .then(data => characters.push(...data))
//     .catch(error => console.error(error));

//     console.log(characters);
//     console.log(typeof(characters));





















//RADICAL CONSTANTS

const 冂 =  [['冂'], ['jiong1'], ['Box']];
const 人 =  [['人'], ['ren2'], ['Man']];
const 儿 =  [['儿'], ['er2'], ['Son']];
const 口 =  [['口'], ['kou3'], ['Mouth']];
const 勹 =  [['勹'], ['bao1'], ['Wrap']];
const 日 =  [['日'], ['ri4'], ['Sun']];
const 扌 =  [['扌'], ['shou3'], ['Hand']];
const 欠 =  [['欠'], ['qian4'], ['Lack/Owe']];
const 氵 =  [['氵'], ['shui3'], ['Water']];
const 艹 =  [['艹'], ['cao3'], ['Grass']];
const 讠 =  [['讠'], ['yan2'], ['Word']];

const 一 =  [['一'], ['yi1'], ['One']];
const 丨 =  [['丨'], ['gun3'], ['Line']];
const 衣 =  [['衣'], ['yi1'], ['Clothes']];

const 巳 =  [['巳'], ['si4'], ['Self']];

const 戈 =  [['戈'], ['ge1'], ['Spear']];
const 土 =  [['土'], ['tu3'], ['Soil']];

const 忄 =  [['忄'], ['xin1'], ['heart']];
const 车 =  [['车'], ['che1'], ['Car']];
const 斤 =  [['斤'], ['jin1'], ['Axe']];

const 彳 =  [['彳'], ['chi4'], ['Left Step']];
const 七 =  [['七'], ['qi1'], ['Seven']];
const 刀 =  [['刀'], ['dao1'], ['Knife']];

const 山 =  [['山'], ['shan3'], ['Mountain']];

const 攵 =  [['攵'], ['pu1'], ['Tap']];

const 礻 =  [['礻'], ['shi4'], ['Spirit']];

const 巾 =  [['巾'], ['jin1'], ['Towel']];
const 刂 =  [['刀'], ['dao1'], ['Knife']];
const 田 =  [['田'], ['tian2'], ['Field']];
const 宀 =  [['宀'], ['mian2'], ['Roof']];
const 子 =  [['子'], ['zi3'], ['Child']];

const 又 =  [['又'], ['you4'], ['Again']];
const 开 =  [['开'], ['kai1'], ['Open']];

const 丶 =  [['丶'], ['zhu3'], ['Dot']];
const 皿 =  [['皿'], ['min3'], ['Dish']];
const 亻 =  [['亻'], ['ren2'], ['Man']];

const 监rad = [['监'], ['jian1'], ['Supervise']];
const 见rad = [['见'], ['jian4'], ['To See']];
const 八rad = [['八'], ['ba1'], ['Eight']];
const 木rad = [['木'], ['mu4'], ['Tree']];
const 未rad = [['未'], ['wei4'], ['Not Yet']];
const 禾rad = [['禾'], ['he2'], ['Grain']];

const 兀 = [['兀'], ['wu4'], ['Cut Off Feet']];
const 饣 = [['饣'], ['shi2'], ['Food']];
const 纟 = [['纟'], ['si1'], ['Silk']];

const 灬 = [['灬'], ['huo3'], ['Fire']];




const 十rad = [['十'], ['shi2'], ['Ten']];

const 牛rad = [['牛'], ['niu2'], ['Cow']];


const 列rad = [['列'], ['lie4'], ['List']];

const 夕rad = [['夕'], ['xi1'], ['Dusk']];
const 歹rad = [['歹'], ['dai3'], ['Evil']];

const 晋rad = [['晋'], ['jin4'], ['Advance']];
const 普rad = [['普'], ['pu3'], ['Universal']];

const 业rad = [['业'], ['ye4'], ['Asia']];
const 亚rad = [['亚'], ['ya4'], ['Profession']];

const 育rad = [['育'], ['yu4'], ['Educate']];
const 畐rad = [['畐'], ['fu2'], ['Fill']];
const 富rad = [['富'], ['fu4'], ['Wealthy']];
const 斩rad = [['穴'], ['zhan3'], ['Chop']];
const 穴rad = [['穴'], ['xue2'], ['Cave']];
const 曷rad = [['曷'], ['he2'], ['Why?']];


const N = ['', '', ''];



// CHARACTER CLASS CONSTRUCTOR

class Character {
    constructor(main, pinyin, def, list, rad1, rad2, rad3, rad4, rad5){
        this.main = main;
        this.pinyin = pinyin;
        this.def = def;
        this.list = list.sort(function(a, b){return a.localeCompare(b, [ "zh-CN-u-co-pinyin" ]);  });
        this.rad1 = rad1;
        this.rad2 = rad2;
        this.rad3 = rad3;
        this.rad4 = rad4;
        this.rad5 = rad5;

    }
};



//CHARACTER CONSTANTS
const 蔼 = new Character('蔼', 'ai3','Friendly', ['蔼','喝','曷','揭', '渴', '歇'], [...讠],[...艹],[...曷rad],[...N],[...N]); 
const 喝 = new Character('喝', 'he1','To Drink', ['蔼','喝','曷','揭', '渴', '歇'], [...口],[...日],[...勹],[...人],[...N]); 
const 曷 = new Character('曷', 'he2','Why?',['蔼','喝','曷','揭', '渴', '歇'],[...日], [...勹],[...人],[...N],[...N]);
const 渴 = new Character('渴', 'ke3','Thirsty',['蔼','喝','曷','揭', '渴', '歇'], [...氵],[...日],[...勹],[...人],[...N]);
const 揭 = new Character('揭', 'jie1','To Lift',['蔼','喝','曷','揭', '渴', '歇'],[...扌],[...日],[...勹],[...人],[...N]);
const 歇 = new Character('歇', 'xie1','To Rest',['蔼','喝','曷','揭', '渴', '歇'], [...日],[...勹],[...人],[...欠],[...N]);

const 贝 = new Character('贝', 'bei4','Shell',['见', '贝'], [...冂],[...人],[...N],[...N],[...N]);
const 见 = new Character('见', 'jian4','To See',['见', '贝'], [...冂],[...儿],[...N],[...N],[...N]);

const 哀 = new Character('哀', 'ai1','Sorrow',['哀', '衰', '衷'], [...衣],[...口],[...N],[...N],[...N]);
const 衰 = new Character('衰', 'shuai1','Decrease',['哀', '衰', '衷'], [...衣],[...口],[...一],[...N],[...N]);
const 衷 = new Character('衷', 'zhong1','Inner Feelings',['哀', '衰', '衷'], [...衣],[...口],[...丨],[...N],[...N]);

const 包 = new Character('包', 'bao1','Wrap',['包', '抱', '拘', '句'], [...勹],[...巳],[...N],[...N],[...N]);
const 抱 = new Character('抱', 'bao4','Embrace',['包', '抱', '拘', '句'], [...扌],[...巳],[...勹],[...N],[...N]);
const 拘 = new Character('拘', 'ju1','Detain',['包', '抱', '拘', '句'], [...扌],[...口],[...勹],[...N],[...N]);
const 句 = new Character('句', 'ju4','Sentence',['包', '抱', '拘', '句'], [...口],[...勹],[...N],[...N],[...N]);

const 裁 = new Character('裁', 'cai2','To cut',['裁', '栽', '载'], [...土],[...衣],[...戈],[...N],[...N]);
const 栽 = new Character('栽', 'zai1','To Grow',['裁', '栽', '载'], [...土],[...木rad],[...戈],[...N],[...N]);
const 载 = new Character('载', 'zai4','To Load',['裁', '栽', '载'], [...土],[...车],[...戈],[...N],[...N]);

const 彻 = new Character('彻', 'che4','Thorough',['彻','切', '窃'], [...彳],[...七],[...刀],[...N],[...N]);
const 切 = new Character('切', 'qie1 (qie4)','Cut (Eager)',['彻','切', '窃'], [...七],[...刀],[...N],[...N],[...N]);
const 窃 = new Character('窃', 'qie4','Steal',['彻','切', '窃'], [...穴rad],[...七],[...刀],[...N],[...N]);

const 惭 = new Character('惭', 'can2','Ashamed', ['惭','渐','暂','崭', '斩'], [...忄],[...斩rad],[...N],[...N],[...N]); 
const 渐 = new Character('渐', 'jian4','Gradually',['惭','渐','暂','崭', '斩'],[...氵], [...斩rad],[...N],[...N],[...N]);
const 暂 = new Character('暂', 'zan4','Temporarily',['惭','渐','暂','崭', '斩'], [...斩rad],[...日],[...N],[...N],[...N]);
const 崭 = new Character('崭', 'zhan3','High',['惭','渐','暂','崭', '斩'],[...山],[...斩rad],[...N],[...N],[...N]);
const 斩 = new Character('斩', 'zhan3','Chop',['惭','渐','暂','崭', '斩'], [...车],[...斤],[...N],[...N],[...N]);

const 澈 = new Character('澈', 'che4','Clear',['澈', '撤'], [...氵],[...育rad],[...攵],[...N],[...N]);
const 撤 = new Character('撤', 'che4','Withdraw',['澈', '撤'], [...扌],[...育rad],[...攵],[...N],[...N]);

const 畐 = new Character('畐', 'fu2','Fill', ['畐','幅','辐','福', '富', '副'], [...一],[...口],[...田],[...N],[...N]);
const 幅 = new Character('幅', 'fu2','Width',['畐','幅','辐','福', '富', '副'],[...巾], [...畐rad],[...N],[...N],[...N]);
const 辐 = new Character('辐', 'fu2','Spokes',['畐','幅','辐','福', '富', '副'],[...车],[...畐rad],[...N],[...N],[...N]);
const 福 = new Character('辐', 'fu2','Blessing',['畐','幅','辐','福', '富', '副'],[...礻],[...畐rad],[...N],[...N],[...N]);   
const 富 = new Character('富', 'fu4','Wealthy', ['畐','幅','辐','福', '富', '副'], [...宀],[...畐rad],[...N],[...N],[...N]); 
const 副 = new Character('副', 'fu4','Secondary',['畐','幅','辐','福', '富', '副'], [...畐rad],[...刂],[...N],[...N],[...N]);

const 禾 = new Character('禾', 'he2','Grain', ['禾','来','米','末', '木', '未'], [...一],[...木rad],[...曷rad],[...N],[...N]); 
const 来 = new Character('来', 'lai2','Come', ['禾','来','米','末', '木', '未'], [...八rad],[...未rad],[...N],[...N],[...N]); 
const 米 = new Character('米', 'mi3','Rice',['禾','来','米','末', '木', '未'],[...八rad], [...木rad],[...N],[...N],[...N]);
const 末 = new Character('末', 'mo4','Tip',['禾','来','米','末', '木', '未'],[...一],[...木rad],[...N],[...N],[...N]);
const 木 = new Character('木', 'mu4','Tree',['禾','来','米','末', '木', '未'],[...木rad],[...日],[...N],[...N],[...N]);
const 未 = new Character('未', 'wei4','Not yet',['禾','来','米','末', '木', '未'], [...一],[...木rad],[...N],[...N],[...N]);

const 季 = new Character('季', 'ji4','Season',['季', '李'], [...禾rad],[...子],[...N],[...N],[...N]);
const 李 = new Character('李', 'li3','Plum tree',['季', '李'], [...木rad],[...子],[...N],[...N],[...N]);


const 坚 = new Character('坚', 'jian1','Resolutely',['坚', '型'], [...丨],[...丨],[...又],[...土],[...N]);
const 型 = new Character('型', 'xing2','Model',['坚', '型'], [...开],[...刂],[...土],[...N],[...N]);


const 监 = new Character('监', 'jian1','Supervise',['监', '蓝', '览', '临'], [...丨],[...亻],[...丶],[...皿],[...N]);
const 蓝 = new Character('蓝', 'lan2','Blue',['监', '蓝', '览', '临'], [...艹],[...监rad],[...N],[...N],[...N]);
const 览 = new Character('览', 'lan3','To Look At',['监', '蓝', '览', '临'], [...丨],[...亻],[...丶],[...见rad],[...N]);
const 临 = new Character('临', 'lin2','Just Near',['监', '蓝', '览', '临'], [...丨],[...亻],[...丶],[...口],[...N]);

const 浇 = new Character('浇', 'jiao1','Pour',['浇', '侥', '挠', '饶', '绕'], [...氵],[...戈],[...兀],[...N],[...N]);
const 侥 = new Character('侥', 'jiao3','Lucky',['浇', '侥', '挠', '饶', '绕'], [...亻],[...戈],[...兀],[...N],[...N]);
const 挠 = new Character('挠', 'nao2','Hinder',['浇', '侥', '挠', '饶', '绕'], [...扌],[...戈],[...兀],[...N],[...N]);
const 饶 = new Character('饶', 'rao2','Plentiful',['浇', '侥', '挠', '饶', '绕'], [...饣],[...戈],[...兀],[...N],[...N]);
const 绕 = new Character('绕', 'rao4','To Wind',['浇', '侥', '挠', '饶', '绕'], [...纟],[...戈],[...兀],[...N],[...N]);

const 晋 = new Character('晋', 'jin4','Hinder',['晋', '普', '谱','亚', '业'], [...亚rad],[...日],[...N],[...N],[...N]);
const 普 = new Character('普', 'pu3','Universal',[ '晋', '普', '谱','亚', '业'], [...八rad],[...晋rad],[...N],[...N],[...N]);
const 谱 = new Character('谱', 'pu3','Chart',[ '晋', '普', '谱','亚', '业'], [...讠],[...普rad],[...N],[...N],[...N]);
const 亚 = new Character('亚', 'ya4','Asia',[ '晋', '普', '谱','亚', '业'], [...一],[...业rad],[...N],[...N],[...N]);
const 业 = new Character('业', 'ye4','Profession',[ '晋', '普', '谱','亚', '业'], [...八rad],[...丨],[...一],[...N],[...N]);

const 歹 = new Character('歹', 'dai3','Evil', ['歹','例','列','烈', '夕'], [...一],[...夕rad],[...N],[...N],[...N]); 
const 例 = new Character('例', 'li4','Example',['歹','例','列','烈', '夕'],[...亻],[...歹rad],[...刂],[...N],[...N]);
const 列 = new Character('列', 'lie4','List',['歹','例','列','烈', '夕'], [...歹rad],[...刂],[...N],[...N],[...N]);
const 烈 = new Character('烈', 'lie4','Intense',['歹','例','列','烈', '夕'], [...列rad],[...灬],[...N],[...N],[...N]);
const 夕 = new Character('夕', 'xi1','Dusk',['歹','例','列','烈', '夕'],[...夕rad], [...N],[...N],[...N],[...N]);

const 生 = new Character('生', 'sheng1','Life',['生','牛', '午'], [...牛rad],[...一],[...N],[...N],[...N]);
const 牛 = new Character('牛', 'niu2','Afternoon',['生','牛', '午'], [...亻],[...十rad],[...N],[...N],[...N]);
const 午 = new Character('午', 'wu3','Cow',['生','牛', '午'], [...亻],[...十rad],[...N],[...N],[...N]);


//ARRAY OF ALL CHARACTERS
 
const characters = [
    [蔼, 喝, 曷, 渴, 揭, 歇],
    [见, 贝],
    [哀, 衰, 衷],
    [包, 抱, 拘, 句],
    [裁, 栽, 载],
    [彻, 切, 窃 ],
    [惭, 渐, 暂, 崭, 斩],
    [澈, 撤],
    [畐, 幅, 辐, 福, 富, 副],
    [禾, 来, 米, 末, 木, 未],
    [季, 李],
    [坚, 型],
    [监, 蓝, 览, 临],
    [浇, 侥, 挠, 饶, 绕],
    [亚, 业, 晋, 普, 谱],
    [歹, 例, 列, 烈, 夕],
    [生, 牛, 午],
 ];





















//GENERIC FUNCTION TO CREATE NEW CHARCTER INFORMATION SLAB
function createSlab(ch){

    let newSlab = `<div class="characterslab" id="${ch.main}">
                <div class="maincharacter" id="${ch.main}">
                <h1 id="${ch.main}">${ch.main}</h1>
            </div>
            <div class="infoandlist" id="${ch.main}">
                <div class="info" id="${ch.main}">
                    <p class="pinyin" id="${ch.main}">${ch.pinyin}</p>
                    <p class="pmain" id="${ch.main}">${ch.def}</p>
                </div>
                <div class="list" id="${ch.main}">
                    <p class="pmain similarList" id="${ch.main}"> ${ch.list.join(' ')}</p>
                </div>
            </div>
    </div>
    <div class="confusingslabcontainer ${ch.main}" id="${ch.list}">
    </div>
    `;

    document.getElementById('wrapper').innerHTML += newSlab; 
};





//GENERIC FUNCTION TO CREATE NEW CONFUSING CHARCTER SLAB

function createConfusingSlab(ch){

    let newConfusingSlab = `
    
<div class="confusingslab">
    <div class="maincharacterB">
            <h1 class="h1b">${ch.main}</h1>
    </div>
    <div class="infoB">
            <p>${ch.pinyin}</p>
            <p >${ch.def}</p>
    </div>
    <div class="radicals">
                   <div class="rad1">
                        <p class="r">${ch.rad1[0]}</p><p class="p">${ch.rad1[1]}</p><p class="m">${ch.rad1[2]}</p>
                    </div>
                    <div class="rad1">
                        <p class="r">${ch.rad2[0]}</p><p class="p">${ch.rad2[1]}</p><p class="m">${ch.rad2[2]}</p>
                    </div>
                    <div class="rad1">
                        <p class="r">${ch.rad3[0]}</p><p class="p">${ch.rad3[1]}</p><p class="m">${ch.rad3[2]}</p>
                    </div>
                    <div class="rad1">
                        <p class="r">${ch.rad4[0]}</p><p class="p">${ch.rad4[1]}</p><p class="m">${ch.rad4[2]}</p>
                    </div>
                    <div class="rad1">
                        <p class="r">${ch.rad5[0]}</p><p class="p">${ch.rad5[1]}</p><p class="m">${ch.rad5[2]}</p>
                    </div>      
    </div>
</div> `;


//HIDE UNDEFINED RADICALS ON CHARACTER SLAB
const paragraph = document.querySelectorAll('p');
paragraph.forEach(para =>{if (typeof para == ''){para.style.display = 'none'}   } );



// //PUT CONF SLABS IN CONTAINERS

const confcontainer = document.querySelectorAll('.confusingslabcontainer');
confcontainer.forEach(container =>{ if (container.id.includes(ch.main) && container.childElementCount < (container.id.length / 2))
    {container.innerHTML += newConfusingSlab }  } );


};




















//SPECIFIC FUNCTION TO CREATE NEW CHARCTER INFORMATION SLAB FOR ALL CHARACTERS
// const makeCharacterSlabs =  characters.forEach(array => {array.forEach(char =>createSlab(char) ) });

setTimeout(() => characters.forEach(array => {array.forEach(char =>createSlab(char))}), 000);




//SPECIFIC FUNCTION TO LOOP SIMILAR CONFUSING CHARACTERSLAB 
let arrayToLoop = [];


const makeConfArray = function() {
const simCharacterlists = Array.from(document.querySelectorAll('.similarList'));
console.log(simCharacterlists);


 for (i = 0; i < simCharacterlists.length; i++) {
  arrayToLoop.push(Array.from(simCharacterlists[i].textContent));
  console.log(arrayToLoop.join(','))
  };
};



setTimeout((makeConfArray), 000);




//SPECIFIC FUNCTION TO MAKE CONFUSING CHARACTERSLAB 


const makeConfSlabs = () => {  

console.log(arrayToLoop);

arrayToLoop.forEach(singlearray => {

    singlearray.forEach(character=> { 
        if (character === ' ') {console.log('nun der')} else
        {createConfusingSlab(eval(character))}
    } 
 )

}) 
}


setTimeout((makeConfSlabs), 000);















// //FUNCTION SHOW HIDDEN SLABS


const unhide = function(characterToMatch){
    const hiddenslab = document.querySelectorAll('.confusingslabcontainer');

console.log(characterToMatch);
console.log(hiddenslab);
hiddenslab.forEach(slab=> {if (slab.id.includes(characterToMatch) && slab.classList.contains(characterToMatch) && slab.style.display == 'none'){slab.style.display = 'inline-block'}

else {slab.style.display = 'none'}
})
};


//ADD EVENT LISTENERS TO ALL SLABS
document.addEventListener('click',(e)=> {  
const characterSlabs = document.getElementsByClassName('characterslab');

for (var i = 0; i < 1; ++i) {
    characterSlabs[i].addEventListener('click', unhide(e.target.id));
}
console.log(e.target.id);

}
);



//SORT LISTS DISPLAYED ON CHARACTER SLABS ALPHABETICALLY PLACE MAIN CHARACTER FIRST


// const alphaSort = function(){
//     const lists = document.querySelectorAll('.similarList');
//         console.log(lists);
//         lists.forEach(list =>  console.log(list)
        
//         ) 

        
// };


// setTimeout(() => alphaSort(), 3000);

// setTimeout(() => characters.forEach(array => {array.forEach(char =>createSlab(char))}), 000);





//searchPage FUNCTION

function searchPage() { 
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase(); 
    let x = document.querySelectorAll('.pinyin'); 
    let y = document.getElementsByClassName('characterslab'); 
    x.forEach(thing => {if (thing.textContent.includes(input)){thing.parentElement.parentElement.parentElement.style.display = '' } else 
    {thing.parentElement.parentElement.parentElement.style.display = 'none'}
} )};



//PAINT MAIN CHARACTER BY PINYIN COLOUR        STILLLLLL TOODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO



const colour = function(){
    const allslab = document.querySelectorAll('.characterslab');
    console.log(allslab);
   allslab.forEach(slab =>{ if (slab.textContent.includes('1'))
    {slab.firstElementChild.firstElementChild.classList.add('red')}

else if 

(slab.textContent.includes('2'))
    {slab.firstElementChild.firstElementChild.classList.add('green')}

else if

(slab.textContent.includes('3'))
    {slab.firstElementChild.firstElementChild.classList.add('purple')}

else if 

(slab.textContent.includes('4'))
    {slab.firstElementChild.firstElementChild.classList.add('blue')}

})
};
setTimeout(() => colour(), 000);



const confcolour = function(){
    const allslab = document.querySelectorAll('.confusingslab');
    console.log(allslab);
   allslab.forEach(slab =>{ if (slab.children[01].children[0].textContent.includes('1'))
    {slab.firstElementChild.firstElementChild.classList.add('red')}

else if 

(slab.children[01].children[0].textContent.includes('2'))
    {slab.firstElementChild.firstElementChild.classList.add('green')}

else if

(slab.children[01].children[0].textContent.includes('3'))
    {slab.firstElementChild.firstElementChild.classList.add('purple')}

else if 

(slab.children[01].children[0].textContent.includes('4'))
    {slab.firstElementChild.firstElementChild.classList.add('blue')}

})
};
setTimeout(() => confcolour(), 8000);






//SORT CHARACTERS BY PINYIN
const testArray = ['歇', '曷', '喝', '渴', '揭'];






console.dir(testArray.sort(function(a, b){
    return a.localeCompare(b, [ "zh-CN-u-co-pinyin" ]); 
}));
console.log(testArray);









//DICTIONARY API

// const endpointsss = 'http://ccdb.hemiola.com/characters/mandarin/definition/radicals/peng';

// const charactersss = [];

// fetch(endpointsss)
//     .then(response => response.json())
//     .then(data => charactersss.push(...data))
//     .catch(error => console.error(error));

//     console.log(charactersss);
//     console.log(typeof(charactersss));















// const unhide = function(){
//     const hiddenslabs = document.getElementsByClassName('confusingslabcontainer');
//     for(let i = 0; i < hiddenslabs.length; ++i )
//     {if (hiddenslabs[i].style.display === "inline-block") {hiddenslabs[i].style.display = "none"}  
//     else {
//         hiddenslabs[i].style.display = "inline-block";
// }} console.log(hiddenslabs)
// };




