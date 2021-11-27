import ErrorRepository from '../errorRepository';

test(('class ErrorRepository create'), () => {
  const expected = new Map();
  expected.set(201, 'created');
  expected.set(401, 'unauthorized');
  const errorRepo = new ErrorRepository();
  errorRepo.map.set(201, 'created');
  errorRepo.map.set(401, 'unauthorized');
  expect(errorRepo.map).toEqual(expected);
});

test(('class ErrorRepository translate()'), () => {
  const errorRepo = new ErrorRepository();
  errorRepo.map.set(201, 'created');
  errorRepo.map.set(401, 'unauthorized');
  expect(errorRepo.translate(800)).toBe('Unknown error');
  expect(errorRepo.translate(201)).toBe('created');
  expect(errorRepo.translate(401)).toBe('unauthorized');
  expect(errorRepo.translate(222)).toBe('Unknown error');
});
