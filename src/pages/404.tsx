import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1>Parece que esta página não existe</h1>
      <Link href="/">
        <a>Retornar à página inicial</a>
      </Link>
    </div>
  );
};

export default NotFoundPage;
