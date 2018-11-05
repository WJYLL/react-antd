import React from "react";
import { connect } from "dva";

@connect(state => ({
  example: state.example,
  table: state.table
}))

export default class IndexPage extends React.Component {

  add = () => {
    const {dispatch} = this.props
    dispatch({
      type:'example/asyncadd',
      payload:{
        id:1,
        key:23
      }
    })
  }

  muin = () => {
    const {dispatch} = this.props
    dispatch({
      type:'table/asyncadd',
      payload:{
        id:1,
        key:23
      }
    })
  }

  render() {
    const {example,table} = this.props
    return (<div>
      <p>{example.count}</p>
      <button onClick={this.add}>加</button>
      <p>{table.count}</p>
      <button onClick={this.muin}>减</button>
      </div>)
  }
}

IndexPage.propTypes = {};
  