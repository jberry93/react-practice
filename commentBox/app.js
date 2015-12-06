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

var CommentForm = React.createClass({
  initialState: function() {
    return { author: "", text: "" };
  },
  handleAuthorChange: function(event) {
    this.setState({ author: event.target.value })
  },
  handleTextChange: function(event) {
    this.setState({ text: event.target.value })
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if(!text || !author) {
      return;
    }
    this.setState({ author: "", text: "" });
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" value={this.state.author} onChange={this.handleAuthorChange} />
        <input type="text" placeholder="What's on your mind?" value={this.state.text} onChange={this.handleTextChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
});

ReactDOM.render(<CommentBox url="/api/comments" pollInterval={2000} />, document.getElementById("content"));
