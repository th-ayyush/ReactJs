import React,{useEffect,useState} from "react";
import { Container,Postcard } from "../conponents";
import service from "../appwrite/config";
export default function AllPosts(){
    const [posts,setPosts]=useState([])
    useEffect(()=>{},[])
    service.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post)=>(
                        <div key={post.$id} className="p-2 w-1">
                            <Postcard post={post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}