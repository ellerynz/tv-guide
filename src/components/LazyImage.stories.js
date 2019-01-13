import { storiesOf } from '@storybook/vue';
import { withKnobs, text, number } from '@storybook/addon-knobs/vue';
import LazyImage from './LazyImage.vue';

const computed = {
  alt() {
    return text('alt', '');
  },
  src() {
    return text('src', 'http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg');
  },
  width() {
    return number('width', 250);
  },
  height() {
    return number('height', 140);
  },
};

storiesOf('LazyImage', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { LazyImage },
    template: '<LazyImage :alt="alt" :src="src" :width="width" :height="height"/>',
    computed,
  }))
  .add('Loading', () => ({
    components: { LazyImage },
    template: '<LazyImage :alt="alt" :src="src" :width="width" :height="height" :throttleWait="5000"/>',
    computed,
  }))
  .add('Error', () => ({
    components: { LazyImage },
    template: '<LazyImage :alt="alt" src="" :width="width" :height="height"/>',
    computed,
  }));
