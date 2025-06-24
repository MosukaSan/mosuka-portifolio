import { useEffect, useState } from "react";
import { listRepos } from "../api/listRepos";

function useListRepos(): [boolean, { [key: string]: string }[]] {
    const [repos, setRepos] = useState<{ [key: string]: string }[]>([]);
    const [repoLoaded, toggleRepoLoaded] = useState(false);

    useEffect(() => {
        const fetchRepos = async () => {
            const repoList = await listRepos()
            toggleRepoLoaded(true);
            setRepos(repoList);
        };

        fetchRepos();
    }, []);

    return [repoLoaded, repos]
}

export { useListRepos };