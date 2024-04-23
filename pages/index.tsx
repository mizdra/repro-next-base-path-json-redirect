import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <main>
        <Link href="/other-page">/base/other-page</Link>
        <div>
          <p>{JSON.stringify(props)}</p>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = (async () => {
  return { props: { hello: 'server side props of Home' } };
}) satisfies GetServerSideProps
