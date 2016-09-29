import PieElement from './pie-element';
require('./style.css');
import lodash from 'lodash';
console.log(_.map([6,7,8], (i) => i + 1));
document.registerElement('pie-element-two', PieElement); 
