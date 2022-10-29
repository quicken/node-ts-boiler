# Command Line Project Template using Typescript

## About

This project serves as a minimalistic template for building a node CLI command that can be published to NPM.

While the src is minimalistic, I did want best practice basics such as unit testing, document generation, linting and code formatting.

Use this repo to quickly bootstrap a node project with typescript.

Given the focus on keeping things as simple as feasible, there are no opinions on how to parse arguments or how to prompt a user. Also, there is no module bundler included so it is easy to follow what is happening with the code and you can add whatever suits your taste.

Have fun creating.

Cheers

Marcel 😎👍

- #herdingbits
- Youtube: https://youtube.com/herdingbits
- Blog: https://www.herdingbits.com

## Features

- Run this project like any CLI command.
- Code using typescript.
- Ready to publish to NPM.
- VS Code Debug Profiles for easy debugging.
- Jest for unit testing.
- Typedocs for automatic doc creation.
- Minimal source code and tooling.

## Prerequisites

Ensure you have the following tools installed on your computer

- node (recent version), https://nodejs.org/en/
- yarn (classic), https://classic.yarnpkg.com/lang/en/
- NPM account (optional). If you plan to publish your command. https://www.npmjs.com/

## Usage

Check out this repository and follow the checklist.

### Setup Checklist

After checking out this project complete the following quick steps before you start coding.

1. Update the package.json file with values appropriate to the project. Values related to describing the project are in the top section of the file.
2. There are two places with the word: "changeme". One is the name of the application. The second is within the bin section which controls what end-users type into the console to run your program. Update both values to suit.
3. If the MIT license is not suitable for your project. Update the license section in package.json and the LICENSE file as required.
4. Remove the .git folder and all its contents.
5. Run: **yarn install**

**Happy Coding! 😎👍**

### Useful packages for building a CLI Command

If you are building a command line tool I found the following packages to be useful but there are plenty of great alternatives for parsing arguments and prompting a user for input.

#### Parse command line arguments with "yargs"

yargs home: http://yargs.js.org/

```
yarn add yargs
```

#### Prompt a user for input with "prompt"

prompt home: https://github.com/flatiron/prompt#readme

```
yarn add prompt
yarn add -D @types/prompt
yarn add -D @types/colors
```

### Default Commands

This template makes available the following commands:

- **yarn start** - Compiles and runs the application.
- **yarn test** - Builds and runs all unit tests using the Jest framework.
- **yarn build** - Builds the application, ready for publishing.
- **yarn docs** - Generate documentation from JSDoc style comments. Also, see inside docs folder.
- **yarn debug** - Builds the application and runs node in debug mode.

### Debugging in VS Code.

The template configures several launch templates for use with the VSCode Debugger.

Using the launch templates directly from VS Code is likely easier than running the 'yarn debug" option.

1. Set break points as required in your code.
2. Open the debug panel
3. Select your launch profile. (see below)
4. Click the "Start Debugging" icon. VS Code will compile and run the program then stop at the first break point encountered.

#### Launch Program

Compiles and runs the program starting from index.ts. Automatically attaches the debugger.

#### node attach

Attaches the debugger to a currently running node process. For this launch template you must
fist manually start your program using the command **yarn debug**. Once the program has started
you can launch the debugger to attach to the running program. Its just here for advanced use cases.

#### test open file

Compiles then runs the test for the file in the active editor window. Automatically attaches the debugger.

For this to work the active editor must be a unit test file or the file name must be able to map back to a unit test file. e.g. Given User.ts is open in the active editor the launcher will try to run unit tests in the file: User.test.ts

#### test all

Compiles and runs all unit tests. Automatically attaches the debugger.

## Publishing to NPM

1. Build the project.
2. Make the entry file **./dist/index.js** executable.
3. Push to NPM repo.

```bash
yarn test
yarn build
chmod +x ./dist/index.js
yarn publish --access public
```

The project includes bash script "publish.sh" that does the above.

Run:

```bash
./publish.sh
```

### Installing your command from NPM

After you have published your command to NPM your users can install your command as follows:

Note: This uses the value of the "name" property inside your package.json file. Typically, your package name needs to also
use you npm user name as a prefix. e.g. @herdingbits/sayhello

For npm users:

```bash
npm i -g changeme
```

For yarn users:

```bash
yarn global add changeme
```

If you would like to try without installing it first:

```bash
npx changeme
```

After, your command has been installed end-user can type the key you specified inside of the "bin" property within the
package.json file to execute your command just like any other built in CLI command.

For example given the following configuration inside of your package.json file:

```json
  "bin": {
    "changeme": "./dist/index.js"
  },
```

Your end users would simply type the following to run your command.

```bash
changeme
```
