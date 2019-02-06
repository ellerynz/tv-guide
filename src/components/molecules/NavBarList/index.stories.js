import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs/vue';
import NavBarList from './index.vue';

const mockNavItems = [1, 2, 3, 4, 5].map(num => ({
  id: `season-${num}-nav`,
  linkText: `Season ${num}`,
  name: `season-${num}`,
  navigateTo: `#season-${num}`,
  selected: num === 1,
  num,
}));

storiesOf('Organisms/NavBarList', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    components: { NavBarList },
    template: '<NavBarList :nav-items="navItems" />',
    computed: {
      navItems() {
        return mockNavItems;
      },
    },
  }));
