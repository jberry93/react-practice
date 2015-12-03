var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">Hey! Here is a comment box!</div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">Hey! Here is a comment list!</div>
    )
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">Hey! Here is a comment form!</div>
    )
  }
})

ReactDOM.render(<CommentBox />, document.getElementById("content"));
