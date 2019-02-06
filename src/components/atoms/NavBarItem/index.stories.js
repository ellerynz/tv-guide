import { storiesOf } from '@storybook/vue';
import NavBarItem from './index.vue';

storiesOf('Atoms/NavBarItem', module)
  .add('Default', () => ({
    components: { NavBarItem },
    template: '<NavBarItem :selected="false">A default nav link</NavBarItem>',
  }))
  .add('Selected', () => ({
    components: { NavBarItem },
    template: '<NavBarItem :selected="true">A selected nav link</NavBarItem>',
  }));
