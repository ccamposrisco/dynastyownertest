import axios, {AxiosInstance} from "Axios";
import dotenv from "dotenv";

class Github {
  private apiURI: string;
  private api: AxiosInstance;

  constructor() {
    dotenv.config();
    this.apiURI = process.env.GITHUB_URI as string;
    this.api = axios.create({baseURL: this.apiURI});
  }

  public getCommits(parameters: any) {
    return new Promise(async (resolve, reject) => {
      try {
        let branch = "";
        if (parameters.branch) branch = "/" + parameters.branch;
        const result = await this.api.get("/commits" + branch);
        resolve(result.data);
      } catch (error) {
        console.log("Github.getCommits.error", error);
        reject(error);
      }
    });
  }
}

export default new Github();
