import React, { Component } from 'react';

export class SecondSharedComponent extends Component {
  render() {
    const styles = {
      margin: '4px 0',
      padding: 16,
      border: '1px solid #cccccc',
      borderRadius: 4,
      width: 400,
      textAlign: 'center' as any,
      fontSize: 18,
      backgroundColor: '#a0f0ff',
    };

    return <div style={styles}>Second Shared Component</div>;
  }
}
