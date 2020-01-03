import { addParameters, configure } from '@storybook/angular';
import myCustomTheme from './myCustomTheme';
import { themes } from '@storybook/theming';

addParameters({
    options: {
        // theme: themes.dark
        theme: myCustomTheme
    }
})

// automatically import all files ending in *.stories.ts
configure(require.context('../src/stories', true, /\.stories\.ts$/), module);
