# StorybookStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Furter SB help

### Getting Started

https://www.learnstorybook.com/intro-to-storybook/angular/en/get-started/

### Docs

- https://medium.com/storybookjs/rich-docs-with-storybook-mdx-61bc145ae7bc
- https://storybook.js.org/docs/basics/introduction/

### Examples

https://storybookjs-next.now.sh/angular-cli/?path=/story/app-component--component-with-separate-template


### Addons

https://storybook.js.org/addons/

https://github.com/storybookjs/storybook/tree/master/addons/storysource

https://storybookjs.now.sh/angular-cli/?path=/docs/addon-docs--with-text

### Misc

https://angular.carbondesignsystem.com/?path=/story/components-accordion--skeleton

### Pretier

https://itnext.io/enforce-your-team-coding-style-with-prettier-and-tslint-9faac5016ce7

https://medium.com/@leonardomendoza/angular-7-prettier-99ffbec05363

https://medium.com/@victormejia/setting-up-prettier-in-an-angular-cli-project-2f50c3b9a537

### Typescript hero replaced by "source.organizeImports" under "actionsOnSave"

Two links below have to do with maintainer saying typescript hero is obsolete
https://gitlab.com/smartive-private/christoph/typescript-hero/issues/434#note_107457812

https://stackoverflow.com/questions/46722701/is-there-a-way-to-remove-unused-imports-and-declarations-from-angular-2

If you're a heavy visual studio user, you can simply open your preference settings and add the following to your settings.json:

...
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
"source.organizeImports": true
}
....

### Remove .git following clone

rm -r -force .git # Delete all git information
git init # Recreate an empty repo
git add --all # Re-add all the files to the index
git commit -m 'Initial fork from example.com/repo.git'

### Deploying Static Files
"build-storybook-static": "build-storybook -c .storybook -o .out"
"build-storybook-static": "build-storybook -c .storybook"

https://www.learnstorybook.com/intro-to-storybook/react/en/deploy/

https://storybook.js.org/docs/basics/exporting-storybook/
