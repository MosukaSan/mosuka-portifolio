import axios from "axios";

async function listRepos(): Promise<{ [key: string]: string }[]> {
    try {
        const response = await axios.get('https://api.github.com/users/MosukaSan/repos');
        const data: { [key: string]: any }[] = response.data;
        const repoData: { [key: string]: string }[] = [];

        data.forEach((repo) => {
            if (repo.name != 'MosukaSan') {
                const { name, description, html_url } = repo;
                const newData = { name, description, html_url };
                repoData.push(newData);
            }
        });

        return repoData;
    } catch (err) {
        console.error('[ERROR]: ', err);
        return [];
    }
}

export { listRepos };