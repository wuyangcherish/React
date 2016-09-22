//这是第二种测试方法，等到组件渲染成真实的dom 节点。在进行测试
//这时候就需要 jsdom 这个

import jsdom from 'jsdom';

if(typeof document === 'undefined'){
	global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
	global.window = document.defaultView;
    global.navigator = global.window.navigator;
}