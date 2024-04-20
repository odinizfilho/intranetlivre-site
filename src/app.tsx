import { component$ } from '@builder.io/qwik';

// Importar o logotipo da Intranetlivre
import intranetlivreLogo from './assets/intranetlivre.svg';
// Importar o arquivo CSS do Tailwind
import './app.css';

// Definir o componente App
export const App = component$(() => {
  return (
    <>
    <div class="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <a href="#" target="_blank">
        {/* Exibir o logotipo da Intranetlivre */}
        <img src={intranetlivreLogo} class="w-32" alt="Intranetlivre logo" />
      </a>
        <div class="mt-8">
            <h2 class="text-xl font-semibold">Bem-vindo ao Intralivre</h2>
            <p class="text-center">Um projeto de intranet de código aberto desenvolvido em Laravel. Intralivre oferece uma plataforma robusta para a comunicação e colaboração interna na sua empresa, permitindo que os colaboradores acessem informações essenciais, gerenciem documentos, agendem eventos, reservem salas de reunião e muito mais.</p>
        </div>

        <div class="mt-8">
            <h2 class="text-xl font-semibold">Principais Recursos</h2>
            <ul class="list-disc list-inside mt-4">
                <li>Quadro de Aniversariantes: Veja os aniversariantes do dia, da semana e do mês.</li>
                <li>Atalhos para Sistemas: Acesse facilmente os sistemas e recursos internos da sua empresa.</li>
                <li>Gestão de Documentos: Armazene e gerencie documentos importantes, como instruções normativas.</li>
                <li>Agenda de Eventos: Mantenha-se atualizado sobre eventos internos por dia, semana e mês.</li>
                <li>Reserva de Salas de Reunião: Reserve salas de reunião de forma conveniente.</li>
                <li>Quadro de Colaboradores: Pesquise informações de contato dos colaboradores por ramal e e-mail.</li>
                <li>Abertura de Chamados (Tickets): Relate problemas e solicite suporte de forma eficaz.</li>
            </ul>
        </div>

        <div class="mt-8">
            <h2 class="text-xl font-semibold">💻 Construído com</h2>
            <p class="mt-4">Tecnologias utilizadas no projeto:</p>
            <ul class="list-disc list-inside mt-2">
                <li>PHP 8.2</li>
                <li>Laravel 10.22</li>
            </ul>
        </div>

        <div class="mt-8">
            <h2 class="text-xl font-semibold">🛡️ Licença</h2>
            <p class="mt-4">Este projeto está licenciado sob <a href="https://creativecommons.org/licenses/by-nc/2.0/br/" class="text-blue-500">CC BY-NC 2.0 BR</a>.</p>
        </div>

    </div>
    </>
  );
});
