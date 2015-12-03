var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments Galore!</h1>
        <CommentList />
        <br />
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
  rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
    return { __html: rawMarkup };
  },
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">{this.props.author}</h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
});

var data = [
  {
    id: 1,
    author: "Jeffrey",
    text: "I am learning about **React**"
  },
  {
    id: 2,
    author: "Tom",
    text: "I want to learn more ##### JavaScript"
  },
  {
    id: 3,
    author: "Jane",
    text: "I think **Angular** is useful to learn"
  }
];

ReactDOM.render(<CommentBox />, document.getElementById("content"));
