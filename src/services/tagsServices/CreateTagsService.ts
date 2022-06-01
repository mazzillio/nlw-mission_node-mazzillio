class CreateTagsService{
    constructor(private tagsRepository){}
    async execute(name:string){
        if(!name){
            throw new Error("Incorrect name!");
        }
        const tagAlreadyExists = await this.tagsRepository.findOne({name})
        if(tagAlreadyExists)
        {
            throw new Error("Tag already exists!");
        }
        const tag  = this.tagsRepository.create({name})

        await this.tagsRepository.save(tag)

        return tag
    }

}

export{CreateTagsService}