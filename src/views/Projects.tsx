import { useEffect, type JSX } from "react";
import Spinner from "../components/Spinner";
import { useListRepos } from "../hooks/useListRepos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { FadeAnimation } from "../interfaces/interfaces";

function Projects({ transition, toggleTransition, animDelay }: FadeAnimation): JSX.Element {
    const [repoLoaded, repos] = useListRepos();

    useEffect(() => {
        toggleTransition(true);
    }, []);

    return (
        <main className="flex-1">
            <section className="h-full flex items-center justify-center">
                <div className={`transition-opacity ${transition ?  'opacity-100' :  'opacity-0'}`}
                style={{ transitionDuration: `${animDelay}ms` }}>
                    {
                        repoLoaded
                            ? 
                            repos.length > 0
                                ? 
                                (
                                    <div className="flex flex-col space-y-4 h-100 overflow-y-auto">
                                        {
                                            repos.map((repo, index) => (
                                                <div key={index} className="border-2 p-3 border-orange-highlight rounded flex flex-col space-y-2">
                                                    <h2 className="text-orange-highlight font-bold text-2xl">{repo.name}</h2>
                                                    <p className="text-text-light">{repo.description}</p>
                                                    <a href={repo.html_url} className="text-text-light text-xl hover:text-text-light-hover"><FontAwesomeIcon icon={faGithub}/> <span className="underline">Repositório</span></a>    
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                                :
                                (
                                    <div className="text-text-light">
                                        Ocorreu um erro ao carregar os repositórios.
                                    </div>
                                )
                            : 
                            (
                                <Spinner />
                            )
                    }
                </div>
            </section>
        </main>
    );  
}

export default Projects;

//quero me matar por causa deste código ass: Vini