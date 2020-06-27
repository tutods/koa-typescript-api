import { Context } from 'koa';

/**
 * Generic GenericController
 *
 * This controller is used on most common queries, like:
 * getAll; getOneById; getOneAndDelete; getOneAndUpdate;
 *
 */
export default class GenericController {
	/**
	 * Model used on queries
	 */
	private model: any;

	/**
	 * Constructor Method
	 *
	 * @param model model used on queries
	 */
	constructor(model: any) {
		this.model = model;
	}

	/**
	 * Method to get all results on database
	 */
	public getAll(ctx: Context, next: () => Promise<any>) {
		this.model.find({});

		ctx.status = 200;
		ctx.body = { data: 'ok!' };
		next();
	}
}
