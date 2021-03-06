import {DefaultLayout} from 'components/Layout/Default/Layout';
import {AccountLoginSeo} from 'pages/customer/account/login/_seo.config';
import React, {ReactElement} from 'react';

const CustomerAccountLoginPage = () => {
	return (
		<>
			<h1>Hello world!</h1>
			<p>Welcome to the customer account login page!</p>
			<AccountLoginSeo />
		</>
	);
};

CustomerAccountLoginPage.getLayout = (page: ReactElement) => {
	return <DefaultLayout>{page}</DefaultLayout>;
};

export default CustomerAccountLoginPage;
