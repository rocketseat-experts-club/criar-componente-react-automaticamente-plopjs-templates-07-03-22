import {DefaultLayout} from 'components/Layout/Default/Layout';
import {EmailPreferencesSeo} from 'pages/customer/email-preferences/_seo.config';
import React, {ReactElement} from 'react';

const EmailPreferencesPage = () => {
	return (
		<>
			<h1>Hello world!</h1>
			<p>Welcome to the email preferences page!</p>
			<EmailPreferencesSeo />
		</>
	);
};

EmailPreferencesPage.getLayout = (page: ReactElement) => {
	return <DefaultLayout>{page}</DefaultLayout>;
};

export default EmailPreferencesPage;
