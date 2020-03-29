import { Component, OnInit } from "@angular/core";
import { Coin } from "../models/Coin";
import { CoinService } from "../services/coin.service";

@Component({
  selector: "app-coins",
  templateUrl: "./coins.component.html",
  styleUrls: ["./coins.component.css"]
})
export class CoinsComponent implements OnInit {
  coins: Coin[];

  constructor(private coinService: CoinService) {}

  ngOnInit() {
    this.coinService.getCoins().subscribe(coins => {
      this.coins = coins;
    });
  }
}
