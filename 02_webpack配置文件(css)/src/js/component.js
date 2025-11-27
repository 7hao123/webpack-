// import '../css/index.css';
// import '../css/component.less';
import '../css/test.css';
function component() {
    var element = document.createElement('div');
    element.innerHTML = ['Hello', 'webpack'].join(' ');
    element.className = 'content'


    return element;
}


document.body.appendChild(component());