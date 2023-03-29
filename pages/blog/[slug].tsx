export default function BlogPost({
  html,
  slug,
}: {
  html: string;
  slug: string;
}) {
  return (
    <>
      <h1>{slug}</h1>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps(context: {
  params: { slug: string };
  locale: string;
}) {
  const { slug } = context.params;
  let html = "HTML English";

  switch (context.locale) {
    case "fr":
      html = "HTML Francais";
      break;
    default:
      break;
  }

  return {
    props: {
      slug,
      html,
    },
  };
}
