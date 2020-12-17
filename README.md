![Meetup Poster](src/assets/images/ng-unit-testing.jpeg)

# Angular: Unit Testing

Working with unit testing on any project that at least tries to be serious is a must. You are going to have a lot of benefits by using it.

## Benefits of Unit Testing

- ### Improves the design of implementations.

Start coding a feature without giving it a lot of thought to the design is a very common mistake among developers. Using unit testing is going to enforce you to think and re-think the design, and if you are using TDD the impact is even bigger.

- ### Allows easy refactoring.

Since you already have tests that ensure that everything is working as expected, you can easily add changes to that code with the certainty that you are not adding any bugs.

- ### Allows for easy addition of new features without breaking things!

When you are adding a new feature you can run the tests to ensure that you ain’t breaking any other part of the application.

- ### Tests are good documentation.

Unit tests are a kind of living documentation of the product. To learn what functionality is provided by one module or another, developers can refer to unit tests to get a basic picture of the logic of the module and the system as a whole.

- ### Tests make you more confident about your work

- ### Any bugs are found easily and quicker

Code covered with tests is more reliable than the code without. If a future change breaks something in the code, developers will be able to identify the root of the problem right away rather than coming through the whole system to find the issue

**_Saying these benefits come at the cost of TIME is not true. You'll find that time spent creating unit tests is relatively small compared to time spent resolving bugs later (when you are introducing new features or making any refactors.) without tests._**

![Karma & Jasmine](src/assets/images/karma-jasmine.png)

# [Jasmine ](https://jasmine.github.io/)

Jasmine is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

It attempts to describe tests in a human readable format so that non-technical people can understand what is being tested.

# [Karma](http://karma-runner.github.io/latest/index.html)

Karma is a tool which lets us spawn browsers and run Jasmine tests inside of them all from the command line. The results of the tests are also displayed on the command line.

Karma can also watch your development files for changes and re-run the tests automatically.

Karma lets us run Jasmine tests as part of a development tool chain which requires tests to be runnable and results inspectable via the command line.

## Authors

[Joel Machango](https://joelmachango.com/)

## License

MIT

## Acknowledgement & References

[Santiago García da Rosa](https://medium.com/swlh/angular-unit-testing-jasmine-karma-step-by-step-e3376d110ab4)

[Angular.io](https://angular.io/guide/testing)

[Fireship.io](https://fireship.io/lessons/angular-testing-guide-including-firebase)
