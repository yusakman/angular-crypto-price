import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Coin } from "../models/Coin";

@Injectable({
  providedIn: "root"
})
export class CoinService {
  coinUrl: string =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  constructor(private http: HttpClient) {}

  getCoins() {
    return this.http.get<Coin[]>(this.coinUrl);
  }
}
