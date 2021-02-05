import { server } from '../../../config';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Meta from '../../../components/Meta';

const dream = ({
  dream: { dreamTitle, dreamContent, dreamDate, dreamExcerpt },
}) => {
  return (
    <>
      <Meta title={dreamTitle} description={dreamExcerpt} />
      <h1>{dreamTitle}</h1>
      <small>{dreamDate}</small>
      <p>{dreamContent}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/dreams/${context.params.id}`);

  const dream = await res.json();

  //this passes the current data to the component to be used as props
  return {
    props: {
      dream,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/dreams`);

  const dreams = await res.json();

  const ids = dreams.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default dream;
