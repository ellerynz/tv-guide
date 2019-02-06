import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs/vue';
import Card from './index.vue';

const computed = {
  name() {
    return text('name', 'The best around');
  },
  imageUrl() {
    return text('imageUrl', 'http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg');
  },
};

storiesOf('Molecules/Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { Card },
    template: '<Card :name="name" :imageUrl="imageUrl" />',
    computed,
  }));
