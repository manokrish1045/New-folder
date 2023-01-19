import express from "express";
import { getallmovies, getbyID, createmovie, deletemovie, updatemoviebyID } from "../service/movies.service.js";
const router = express.Router();


router.get("/", async function (request, response) {
    if (request.query.rating) {
        request.query.rating = + request.query.rating
    }

    console.log(request.query)
    const movies = await getallmovies(request)
    // console.log(movies)
    response.send(movies);
});

// router.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
router.get("/:id", async function (request, response) {
    // console.log(request.params)
    const { id } = request.params;
    console.log(id)
    // const movie = movies.filter((mv) => mv.id == id)s
    // const movie = movies.find((mv) => mv.id == id)
    const movie = await getbyID(id)
    console.log(movie)

    movie ? response.send(movie) : response.status(404).send({ message: "movie not found" })
});

// router.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
// middleware - request.json conerts body to js 
router.post("/", async function (request, response) {
    const data = request.body
    console.log(data)
    const result = await createmovie(data)


    response.send(result);
});
// router.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));

router.delete("/:id", async function (request, response) {
    const { id } = request.params;
    console.log(id);

    const result = await deletemovie(id)
    console.log(result)
    result.deletedCount > 0
    result
        ? response.send({ message: "movie not found" }) : response.status(404).send({ message: "movie not found" })



});
router.put("/:id", async function (request, response) {
    // console.log(request.params)
    const { id } = request.params;
    const data = request.body;

    console.log(id)
    // db.movies.updateOne({id : id},{$set : data})

    // const movie = movies.filter((mv) => mv.id == id)s
    // const movie = movies.find((mv) => mv.id == id)
    const movie = await updatemoviebyID(id, data)
    console.log(movie)

    movie ? response.send(movie) : response.status(404).send({ message: "movie not found" })
    response.send(result)


});
export default router;


