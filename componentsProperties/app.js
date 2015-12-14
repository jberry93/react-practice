var ProgrammingLanguage = React.createClass({
  render: function() {
    return (
      <h3>{this.props.person} wants to learn {this.props.language}</h3>
    );
  }
});

ReactDOM.render(
  <div>
    <ProgrammingLanguage person="Jim" language="JavaScript" />
    <ProgrammingLanguage person="Betty" language="Python" />
    <ProgrammingLanguage person="George" language="Ruby" />
    <ProgrammingLanguage person="Jane" language="PHP" />
    <ProgrammingLanguage person="Jeff" language="C++" />
  </div>, document.getElementById("content"));
