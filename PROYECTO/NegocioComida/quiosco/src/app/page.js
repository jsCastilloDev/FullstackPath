
import { PrismaClient } from "@prisma/client";

export default function Home({ categorias }) {
  console.log(categorias);
  return <h1>next + prisma </h1>;
}

async function getServerSideProps() {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();
  return {
    props: { categorias },
  };
}


