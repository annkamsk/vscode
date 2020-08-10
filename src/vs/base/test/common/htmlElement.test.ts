/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as assert from 'assert';
import { createHTMLElement, createHtmlTableElement } from 'vs/base/common/htmlElement';

suite('Create HTMLElement', () => {

	test('createHtmlTableElement creates table', () => {
		const table = createHtmlTableElement(['Setting', 'Extension', 'Score'], [
			['hello', 'world', '4'],
			['foo', 'bar', '3.0']
		]);
		const expectedHtml = `
			<table>
				<thead><tr><th>Setting</th><th>Extension</th><th>Score</th></tr></thead>
				<tbody>
					<tr><td>hello</td><td>world</td><td>4</td></tr>
					<tr><td>foo</td><td>bar</td><td>3.0</td></tr>
				</tbody>
			</table>
		`.replace(/[\n\t]/g, '');
		const actual = table.outerHTML.replace(/\s*style="white-space:\s*pre-line;"/g, ''); // remove style property
		assert.equal(actual, expectedHtml);
	});

	test('createHtmlTableElement with empty header creates table', () => {
		const table = createHtmlTableElement([], [
			['CPUs', 'Hello World'],
			['GPU Status', 'Hello World\nHello World\nHello World'],
			['Load (avg)', 'Hello World'],
			['Memory (System)', 'Hello World'],
			['Process Argv', 'Hello World'],
			['Screen Reader', 'Hello World'],
			['VM', 'Hello World'],
		]);
		const expectedHtml = `
			<table>
				<tbody>
				<tr><td>CPUs</td><td>Hello World</td></tr>
				<tr><td>GPU Status</td><td>Hello World<br>Hello World<br>Hello World</td></tr>
				<tr><td>Load (avg)</td><td>Hello World</td></tr>
				<tr><td>Memory (System)</td><td>Hello World</td></tr>
				<tr><td>Process Argv</td><td>Hello World</td></tr>
				<tr><td>Screen Reader</td><td>Hello World</td></tr>
				<tr><td>VM</td><td>Hello World</td></tr>
				</tbody>
			</table>`.replace(/[\n\t]/g, '');
		const actual = table.outerHTML.replace(/\s*style="white-space:\s*pre-line;"/g, ''); // remove style property
		assert.equal(actual, expectedHtml);
	});

	test('createHTMLElement creates element', () => {
		const elem = createHTMLElement('h2', 'Content', 'myClass', new Map([['color', 'black']]));
		assert.equal(elem.outerHTML, '<h2 class="myClass" style="color: black;">Content</h2>');
	});

	test('createHTMLElement treats content with HTML entities as plaintext', () => {
		const stringWithEntities = 'Hello&amp;, &lt;&gt; Wo&rarr;rld&middot;';
		const elem = createHTMLElement('h2', stringWithEntities);
		assert.equal(elem.innerText, stringWithEntities);
	});
});