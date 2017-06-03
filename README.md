# TESTING REACT REDUX WITH JEST FOR BEGINNER :rocket:

## How to run test
- npm run test
- npm run test:watch (for watch mode)

## How to run web application
- npm run dev

## How to run service
- npm run json-server

## Error 
- Warning: ReactTestUtils has been moved to react-dom/test-utils. Update references to remove this warning.
- Warning: Shallow renderer has been moved to react-test-renderer/shallow. Update references to remove this warning.

#### To Fix Error  
- If you are using React 0.14 or React <15.5, in addition to enzyme, you will have to ensure that you also have the following npm modules installed if they were not already: ``` npm i --save-dev react-addons-test-utils react-dom ```
- If you are using React >=15.5, in addition to enzyme, you will have to ensure that you also have the following npm modules installed if they were not already: ``` npm i --save-dev react-test-renderer react-dom ```


## To do next
- Asynchronous testing 
