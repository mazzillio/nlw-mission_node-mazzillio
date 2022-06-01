export class DeleteTagService{
    constructor(private tagsRepository){}
    async execute(id:string)
    {
        const tag = await this.tagsRepository.findOne(id)

        if(!tag)
            throw new Error("Tag Does not exists!")
        
        await this.tagsRepository.delete(id)
            
    }
}