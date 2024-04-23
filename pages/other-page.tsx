import Head from "next/head";
import Link from 'next/link';
import {GetServerSideProps, InferGetServerSidePropsType} from 'next';

export default function OtherPage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <main>
        <Link href="/">/base</Link>
        <div>
          <p>{JSON.stringify(props)}</p>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = (async () => {
  return { props: { hello: 'server side props of OtherPage' } };
}) satisfies GetServerSideProps

