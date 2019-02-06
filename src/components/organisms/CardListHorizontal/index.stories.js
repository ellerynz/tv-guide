import { storiesOf } from '@storybook/vue';
import CardListHorizontal from './index.vue';

storiesOf('Organisms/CardListHorizontal', module)
  .add('Default', () => ({
    components: { CardListHorizontal },
    template: '<CardListHorizontal :episodes="episodes" :linkText="linkText" />',
    computed: {
      linkText() {
        return 'Season 1';
      },
      episodes() {
        return [
          {
            id: 1,
            name: 'First',
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg',
            },
          },
          {
            id: 2,
            name: 'Second',
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg',
            },
          },
          {
            id: 3,
            name: 'Third',
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg',
            },
          },
          {
            id: 4,
            name: 'Fourth',
            image: {
              medium: 'http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg',
            },
          },
        ];
      },
    },
  }));
