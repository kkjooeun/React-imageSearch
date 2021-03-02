import React from 'react';

export default class SearchBar extends React.Component {
	render() {
		return (
			<div>
				<form className='ui form'>
					<label>검색어를 입력하세요.</label>
  				<input type="text"/>
				</form>
			</div>
		)
	}
}