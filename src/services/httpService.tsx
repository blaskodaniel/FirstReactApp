import Post from '../interfaces/Post';

export default class HttpService{
    
    getPosts = (): Promise<Post[]> => {
        return new Promise((resolve,reject) => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data=>{
                resolve(data.json())
            }).catch((err)=>{
                reject(err);
            })
        });
    }

}