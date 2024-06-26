type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function meuFilter<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }
  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(array.filter((value) => value < 5));

const arrayFiltrado = meuFilter(array, (value) => {
  return value < 5;
});

console.log(arrayFiltrado);

const add = <T>(value: T): T => {
  return value;
};

const value = 1;
const test = add<string>;
console.log(test("Marcus"));
