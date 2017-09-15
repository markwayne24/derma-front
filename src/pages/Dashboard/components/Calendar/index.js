import React, { Component } from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import './style.css';

function getListData(value) {
	let listData;
	switch (value.date()) {
	  case 8:
		listData = [
		  { type: 'warning', content: 'This is warning event.' },
		  { type: 'normal', content: 'This is usual event.' },
		]; break;
	  case 10:
		listData = [
		  { type: 'warning', content: 'This is warning event.' },
		  { type: 'normal', content: 'This is usual event.' },
		  { type: 'error', content: 'This is error event.' },
		]; break;
	  case 15:
		listData = [
		  { type: 'warning', content: 'This is warning event' },
		  { type: 'normal', content: 'This is very long usual event。。....' },
		  { type: 'error', content: 'This is error event 1.' },
		  { type: 'error', content: 'This is error event 2.' },
		  { type: 'error', content: 'This is error event 3.' },
		  { type: 'error', content: 'This is error event 4.' },
		]; break;
	  default:
	}
	return listData || [];
}
  
function dateCellRender(value) {
	const listData = getListData(value);
	return (
		<ul className="events">
		{
			listData.map(item => (
			<li key={item.content}>
				<span className={`event-${item.type}`}>●</span>
				{item.content}
			</li>
			))
		}
		</ul>
	);
}

function getMonthData(value) {
	if (value.month() === 8) {
		return 1394;
	}
}

function monthCellRender(value) {
	const num = getMonthData(value);
	return num ? <div className="notes-month">
		<section>{num}</section>
		<span>Backlog number</span>
	</div> : null;
}

class SchedCalendar extends Component{
	state = {
		value: moment(),
		selectedValue: moment(),
	}
	onSelect = (value) => {
		this.setState({
			value,
			selectedValue: value,
		});
	}
	onPanelChange = (value) => {
		this.setState({ value });
	}
	render(){
		const { value, selectedValue } = this.state;
		return(
			<div style={{height:'400px', width:'100%'}}>
				<Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
				<Calendar 
					dateCellRender={dateCellRender} 
					monthCellRender={monthCellRender} 
					value={value} 
					onSelect={this.onSelect} 
					onPanelChange={this.onPanelChange} />
			</div>
		);
	}
}

export default SchedCalendar;
