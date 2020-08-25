/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const fs = require('fs');
const cp = require('child_process');

function tsecBuildAndRunCheck(cmd, callback) {
	try {
		if (!fs.existsSync('node_modules/tsec/lib/tsec.js')) {
			cp.exec(cmd, (err, stdout, _) => {
				console.log(stdout);
				if (err) {
					console.error();
					console.error(err);
					process.exit(1);
					return;
				}
				callback();
			});
		} else {
			callback();
		}
	} catch (err) {
		console.error();
		console.error(err);
	}
}

function tsecCompileCheck(cmd) {
	cp.exec(cmd, (err, stdout, _) => {
		console.log(stdout);
		if (err) {
			console.error();
			console.error(err);
			process.exit(1);
		}
	});
}

const buildTsecCmd = 'cd node_modules/tsec && tsc && cd ../..';
const monacoCheck = 'node_modules/tsec/bin/tsec -p src/tsconfig.monaco.json --noEmit';
const tsconfigCheck = 'node_modules/tsec/bin/tsec -p src/tsconfig.json --noEmit';
// tsecBuildAndRunCheck(buildTsecCmd, () => tsecCompileCheck(monacoCheck));
tsecBuildAndRunCheck(buildTsecCmd, () => tsecCompileCheck(tsconfigCheck));