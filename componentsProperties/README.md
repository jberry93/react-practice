## Multiple Components and Properties
Here is the initial layout for our component:

```JavaScript
/* app.js */

var ComponentName = React.createClass({
  render: function() {
    return (
      <h3>I want to learn JavaScript</h3>
    );
  }
});

ReactDOM.render(<ComponentName />, document.getElementById("idOfDivElement"));
```

Here is the corresponding HTML file:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Components and Properties</title>
    <meta charset="utf-8">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script type="text/babel" src="app.js"></script>
  </head>
  <body>
    <div id="idOfDivElement"></div>
  </body>
</html>
```
Output:

![Output1](images/output1.png)

---
Let's use properties:

```JavaScript
/* app.js */

var ComponentName = React.createClass({
  render: function() {
    return (
      <h3>I want to learn {this.props.language}</h3>
    );
  }
});

ReactDOM.render(<ComponentName language="JavaScript" />, document.getElementById("idOfDivElement"));
```

In this case we use curly braces to refer to the value of property `language`

Output:

![Output2](images/output2.png)

---
Let's add more components:

```JavaScript
/* app.js */

var ComponentName = React.createClass({
  render: function() {
    return (
      <h3>I want to learn {this.props.language}</h3>
    );
  }
});

ReactDOM.render(
  <div>
    <ComponentName language="JavaScript" />
    <ComponentName language="Python" />
    <ComponentName language="C++" />
    <ComponentName language="Ruby" />
    <ComponentName language="PHP" />
  </div>, document.getElementById("idOfDivElement"));
```
Now we are reusing the same component but printing a different value each time since we are using curly braces to represent each value of property `language`

Output:

![Output3](images/output3.png)

---
