import {createElement, Component, render} from './toy-react'

class MyComponent extends Component {
  render () {
    return <div>
      <h1>component</h1>
      {this.children}
    </div>
  }
}
render(<MyComponent id="a" class="c">
  <div>1212</div>
  <div>1</div>
</MyComponent>, document.body)
