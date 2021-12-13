import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";


@EntityRepository(Compliment)
class ComplimentsRepositoris extends Repository<Compliment>{

    
}

export {ComplimentsRepositoris}