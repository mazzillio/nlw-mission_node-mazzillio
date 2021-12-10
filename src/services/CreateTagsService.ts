import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"



class CreateTagsService{

    async execute(name:string){
        const tasgRepositories= getCustomRepository(TagsRepositories)

        if(!name){
            throw new Error("Incorrect name!");
        }
        const tagAlreadyExists = await tasgRepositories.findOne({name})
        if(tagAlreadyExists)
        {
            throw new Error("Tag already exists!");
        }
        const tag  = tasgRepositories.create({name})

        await tasgRepositories.save(tag)

        return tag
    }

}

export{CreateTagsService}