import React, { Component } from 'react';
import Header from './component/header/index';
import Headline from './component/headline';
import './App.scss';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPost } from './actions'


const tempArr = [{
  fName: "Md",
  lName: "Irfan",
  email: "mdirfan844@gmail.com",
  age: 27,
  onlineStatus: true
}]
class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this)
  }

  fetch() {
    this.props.fetchPost()
  }

  render() {

    const { posts } = this.props
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline
            header="posts"
            desc="Click the button to render posts!"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post
                const configItemList = {
                  title,
                  desc: body
                }
                return (
                  <ListItem key={index} {...configItemList} />
                )
              })}
            </div>
          }
        </section>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, { fetchPost })(App);
