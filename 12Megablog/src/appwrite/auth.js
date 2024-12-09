import conf from "../comf/comf";

import {Client,Account,ID} from "appwrite";

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.account =new Account(this.client);
    }
    async createAccount({email,password,name}){
        try{
            const userAccount= await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                return userAccount;
            }else{
                return 
            }
        }catch(error){
            throw error;
        }
    }
    async login({email,password}){
        try{
            return await this.account.createEmailPasswordSession(email,password);
        }catch(error){
            throw error;
        }
    }
    async getCurrentUSer(){
        try{
            return await this.account.get();
        }
        catch(error){
            console.log("appwrite service :: getCurrentUser::error",error);
        }

        return null;
    }
    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            console.log("appwrite service :: logout::error",error);
        }
    }
}

const authService= new AuthService();
export default authService;