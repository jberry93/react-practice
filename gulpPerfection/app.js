var React = require("react"),
    ReactDOM = require("react-dom");

var Container = React.createClass({
  render: function() {
    return (
      <div>
        <HelloWorld />
        <SuperForm />
      </div>
    );
  }
});

var HelloWorld = React.createClass({
  render: function() {
    return (<h1>Hello World</h1>);
  }
});

var SuperForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
      </form>
    );
  }
});

ReactDOM.render(<Container />, document.getElementById("helloWorld"));
