import Head from 'next/head';
import Layout from '../../components/Layout';
import FinancialConsulting from '../../components/Services/FinancialConsulting';

const financial_consulting = () => {
    return (
        <>
            <Head>
                <title>Financial Consulting</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Layout>
                <div>
                    <FinancialConsulting />
                </div>
            </Layout>
            
        </>
    );
};

export default financial_consulting;