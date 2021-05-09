import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onFormSubmit(e) {
    e.preventDefault();

    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
          <div className="ui field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
