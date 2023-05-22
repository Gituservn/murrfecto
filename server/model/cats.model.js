import Joi from "joi";

const catsModel = Joi.object({
    image: Joi.any(),
    name: Joi.string(),
    description: Joi.string(),
    chipped: Joi.string(),
    age: Joi.string(),
    gender: Joi.string()
});

export {catsModel};