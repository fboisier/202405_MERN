const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({"mensage":"Ups... algo malo pasó."});
}

export {errorHandler}