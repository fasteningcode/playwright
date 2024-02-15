/**

global-teardown.ts: This module manages the dismantling of the global state once all tests have concluded.
It features a default exported function executed post all tests, facilitating the cleanup of any pertinent global context.
The consolidation of these teardown procedures guarantees a uniform concluding state for all tests, thereby enhancing test reliability.
Feel free to include any teardown setup code within this function.
Note: Please be aware of a known issue (https://github.com/microsoft/playwright/issues/23875),
where the last line of output from this function might be cleared by the line reporter.
*/
export default () => {
  // console.log("Add any Teardown setup here");
  // console.log("Add any Teardown setup here2");
};
