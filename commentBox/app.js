var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments Galore!</h1>
        <CommentList data={this.props.data} />
        <br />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(commentObject) {
      return (
        <Comment author={commentObject.author} key={commentObject.id}>{commentObject.text}</Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
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
    text: "I want to learn more **JavaScript**"
  },
  {
    id: 3,
    author: "Jane",
    text: "I think **Angular** is useful to learn"
  },
  {
    id: 4,
    author: "Jake",
    text: "Here's another comment!!"
  }
];

ReactDOM.render(<CommentBox data={data} />, document.getElementById("content"));
