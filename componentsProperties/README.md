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

---
