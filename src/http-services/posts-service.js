import http from "./common-services";
import { apiEndpoint } from "../config.json";

function postUrl(id){
  return `${apiEndpoint}/${id}`
}

export function fetchposts() {
   return http.get(`${apiEndpoint}`);
 }

 export function savePost(post) {
   if(post.id){
    const body = {...post};
    delete body._id;
    return http.put(postUrl(post.id), body);
   }else{
    return http.post(`${apiEndpoint}`, post);
   }
 }

 export function fetchPostById(id) {
   return http.get(postUrl(id));
 }

 export function deletepost(id) {
   return http.delete(postUrl(id));
 }
