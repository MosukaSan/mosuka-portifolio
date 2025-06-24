import { useEffect, type JSX } from "react";
import subzeroImagem from '../assets/subzero-imagem.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import type { FadeAnimation } from "../interfaces/interfaces";

function Experience({ transition, toggleTransition, animDelay }: FadeAnimation): JSX.Element {

    useEffect(() => {
        toggleTransition(true);
    }, []);
        
    return (
        <main>
            <div className="h-full py-10 px-3 bg-background">
                <div className={`container mx-auto flex flex-col justify-between space-y-10 transition-opacity ${transition ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDuration: `${animDelay}ms` }}>
                    <section className="text-text-light flex flex-col space-y-4">
                        <h1 className="text-2xl text-orange-highlight font-bold">Adega e Gelo Subzero</h1>
                        <p className="text-justify leading-relaxed">
                            &emsp;&emsp;Fiz um site para a Adega Subzero usando <strong>React, JavaScript, NodeJS e Firebase</strong>. O site
                            tem com objetivo falar sobre o comércio e mostrar a informações básicas como
                            endereço e contato. A parte mais difícil desse projeto foi que, me foi pedido uma
                            forma de exibir os produtos da loja no site e que os donos consigam adicionar novos
                            produtos. Logo, tive que fazer um <strong>sistema de login</strong> para que só eles possam adicionar
                            produtos, uma <strong>interface amigável</strong> para a adição dos produtos e um <strong>CRUD</strong> simples para
                            <strong> criar, ler, editar e remover</strong> os produtos. Foi meu primeiro projeto para uma empresa, aprendi muito com ele e <strong>melhorei</strong>
                            em muitos quesitos como <strong>estruturação de projetos, código limpo, boas práticas e novas
                            funcionalidades das tecnologias</strong> que utilizei.
                        </p>
                        <a href="https://adega-subzero-website.vercel.app/" className="hover:text-text-light-hover"><FontAwesomeIcon icon={faLink}/> <span className="underline">adega-subzero-website.vercel.app</span></a>
                        <img src={subzeroImagem} alt="Subzero Imagem" className="h-80 w-auto object-contain"/>
                    </section>
                    <section className="text-text-light flex flex-col space-y-4">
                        <h1 className="text-2xl text-orange-highlight font-bold">Escola Estadual Professora Bernadete Aparecida Pereira Godoi (em andamento)</h1>
                        <p className="text-justify leading-relaxed">
                            &emsp;&emsp;Este projeto está em sua fase inicial. Estou utilizando <strong>React, Typescript, Tailwind e Python com Flask e Pandas</strong>. 
                            Consiste em uma <strong>base de dados</strong> com diversas informações pedagógicas dos alunos da escola, principalmente pendências em atividades digitais,
                            onde os pais podem <strong>fazer login</strong> na plataforma e <strong>visualizar esses dados</strong> referente a seu(s) filho(s).
                            Há um site onde a coordenadora pode fazer <strong>upload de arquivos excel</strong>, um de cada sala, com diversos alunos.
                            Esses arquivos são <strong>armazenados no servidor</strong>, em uma pasta correspondente a série. O servidor nada mais é do que uma <strong>API REST</strong> que
                            <strong> lê esses dados armazenados nos arquivos excel e retorna a informação desejada</strong>. Além disso a coordenadora
                            terá um <strong>login específico</strong> onde ela poderá ver uma <strong>lista com todos os arquivos de cada série em formato de card</strong>, fazer o upload dos arquivos obivamente,
                            mas além disso, ela também poderá <strong>baixá-los, editá-los e deletá-los</strong>. Essas informações são, então, <strong>exibidas para o responsável em 
                            gráficos</strong>. O login dos pais ainda não está definido, mais pretendo armazenar os dados de login em um <strong>banco de dados relacional</strong> e 
                            <strong> alimentá-lo com algum arquivo excel</strong> com os dados dos responsáveis.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Experience;