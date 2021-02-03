/* eslint-disable no-unused-vars */
import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

interface HeaderProps {
	siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
	<header className="header bg-main-primary flex justify-center">
		<div className="max-w-screen-xl p-4 m-0">
			<h1 className="text-center text-lg lg:text-2xl m-0">
				<Link to="/" className="text-white font-bold no-underline">
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
