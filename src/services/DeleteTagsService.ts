import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";




export class DeleteTagService{
    async execute(id:string)
    {
        const tagRepository=getCustomRepository(TagsRepositories)

        const tag = await tagRepository.findOne(id)

        if(!tag)
            throw new Error("Tag Does not exists!")
        
        await tagRepository.delete(id)
            
    }
}