var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments Galore!</h1>
        <CommentList />
        <br /><br />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Hime">I am a *pug*</Comment>
        <Comment author="Kirby">I am a *chihuahua*</Comment>
      </div>
    )
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">Hey! Here is a comment form!</div>
    )
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">{this.props.author}</h2>
        {marked(this.props.children.toString())}
      </div>
    )
  }
})

ReactDOM.render(<CommentBox />, document.getElementById("content"));
