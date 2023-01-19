import { client } from "../index.js";

export async function updatemoviebyID(id, data) {
    return await client
        .db("test")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export async function deletemovie(id) {
    return await client
        .db("test")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function createmovie(data) {
    return await client
        .db("test")
        .collection("movies")
        .insertMany(data);
}
export async function getbyID(id) {
    return await client.db("test").collection("movies").findOne({ id: id });
}
export async function getallmovies(request) {
    return await client
        .db("test")
        .collection("movies")
        .find(request.query).toArray();
}
