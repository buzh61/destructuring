import specialAtack from '../src/js/app';

test('Test object without "special"', () => {
  expect(specialAtack({})).toBeFalsy();
});

test('Test object with "special"', () => {
  const character = {
    special: [
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };

  const result = [
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];

  expect(specialAtack(character)).toEqual(result);
});
