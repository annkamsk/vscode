src/vs/base/browser/markdownRenderer.ts:164:6 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

164                             span.innerHTML = strValue;
                                ~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/base/browser/markdownRenderer.ts:246:2 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

246  element.innerHTML = insane(renderedMarkdown, {
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
247     allowedSchemes,
    ~~~~~~~~~~~~~~~~~
...
262     filter
    ~~~~~~~~
263  });
    ~~~
src/vs/base/worker/defaultWorkerFactory.ts:16:15 - error TS21228: Constructing Web Workers can cause code to be loaded from an untrusted URL.

16              return new Worker(globals.MonacoEnvironment.getWorkerUrl(workerId, label));
                           ~~~~~~
src/vs/base/worker/defaultWorkerFactory.ts:24:14 - error TS21228: Constructing Web Workers can cause code to be loaded from an untrusted URL.

24      return new Worker(workerUrl, { name: label });
                   ~~~~~~
src/vs/editor/browser/view/viewLayer.ts:510:4 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

510             this.domNode.innerHTML = newLinesHTML;
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/editor/browser/view/viewLayer.ts:528:3 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

528     hugeDomNode.innerHTML = invalidLinesHTML;
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/editor/browser/view/domLineBreaksComputer.ts:110:2 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

110  containerDomNode.innerHTML = sb.build();
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/editor/browser/widget/diffEditorWidget.ts:2160:3 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

2160    domNode.innerHTML = sb.build();
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/editor/browser/widget/diffEditorWidget.ts:2165:3 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

2165    marginDomNode.innerHTML = marginHTML.join('');
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/workbench/contrib/notebook/browser/view/renderers/cellRenderer.ts:457:3 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

457     dragImageContainer.innerHTML = templateData.container.outerHTML;
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/workbench/contrib/notebook/browser/view/renderers/cellRenderer.ts:614:3 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

614     editorContainer.innerHTML = richEditorText;
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/workbench/contrib/notebook/browser/view/renderers/webviewPreloads.ts:83:4 - error TS21228: Do not assign variables to HTMLScriptElement#text or HTMLScriptElement#textContent, as this can lead to XSS.

83              scriptTag.text = node.innerText;
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/workbench/contrib/notebook/browser/view/renderers/webviewPreloads.ts:378:7 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

378                                     outputNode.innerHTML = content.htmlContent;
                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/workbench/contrib/welcome/walkThrough/browser/walkThroughPart.ts:284:6 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

284                             this.content.innerHTML = content;
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/workbench/contrib/welcome/walkThrough/browser/walkThroughPart.ts:306:5 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

306                     innerContent.innerHTML = marked(markdown, { renderer });
                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/workbench/services/extensions/browser/webWorkerExtensionHost.ts:177:22 - error TS21228: Constructing Web Workers can cause code to be loaded from an untrusted URL.

177     const worker = new Worker(url, { name: 'WorkerExtensionHost' });
                           ~~~~~~
src/vs/code/electron-sandbox/issue/issueReporterMain.ts:60:2 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

60  document.body.innerHTML = BaseHtml();
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/code/electron-sandbox/processExplorer/processExplorerMain.ts:323:3 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

323     styleTag.innerHTML = content.join('\n');
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/editor/standalone/browser/colorizer.ts:43:4 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

43              domNode.innerHTML = str;
                ~~~~~~~~~~~~~~~~~~~~~~~
src/vs/editor/standalone/browser/standaloneThemeServiceImpl.ts:215:4 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

215             this._globalStyleElement.innerHTML = this._css;
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/editor/standalone/browser/standaloneThemeServiceImpl.ts:224:3 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

224     styleElement.innerHTML = this._css;
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/editor/standalone/browser/standaloneThemeServiceImpl.ts:294:47 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

294     this._styleElements.forEach(styleElement => styleElement.innerHTML = this._css);
                                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/editor/test/browser/controller/imeTester.ts:58:3 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

58      output.innerHTML = r;
        ~~~~~~~~~~~~~~~~~~~~
src/vs/editor/test/browser/controller/imeTester.ts:72:2 - error TS21228: Assigning directly to Element#innerHTML can result in XSS vulnerabilities.

72  title.innerHTML = description + '. Type <strong>' + inputStr + '</strong>';
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
src/vs/workbench/services/extensions/worker/extensionHostWorker.ts:50:18 - error TS21228: Constructing Web Workers can cause code to be loaded from an untrusted URL.

50  const _Worker = Worker;
                    ~~~~~~
src/vs/workbench/services/extensions/worker/extensionHostWorker.ts:51:2 - error TS21228: Constructing Web Workers can cause code to be loaded from an untrusted URL.

51  Worker = <any>function (stringUrl: string | URL, options?: WorkerOptions) {
    ~~~~~~


Found 26 errors.
