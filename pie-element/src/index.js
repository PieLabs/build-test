import PieElement from './pie-element';
require('./style.css');
import lodash from 'lodash';
console.log(_.map([1,3,4], (i) => i + 1));
document.registerElement('pie-element', PieElement); 
