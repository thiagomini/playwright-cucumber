# playwright-cucumber

This is an example repository showing an integration between [cucumber](https://cucumber.io/) and [playwright](https://playwright.dev/). 
Both tools were originally created to support javascript, but there are a few steps to make it work with Typescript, check both pages for integration:

1. [Typescript + Playwright](https://playwright.dev/docs/test-typescript)
1. [Typescript + Cucumber](https://stackoverflow.com/a/58606107/11726399)

You can also check the configurations used in the [tsconfig](./tsconfig.json) file.


### Folder Structure

There are many folders in this project:

* [features](./features/) - Defines test using Gherkin Language, used by Cucumber.
* [step-definitions](./step-definitions/) - Defines the implementation for each step in the `.feature` files. It uses playwright to access the page and make assertions
* [support](./support/) - Defines utils files used by `playwright`. The [world.ts](https://github.com/thiagomini/playwright-cucumber/blob/95d054ebeaef0523b89cc30e2755379a431eb04f/support/world.ts)
file defines an abstraction to facilitate the usage of Playwright's APIs.
* [tests](./tests/) and [tests-examples](./tests-examples/) - Both were automatically created by Playwright when initializing it with `pnpm dlx create-playwright`

### Testing

Run `pnpm run test` to execute the tests that integrate both Cucumber and Playwright.


### Additional context

It's also possible to use decorated classes to define Cucumber's steps using [cucumber-tsflow](https://www.npmjs.com/package/cucumber-tsflow):
```ts
import { binding, before, after } from "cucumber-tsflow";

@binding()
class MySteps {
    ...
    @before()
    public beforeAllScenarios(): void {
        ...
    }
    ...

    @before("requireTempDir")
    public async beforeAllScenariosRequiringTempDirectory(): Promise<void> {
        let tempDirInfo = await this.createTemporaryDirectory();

        ...
    }

    @after()
    public afterAllScenarios(): void {
        ...
    }

    @after("requireTmpDir")
    public afterAllScenarios(): void {
        ...
    }
}

export = MySteps;
```
