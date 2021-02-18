/* eslint-disable no-unused-vars */
import * as React from 'react';

import { Layout } from '../components/layout';

import SEO from '../components/seo';
import { TextReplacerComplex } from '../components/text-replacer/TextReplacerComplex';

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<TextReplacerComplex />
	</Layout>
);

export default IndexPage;
