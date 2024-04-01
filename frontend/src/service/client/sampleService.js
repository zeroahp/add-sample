import createApiClient from "../api.service";
import objectToFormData from "../../helper/toFormData"
class SampleService {
    constructor(baseUrl = "http://localhost:3001"){
        this.api = createApiClient(baseUrl);
    }

    // async postData(data){
    //     const config = {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         }
    //       };
    //     return (await this.api.post('/post', data, config));
    // }

    async postData(formData){
        const config = {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
        };
        //cua thang Quy
        return await this.api.post('/post', objectToFormData(formData) , config);
    }

    async getData(){
        return (await this.api.get('/')).data;
    }   
}

const sampleService = new SampleService();
export default sampleService;