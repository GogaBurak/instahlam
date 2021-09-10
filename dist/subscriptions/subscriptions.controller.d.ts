import { SubscriptionsService } from './subscriptions.service';
export declare class SubscriptionsController {
    private subscriptionsService;
    constructor(subscriptionsService: SubscriptionsService);
    subscribe(req: any, id: any): Promise<void>;
    unsubscribe(req: any, id: any): Promise<void>;
}
