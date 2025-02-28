import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <main>
        <a href="/base/other-page">/base/other-page</a>
        <div>
          <p>pageProps: {JSON.stringify(props)}</p>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = (async () => {
  return { props: { hello: 'server side props of Home' } };
}) satisfies GetServerSideProps
