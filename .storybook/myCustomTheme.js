import { create } from '@storybook/theming/create';
import { themes } from '@storybook/theming';

export default create({
    base: 'light',

    brandTitle: 'Storybook Playground',
    brandUrl: 'https://example.com',
    // brandImage: 'https://placehold.it/350x150',
    brandImage: 'logos/ron-swanson.png'
});