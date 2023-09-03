# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2023-09-02

### Added

- showing border and changing font when clicking on a cart item

### Developer Notes

- replaced get methods to getters
- add removeAllCartItems and isCartEmpty methods to Cart service
- add ConfigOptionsService with partial setter and getter by key
- add ConstantsService InjectionToken that is configured with useValue
- add GeneratorService with GeneratorFactory that is configured with useFactory and deps
- add genID method to GeneratorService that generates a new id using yield (ts generators)
- add LocalStorageService that works with window.localStorage and is configured with useValue
- inject all new services into FirstComponent using decorators @Optional and @Inject with parameter
- add BorderAndFontDirective that changes border and font of cart item when clicking on it (border style and font size are configured by directive input parameters)

## [1.1.0] - 2023-08-27

### Added

- total cost and product quantity below the cart
- quantity and calculated price for every cart item
- increase/decrease cart item quantity buttons
- title for the application
- changing background color when hovering a cart item

### Fixed

- display more than two decimal places in the cart

## [1.0.0] - 2023-08-26

### Added

- first component with test fields
- product component and model with fields related to the product
- product list component with list of available products
- product service with getting all available products method
- cart item component and model with fields related to the cart item (product in cart)
- cart list component with list of added to cart products
- cart service with getting all added to cart products and add/remove to/from cart methods