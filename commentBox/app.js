var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  ajaxCall: function() {
    $.ajax({
      url: this.props.url,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(httpRequest, status, error) {
        console.error(this.props.url, status, error.toString());
      }.bind(this)
    });
  },
  callInterval: function() {
    this.ajaxCall();
    setInterval(this.ajaxCall, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments Galore!</h1>
        <CommentList data={this.state.data} />
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
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">Hey! Here is a comment form!</div>
    );
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
    );
  }
});

ReactDOM.render(<CommentBox url="/api/comments" pollInterval={2000} />, document.getElementById("content"));
