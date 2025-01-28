const { getRandomElement, getAllQuotes } = require('../utils');
const mockData = require('./data.mock');

test('get all quotes function returns all quotes in data', () => {
  expect(getAllQuotes(mockData)).toBe([
    {
      quote:
        'Exercitationem nostrum sint ex. Architecto beatae non impedit excepturi. Dolore quibusdam inventore fugiat qui ut.',
      name: 'Et alias ut dolor eligendi et. Fuga et accusantium et repellat veniam a id. Itaque tempora velit provident. Quisquam sed laboriosam nihil delectus officia reprehenderit recusandae.',
    },
    {
      quote:
        'Dolore repellat voluptatum nihil harum. Ad dignissimos blanditiis omnis. Autem eos officiis omnis aspernatur quisquam.',
      name: 'Quia accusamus debitis distinctio. Et alias est delectus voluptas impedit qui. Animi minima officiis ullam at id. Ut est delectus voluptate qui consequatur autem.',
    },
    {
      quote:
        'Quo ut qui debitis alias. Aut dolores aut pariatur eos dolores provident perferendis. Molestias asperiores aut aut.',
      name: 'Eos distinctio amet molestiae unde omnis reiciendis ut. Necessitatibus repudiandae quis quia blanditiis vel cum doloribus placeat. Quia quam dolores et.',
    },
    {
      quote:
        'Inventore hic nihil ut aperiam voluptatem ducimus praesentium sunt. Sit voluptas in nam labore quia ut sed consequatur. Error molestias veniam ex maiores non quia placeat.',
      name: 'Animi optio qui soluta. Similique asperiores quidem perferendis voluptas et. Sed est nulla harum beatae non molestiae corporis architecto. Facere autem neque voluptatem ratione.',
    },
    {
      quote:
        'Temporibus at ducimus harum ipsa occaecati. Est quaerat quam non tenetur. Quod qui aut aut laudantium ipsa magnam.',
      name: 'Dolore quia eum et libero. Dolorem dolorum tempora rerum fugit esse. Natus repellat ad aut voluptate at. Magnam magnam similique earum id eligendi impedit.',
    },
  ]);
});
