import { storiesOf } from '@storybook/vue';
import Heading from './index.vue';

storiesOf('Atoms/Heading', module)
  .add('level', () => ({
    components: {
      Heading,
    },
    template: `
      <div>
        <Heading :level="1">Heading 1</Heading>
        <Heading :level="2">Heading 2</Heading>
        <Heading :level="3">Heading 3</Heading>
        <Heading :level="4">Heading 4</Heading>
      </div>
    `,
  }));
