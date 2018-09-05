import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, Field } from 'eurobank-widgets';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <div style={{ width: '500px', margin: '50px auto' }}>
          <Form onSubmit={data => console.log('submitted', data)}>
            <Field type="amount" label="Amount" />
            <Field
              style={{ width: '100%', marginBottom: '25px' }}
              type="select"
              label="Selection"
              data={{
                source: [
                  { key: 'a', value: 'Selection 1' },
                  { key: '2', value: 'Selection 2' },
                ],
              }}
            />
            <br />
            <Button>Asdf</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default App;
