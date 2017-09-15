import React, { Component } from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import './style.css';
const Option = AutoComplete.Option;

function onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return (new Array(getRandomInt(5))).join('.').split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query} Test1
      <a
        href={`https://s.taobao.com/search?q=${item.query}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </a>
      test2
      <span className="global-search-item-count">Test3 {item.count} asdfsd</span>
    </Option>
  );
}

class Complete extends Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div className="global-search-wrapper" style={{ width: '100%' }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%', marginLeft: '10px'}}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="Search Patient"
          optionLabelProp="text"
        >
          <Input
            suffix={(
              <Button className="search-btn" size="large" type="primary">
                <Icon type="search" />
              </Button>
            )}
          />
        </AutoComplete>
      </div>
    );
  }
}

export default Complete;