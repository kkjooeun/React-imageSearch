import React from 'react';

export default class SearchBar extends React.Component {
	state = {
		query : "",
	}

	onInputChange = (e) => {
		this.setState({query:e.target.value});
	}

	render() {
		return (
			<div>
				<form className='ui form'>
					<label>검색어를 입력하세요.</label>
  				<input 
						type="text"
						value={this.state.query}
						onChange={this.onInputChange}
					/>
				</form>
			</div>
		)
	}
}