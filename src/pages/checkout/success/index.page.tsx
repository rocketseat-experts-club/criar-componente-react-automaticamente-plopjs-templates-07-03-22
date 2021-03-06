import {CheckoutLayout} from 'components/Layout/Checkout/Layout';
import {CheckoutSuccessSeo} from 'pages/checkout/success/_seo.config';
import React, {ReactElement} from 'react';

const CheckoutSuccessPage = () => {
	return (
		<>
			<h1>Hello world!</h1>
			<p>Welcome to the checkout success page!</p>
			<CheckoutSuccessSeo />
		</>
	);
};

CheckoutSuccessPage.getLayout = (page: ReactElement) => {
	return <CheckoutLayout>{page}</CheckoutLayout>;
};

export default CheckoutSuccessPage;
