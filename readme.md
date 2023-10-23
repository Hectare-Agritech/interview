### Getting Started

Clone this repo, create a branch called `candidates/[your-name]` and run `npm i` to install the packages, you will need Node.js version 16 or higher.

Run `npm run code` from a terminal window to execute the program

### Coding Interview Test

The `resources\harvests.csv` csv file contains the results of this years harvest for some of our clients in the following format

| Organisation | Commodity | Area (Hectares) | Predicted (Tonnes)  | Actual (Tonnes) 
| -------- | ------- | -------- | -------- | -------- 
| Sentry | 1  | 203 | 1676.59 | 1900
| Sentry | 11 | 180 | 1450 | 1300

Engineering have been asked to provide the difference in t/h (tonnes per hectare) between the predicted and actual yield for each client and commodity combination. The predicted / actual columns in the CSV represent the total number of `tonnes` harvested from the area in hectares in the `area` column.

Using the `process` function in `index.ts` as an entry point write a pipeline using functional programming approach that performs the following tasks.

1. Use the `fs` library to read contents of the `resources\harvests.csv`
2. Define a type and parse the file contents into an array the defined type
3. Group the array by organisation and commodity
4. Define another type for the results, this should include organisation, commodity, actual t/h, predicted t/h & differential t/h
5. Perform the required calculations to work out the predicted and actual t/h rounded to 2 decimal places and build your results array
6. Write the array to console sorted by lowest to highest differential

## Ramda

You do not have to use `ramda` library for the task, feel free to write your own code or use another library for function composition.

If you do use ramda, some tips...

Use the `Ramda` library's `pipe` (left-to-right function composition) or `compose` (right-to-left function composition) to compose your functions, for example...

```ts
const result = R.pipe<[Type1], Type2, Type3>(fn1, fn2, fn3)
const result = R.compose<[Type1], Type2, Type3>(fn3, fn2, fn1)
```

You can chain async functions together as follows

```ts
R.pipe<[string], Promise<string>, Promise<string>, Promise<void>>(
  fn1,
  R.andThen(fn2),
  R.andThen(fn3)
)("input to fn1")
```

In the above example the `fn1` function takes a string as input and returns a Promise\<string\> `fn2` takes the output of `fn1` as input and returns Promise\<string\>.

Note, once you have invoked an async function in the pipe / compose chain of functions all subsequent return types need to be a Promise even if they are not async, in the above example `fn3` may or may not be async.