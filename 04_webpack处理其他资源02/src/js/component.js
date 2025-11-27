import '../css/index.css';
// import '../css/component.less';
// import '../css/test.css';
function component() {
    var element = document.createElement('div');
    element.innerHTML = ['Hello', 'webpack'].join(' ');
    element.className = 'content'

    const imgEl = new Image();
    imgEl.src = require('../images/OIP-C.jpg')
    element.appendChild(imgEl);

    const bgDivEl = document.createElement('div');
    bgDivEl.style.width = '200px'
    bgDivEl.style.height = '200px';
    bgDivEl.className = 'bg-image';
    bgDivEl.style.backgroundColor = 'red';
    element.appendChild(bgDivEl);
    
    const iEl = document.createElement('i');
    iEl.className = 'iconfont icon-zhihu';
    element.appendChild(iEl);

    return element;
}


document.body.appendChild(component());