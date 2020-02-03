import { text, withKnobs } from '@storybook/addon-knobs';
import { AuthFormModule } from '../../app/tutorial-components/todd-motto/content-projection/auth-form/auth-form.module';
import { moduleMetadata } from '@storybook/angular';

export default {
    title: 'Todd Motto | Content Projection',
    decorators: [
      moduleMetadata({
        imports: [
            AuthFormModule
        ]
      }),
      withKnobs
    ]
};

export const RxJSExamples = () => ({
    template: `
        <div>RxJS Examples Coming Soon</div>
    `,
    props: {
        header: text('header', 'Create Account'),
    }
});
