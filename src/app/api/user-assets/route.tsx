import { MainClient as SPOT } from "binance";

export async function GET(request: Request) {
	const client = new SPOT({
		api_key: process.env.BINANCE_API_KEY,
		api_secret: process.env.BINANCE_API_SECRET,
	});
	
	try {
		const response = await client.getAccountInformation();
		let balances = response.balances.filter(({ free, locked }) => {
			return parseFloat(free as string) > 0 || parseFloat(locked as string) > 0
		})
		return Response.json({ balances });
		
	} catch (error) {
		console.error(error);
		return Response.json({ error });
	}
	

	
}
