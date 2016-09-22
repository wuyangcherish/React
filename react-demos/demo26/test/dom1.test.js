import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import App from '../src/Component/App';

describe('DOM Rendering', function(){
	it('click the delete button, the Todo item should be delete', function(){
		const app = TestUtils.renderIntoDocument(<App/>);
		//找出 app 里面所有的 li 元素
		let todoItems = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
		let todoLength = todoItems.length;

		//我的初始化数据时两条
		expect(todoItems.length).to.equal(2) //----- 必须要有初始数据
		//找出第一个li 元素的button 节点
		let deleteButton = todoItems[0].querySelector('button');
		// 下面的意思就是说  点击btn 之后 todoItem 的程度应该比之前少1个。
		TestUtils.Simulate.click(deleteButton);
		let todoItemsAfterClick = TestUtils.scryRenderedDOMComponentsWithTag(app,'li');
		expect(todoItemsAfterClick.length).to.equal(todoLength - 1);
	})
})