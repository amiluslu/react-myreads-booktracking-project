import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

function Book(props) {
	const { book, onChangeShelf } = props;

	const thumbnail =
		book.imageLinks === undefined
			? 'https://dummyimage.com/128x193/332100/ffffff&text=No+Image'
			: book.imageLinks.thumbnail;

	const authors = book.authors === undefined ? 'Unknown Author' : book.authors.join(', ');

	return (
		<li>
			<div className="book">
				<div className="book-top">
					<div
						className="book-cover"
						style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}
					/>
					<Option book={book} onChangeShelf={onChangeShelf} />
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{authors}</div>
			</div>
		</li>
	);
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onChangeShelf: PropTypes.func.isRequired
};

export default Book;