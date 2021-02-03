/* eslint-disable no-unused-vars */
import * as React from 'react';

import { Layout } from '../components/layout';
import { TextReplacer } from '../components/text-replacer/TextReplacer';
import SEO from '../components/seo';

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<TextReplacer />
	</Layout>
);

export default IndexPage;
