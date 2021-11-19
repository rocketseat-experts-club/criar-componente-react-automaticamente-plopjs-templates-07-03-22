import {AppLayout} from 'components/Layout/AppLayout';
import {PaymentMethodsSeo} from 'pages/customer/payment-methods/_seo.config';
import React, {ReactElement} from 'react';

const PaymentMethodsPage = () => {
	return (
		<>
			<p>Welcome to the payment methods page!</p>
			<PaymentMethodsSeo />
		</>
	);
};

PaymentMethodsPage.getLayout = (page: ReactElement) => {
	return <AppLayout>{page}</AppLayout>;
};

export default PaymentMethodsPage;