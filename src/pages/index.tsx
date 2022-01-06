import * as React from 'react';

import { Layout } from '../components/Layout';

import SEO from '../components/Seo';
import { TextReplacerComplex } from '../components/text-replacer/TextReplacerComplex';

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<TextReplacerComplex />
	</Layout>
);

export default IndexPage;
