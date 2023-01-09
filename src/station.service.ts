import axios from "axios"

export default class StationService {

	public async printStationList():Promise<void> {
		const res1 = await this.getStationsByPrice(1300)
		const res2 = await this.getStationsByPrice(1400)
		console.log(res1.concat(res2))
	}

	private async getStationsByPrice(price: number):Promise<string[]> {
		try {
			return await axios.get<[]>('https://test.oilnow.co.kr/gstations?price=' + price).then(res=>res.data)
		} catch {
			return []
		}
	}

}