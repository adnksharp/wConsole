let HEAD = document.querySelector('head'),
    BODY = document.querySelector('body'),
    UTF = document.createElement('meta'),
    HTTP = document.createElement('meta'),
    VP = document.createElement('meta'),
    CSS = document.createElement('link'),
    DIV = document.createElement('div'),
    OUTPUT = document.createElement('div'),
    BUTTON = '<button id="run">&gt;</button>',
    INPUT = '<input type="text" id="input"/>',
    SELECT = document.createElement('select'),
    option1 = '<option value="1">Estándar</option>',
    option2 = '<option value="2">Expresión</option>';

UTF.setAttribute('charset', 'utf-8');
HTTP.setAttribute('http-equiv', 'X-UA-Compatible');
HTTP.setAttribute('content', 'IE=edge');
VP.setAttribute('name', 'viewport');
VP.setAttribute('content', 'width=device-width, initial-scale=1');
CSS.setAttribute('rel', 'stylesheet');
CSS.setAttribute('href', 'index.css');

HEAD.insertBefore(CSS, HEAD.firstChild);
HEAD.insertBefore(VP, HEAD.firstChild);
HEAD.insertBefore(HTTP, HEAD.firstChild);
HEAD.insertBefore(UTF, HEAD.firstChild);

OUTPUT.setAttribute('id', 'output');
SELECT.setAttribute('id', 'mode');

BODY.insertBefore(OUTPUT, BODY.firstChild);
BODY.insertBefore(DIV, BODY.firstChild);

DIV.insertAdjacentElement('beforeend', SELECT);
SELECT.insertAdjacentHTML('beforeend', option1);
SELECT.insertAdjacentHTML('beforeend', option2);

DIV.insertAdjacentHTML('beforeend', INPUT);
DIV.insertAdjacentHTML('beforeend', BUTTON);