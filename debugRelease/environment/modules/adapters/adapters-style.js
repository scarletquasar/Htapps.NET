function ___appendStyle(css) {
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    head.appendChild(style);

    style.type = 'text/css';
    if (style.styleSheet){

    style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}