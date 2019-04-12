1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
Array.concat() , Array.map(), and Array.filter()
1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are used to tell the reducer when an action is preformed so that the state may be copied and modified.
Reducers are used to determine how and what the state will be like when it is changed.
Store is what contains the state of the application. It's what everything goes through for changes. it's immutable and the original state can never be changed but through cloning, modifying and copying we can alter the form of the state. 
1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
The component state is local while the application state is global. 
1.  What is middleware?
middleware is a software that allows for different programs to communicate as well as share data. 
1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk is a middlewhere which allows for redux to handle async operations. this allows for action to perform api calls. 
1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()