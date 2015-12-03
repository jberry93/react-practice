var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">Hey! Here is a comment box!</div>
    );
  }
});
ReactDOM.render(<CommentBox />, document.getElementById("content"));
