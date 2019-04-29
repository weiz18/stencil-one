import {  TweenLite } from 'gsap/umd/TweenLite.js';

export class Gsap {
    play (el: HTMLElement) {
        TweenLite.to(el, 2, {width:"200px", height:"150px"});
    }
}