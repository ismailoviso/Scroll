// class Player{
//     constructor(options){
//         this.name = options.name;
//         this.surname = options.surname;
//         this.year = options.year;
//     }
//     say(){
//         console.log(`Your name is ${this.name}. You are ${this.year}`);
//     }
// }
// class Hunter extends Player{
//     constructor(options){
//         super(options);//при расширении класса нужно обязательно писать super чтобы можно было добавлять новые свойства
//         this.hp = options.hp;
//         this.mp = options.mp;
        
//     }
//     say(){
//         super.say()//вызов функции родителя
//         console.log('slkdjdjlsadgjalksdjgkl sadgklj sadjlkg askdgjaskdlg sdkg');
//     }
//     static hello (){ //можно вызвать только используя сам шаблон
//         console.log('static function');
//     }
// }
// let player2 = new Hunter({
//     name: 'hunter',
//     surname: 'qwerty hunter',
//     year: 1999,
//     hp: 1000,
//     mp: 250
// })

// let player1 = new Player({
//     name: 'vova',
//     surname: 'qwerty',
//     year: 1999
// })

// Hunter.hello()
class Div{
    constructor({width, height, background, color, text, font}){//деструктуризация
        this.width = width;
        this.height = height;
        this.background = background;
        this.color = color;
        this.text = text;
        this.font = font;
        this.create();
    }
    create(){
        let a = document.createElement('div');
        a.style = `
            width: ${this.width}px;
            height: ${this.height}px;
            background: ${this.background};
            color: ${this.color};
            font-size: ${this.font}px;
            display: grid;
            place-items: center;
            margin: 0 auto;
            text-align: center;
        `;
        a.innerHTML = this.text;
        let body = document.querySelector('body');
        body.append(a);
    }
}
let div1 = new Div({
    width: 1000,
    height: 200,
    background: 'crimson',
    color: '#fff',
    text: 'nagibator is amongus brazzers production',
    font: 30
})
let div2 = new Div({
    width: 500,
    height: 100,
    background: 'yellow',
    color: '#000',
    text: 'nagibator is amongus brazzers production',
    font: 30
})

class Scroll{
    constructor({el, top, unit}){
        this.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.top = top;
        this.unit = unit;
        this.el.style.position = 'fixed';
        this.el.style.top = this.checkUnits()+'px';
        window.addEventListener('scroll',() => this.scroll());
        window.addEventListener('resize',() => this.scroll());
    }
    //mouseover || mouseenter - при наведении на элемент
    //mouseleave || mouseout - при убирании мыши с элемента
    scroll(){
        this.curPosition = this.checkUnits();
        if(this.curPosition - pageYOffset > 0){
            this.el.style.top = this.curPosition - pageYOffset + 'px';
        }
        else this.el.style.top = 0;
    }
    checkUnits(){
        if(this.unit == 'px'){
            return this.top > 0 ? this.top : 0;
        }
        //window.innerHeight - высота экрана
        //window.innerWidth - ширина экрана
        //el.clientHeight - высота элемента
        //el.clientWidth - ширина элемента
        else if(this.unit == '%' || this.unit == undefined){
            return this.calcPx(window.innerHeight - this.el.clientHeight, this.top);
        }
    }
    calcPx(height, per){
        return height / 100 * per;
    }
}
// let a = document.querySelector('.header__nav');
let nav = new Scroll({
    el: '.header__nav',
    top: 10,
    unit: '%'
});

let header = document.querySelector('.header'),
    headerContent = document.querySelector('.header__content');
let rand = (min, max) => Math.floor(Math.random()*(max+1-min)+min);

// headerContent.addEventListener('mouseover', function(e){
//     this.style.position = 'relative';
//     this.style.transition = '500ms linear';
//     let x = window.innerWidth / 2 - this.clientWidth;
//     let y = window.innerHeight / 2 - this.clientHeight;
//     this.style.left = rand(x*-1, x) + 'px'; 
//     this.style.top = rand(y*-1, y) + 'px';
// })
header.addEventListener('mousemove', function(e){
    // console.log(e.clientX, e.clientY); //координаты мыши
    headerContent.style.position = 'fixed';
    headerContent.style.left = e.clientX + 'px'; 
    headerContent.style.top = e.clientY + 'px';
})