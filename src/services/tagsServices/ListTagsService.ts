class ListTagsService{
    constructor(private tagsRepository){}
    async execute()
    {        
        const tags= await this.tagsRepository.find()

        return (tags)
    }

}
export {ListTagsService}