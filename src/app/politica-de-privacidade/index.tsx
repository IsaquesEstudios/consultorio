import Link from "next/link";

export default function Page() {
  return (
    <>
      <head>
        <title>Politica de privacidade</title>
        <meta
          name="description"
          content="Politica de privacidade do site"
        />
      </head>

      <main className="max-w-[90%] m-auto pt-20 pb-20">
        <h1 className="text-3xl font-bold mb-4"> Política de Privacidade</h1>

        <p>
          A sua privacidade é importante para nós. Esta Política de Privacidade
          descreve como coletamos, usamos, divulgamos e protegemos as
          informações pessoais que você nos fornece ao usar o nosso site. Por
          favor, leia atentamente esta política antes de fornecer qualquer
          informação pessoal. Ao utilizar o nosso site, você está concordando
          com as práticas descritas nesta Política de Privacidade.
        </p>

        <h2 className=" mb-4 mt-10">Informações Coletadas</h2>
        <ul>
          <li>
            1.1. Informações de Identificação Pessoal: Podemos coletar
            informações de identificação pessoal, como nome, endereço de e-mail,
            número de telefone e outras informações que você fornece
            voluntariamente ao preencher formulários em nosso site, fazer uma
            compra ou entrar em contato conosco.
          </li>

          <li>
            1.2. Informações de Navegação: Podemos coletar informações não
            identificáveis pessoalmente, como endereço IP, tipo de navegador,
            provedor de serviços de Internet, páginas de referência/saída, tipo
            de plataforma, carimbos de data/hora e dados de fluxo de cliques.
            Essas informações são coletadas automaticamente quando você interage
            com o nosso site.
          </li>
        </ul>

        <h2 className=" mb-4 mt-10">Uso das Informações</h2>

        <ul>
          <li>
            2.1. Utilização Interna: As informações pessoais que coletamos são
            usadas para fornecer, operar e melhorar o nosso site, responder a
            suas solicitações, enviar informações adicionais relacionadas aos
            nossos produtos ou serviços, processar suas transações e fornecer
            suporte ao cliente.
          </li>

          <li>
            2.2. Comunicações de Marketing: Podemos usar o seu endereço de
            e-mail para enviar informações sobre nossos produtos, serviços e
            promoções que possam ser do seu interesse. Você pode optar por não
            receber essas comunicações a qualquer momento, seguindo as
            instruções de cancelamento de inscrição fornecidas em cada e-mail.
          </li>

          <li>
            2.3. Uso de Cookies: Utilizamos cookies e tecnologias semelhantes
            para melhorar a sua experiência em nosso site, personalizar
            conteúdo, fornecer recursos de mídia social e analisar o tráfego.
            Você pode controlar o uso de cookies nas configurações do seu
            navegador.
          </li>
        </ul>

        <h2 className=" mb-4 mt-10">Compartilhamento de Informações</h2>

        <ul>
          <li>
            3.1. Terceiros Prestadores de Serviço: Podemos compartilhar suas
            informações com terceiros que prestam serviços em nosso nome, como
            processamento de pagamentos, análise de dados, hospedagem do site e
            atendimento ao cliente. Esses terceiros têm acesso às suas
            informações pessoais apenas na medida necessária para desempenhar
            suas funções e não estão autorizados a divulgá-las ou utilizá-las
            para qualquer outra finalidade.
          </li>

          <li>
            3.2. Requisitos Legais: Podemos divulgar suas informações pessoais
            se exigido por lei, ordem judicial ou autoridade governamental.
          </li>
        </ul>

        <h2 className=" mb-4 mt-10">Proteção de Informações</h2>

        <ul>
          <li>
            Implementamos medidas de segurança razoáveis para proteger as
            informações pessoais que coletamos e mantemos. No entanto, nenhuma
            transmissão de dados pela Internet ou sistema de armazenamento
            eletrônico é totalmente seguro. Portanto, não podemos garantir a
            segurança absoluta das informações pessoais.
          </li>
        </ul>

        <h2 className=" mb-4 mt-10">Links para Sites de Terceiros</h2>

        <ul>
          <li>
            Nosso site pode conter links para sites de terceiros. Não somos
            responsáveis pelas práticas de privacidade ou conteúdo desses sites.
            Recomendamos que você revise as políticas de privacidade desses
            sites antes de fornecer qualquer informação pessoal.
          </li>
        </ul>

        <h2 className=" mb-4 mt-10">Consentimento e Alterações</h2>

        <ul>
          <li>
            Ao usar nosso site, você está consentindo com a nossa Política de
            Privacidade. Reservamo-nos o direito de fazer alterações a esta
            política a qualquer momento, mediante publicação da versão
            atualizada em nosso site. É sua responsabilidade revisar
            periodicamente esta Política de Privacidade.
          </li>
        </ul>

        <h2 className=" mb-4 mt-10">Contato</h2>

        <ul>
          <li>
            Se você tiver dúvidas sobre esta Política de Privacidade ou quiser
            solicitar o acesso, correção ou exclusão de suas informações
            pessoais, entre em contato conosco através das informações
            fornecidas em nosso site.
          </li>
        </ul>

        <p className="mt-10">
          Esta Política de Privacidade foi atualizada em <b>08/06/2023</b>
        </p>
      </main>

    </>
  );
}
