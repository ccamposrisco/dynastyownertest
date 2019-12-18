import githubConn from "../connectivity/github";

const getCommits = async (parameters: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const commits = await githubConn.getCommits(parameters);
      resolve(commits);
    } catch (error) {
      console.log("github.error", error);
      reject(error);
    }
  });
};

export {getCommits};
