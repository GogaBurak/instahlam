import { FeedsService } from './feeds.service';
export declare class FeedsController {
    private feedsService;
    constructor(feedsService: FeedsService);
    getByUserId(req: any): Promise<import("../db/entities/user.entity").UserEntity[]>;
}
