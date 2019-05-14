import React, { Component } from "react";

class Counter extends Component {
  // State is a specific object in React components...
  // ... contains all data use in this component

  // ** Comment out the state due to controlling data inside component by its parent component
  // state = {
  //   count: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  spanStyle = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    /* 
    1. JSx elements must have one parent...
      It can be the html element or React.Fragment
    2. Embedding javascript expression for rendering dynamic data in curly braces {--- javascript expression here ---}

    3. Jsx expression is just normal javascript object

    4. More about rendering
      4.0: Set attribute for jsx elements -> attr={this.value}
      4.1: Set style attribute for specific element: this.value is js object has css properties in cammelCase
      4.2: Render dynamically classes 
      4.3: Render list of elements using map method of array (for)
      4.4: Conditional rendering (if else)
          No if else directives like in Angular
          --> we have the power of curly braces
          --> use it to call function that return jsx (javascript object) in conditional way
          ** Note: (x && y && ... && z) return z 
                  i.e: var x = true && "phong khoang" && "dep trai" 
                        console.log(x) // dep trai
    5. Handling Events
      5.1: Jsx elements have all event like in html elements
      5.2: Note: pass reference function instead of calling function 
      5.3: Binding Event Handlers
          + Causes: this keyword in js is different with others languages
                  Depending on HOW function is called. This can reference to different object
          + Solution 1: use _.bind method to set value of this and reassign for that function again
          + Why: 
            - _.bind method return new function
            - Functions in Javascript are also the object
            - in the constructor of the class. After super(), this is always point to current object
            - so, we can bind the this keyword for the function in the constructor. Then, anytime, anyway the function is call
             ... this keyword in that one always points to the same object

          + Solution 2: use arrow function (due to never reassigning this again)
    6. Update state data
      + use setState method of Component class in React
      + only that way, React is notified to rendering element again

      6.1: What happends when the state changes?
        . when state of component changes --> React schedule calling of render method to run in little bit after momennt
        . React dissect the Old and New virtual Dom and update exactly the real Dom element
    7. Passing event arguments
      Use arrow function with no params and calling the actual function we want with suitable arguments

    8. Composing Components
      8.1: Passing data to components
        - Use "props" availabel object of the component
        - When call the component --> pass data by adding properties to that call
        --> props will get those propeties 
      8.2: Passing Children
        - Also use "props" (this.props.children)
        - children are actualy react element
        - Passing like this: <Counter><h1>this is a child</h1></Counter>
    9. Debugging React App: use React Develop tools extension
    10. Props and State
      - State is internal and local to its component. We can't access State outside of the component
      - Props use to passing data to that component. Props is readonly (set one time)
    11. Raising and Handling events
      ** Note: The component that owns a piece of state, should be the one modifying it
      - Also use "props" for passing the reference of function if parent component
      - Use Passing Event Arguments Technique to handle event in particular element in child component
    12. Local State of each component
      --> HOW to sync the same group components?
      --> Solution 1: Remove local state, and use only props (input data)
      --> Solution 2: ?????

    13. Multiple components in Sync: between sibling or unrelated components
      --> Lifting State up

    14. Destructuring Props Object for clean code
    15. Lifecyle hook


    */

    console.log("Counter - Rendered");
    return (
      <div>
        <span style={this.spanStyle} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncreamentCounter(this.props.counter)}
          style={{ padding: "2px" }}
          className="btn btn-secondary btn-sm mr-2"
        >
          Increament
        </button>
        <button
          onClick={() => this.props.onDeleteCounter(this.props.counter.id)}
          style={{ padding: "2px" }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  componentDidUpdate(prevProp, prevState) {
    // console.log("Counter - DidUpdate");
    // console.log(prevProp);
    // console.log(prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount ", this.props);
  }

  // handlerIncreament = () => {
  //   // this.state.count++; // not working if just have this code
  //   // Need to set new state
  //   this.setState({ count: this.state.count + 1 });
  // };

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // renderTags() {
  //   if (this.state.tags.length <= 0) {
  //     return <p>There is no tags</p>;
  //   } else {
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  // }
}

export default Counter;
