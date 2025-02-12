import React from "react";
import Layout from "../components/Layout";
import Logo from "../components/icons/Logo";

export default function Home() {
  return (
    <Layout title="Início">
      <div className="flex flex-col items-center bg-white shadow-md rounded-lg py-5 px-5 mt-7">
        <h2 className="text-lg font-bold mb-4 w-full">Bem-vindo à plataforma webplat!</h2>
        <div className="text-gray-600 grid gap-3">
          <span>
            A webplat é uma plataforma que tem como objetivo fortalecer a inclusão digital de pessoas que historicamente estiveram distantes das evoluções computacionais, chamados de usuários emergentes, e enfrentam barreiras para acesso a sistemas de pagamentos instantâneos.
          </span>
        </div>
        <Logo className="w-full md:w-3/12" />
        <div className="text-gray-600 grid gap-3 w-full">
          <span>
            Para isso, a webplat tem como proposta:
          </span>
          <ul className="list-disc ml-6">
            <li><strong>Incluir:</strong> incluir os usuários emergentes aos sistemas interativos</li>
            <li><strong>Nortear:</strong> nortear os designers sobre as características de interação do usuário</li>
            <li><strong>Conectar:</strong> conectar os Sistemas de Pagamento Instantâneo como uma alternativa de gestão financeira aos usuários emergentes</li>
            <li><strong>Legitimar:</strong> legitimar os usuários emergentes como protagonistas dos serviços digitais e desenvolvimento sustentável</li>
          </ul>
          <span>Desse modo, nessa plataforma você interagirá com:</span>
          <ul className="list-disc ml-6">
            <li>
              <strong>Considerações de design e avaliação</strong> para Sistemas de Pagamento Instantâneo
            </li>
            <li>
              <strong>Personas</strong> que apresentam as características sociais, digitais e financeiras de usuários emergentes
            </li>
            <li>
              <strong>Perguntas e Respostas</strong> relacionadas às considerações de design e avaliação para usuários emergentes e sistemas de pagamento instantâneo
            </li>
            <li>
              <strong>Sobre</strong> com a apresentação da equipe de desenvolvimento e os documentos de origem dessa plataforma
            </li>
          </ul>
          <span>Desde já, agradecemos seu interesse em conhecer essa proposta de um ambiente digital mais inclusivo.</span>
        </div>
      </div>
    </Layout>
  );
}

