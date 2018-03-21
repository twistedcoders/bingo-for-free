import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: [ './app-root.component.scss' ],
})
export class AppRootComponent extends AppComponent implements OnInit {
  public letters: String[] = ['B', 'I', 'N', 'G', 'O'];
  public cards: BingoCard[] = [];
  public daubs: BingoDaub[] = [
    { color: '#69D2E7' },
    { color: 'blue' },
    { color: 'green' },
    { color: 'red' },
  ];
  public selectedDaub: BingoDaub = this.daubs[0];
  public balls: number[] = [];
  public pickedBalls: number[] = [];
  public points = 1;

  public ngOnInit(): void {
    this.addCard();
    this.reloadBalls();
    this.pickBall();
  }

  public selectDaub(daub: BingoDaub): void {
    if (this.selectedDaub !== daub && this.points >= 10) {
      this.selectedDaub = daub;
      this.points = this.points - 10;
    }
  }

  public addCard(card: BingoCard = { rows: [] }): void {
    if (this.cards.length < 8) {
      this.reloadCard(card);

      this.cards.push(card);
    }
  }

  public removeCard(card: BingoCard): void {
    if (this.cards.length > 1) {
      this.cards.splice(this.cards.indexOf(card), 1);
    }
  }

  public restart(): void {
    this.reloadCards();
    this.reloadBalls();
    this.pickedBalls = [];
  }

  public bingo(card: BingoCard): void {
    if (this.isWinningCard(card)) {
      card.won = true;
    }

    if (this.hasAllCardsWon()) {
      this.reloadCards();
      this.reloadBalls();
      this.pickedBalls = [];
    }

    this.points++;
  }

  public reloadCards(): void {
    for (const c of this.cards) {
      this.reloadCard(c);
    }
  }

  public hasAllCardsWon(): boolean {
    for (const card of this.cards) {
      if (!this.isWinningCard(card)) {
        return false;
      }
    }
    return true;
  }

  public isWinningCard(card: BingoCard): boolean {
    return card.won ||
      this.hasWinningRow(card) ||
      this.hasWinningColumn(card) ||
      this.hasWinningDiagonal(card);
  }

  public hasWinningDiagonal(card: BingoCard): boolean {
    return this.isWinningCell(card.rows[1].cells[0]) &&
    this.isWinningCell(card.rows[2].cells[1]) &&
    this.isWinningCell(card.rows[3].cells[2]) &&
    this.isWinningCell(card.rows[4].cells[3]) &&
    this.isWinningCell(card.rows[5].cells[4]) ||
    this.isWinningCell(card.rows[1].cells[4]) &&
    this.isWinningCell(card.rows[2].cells[3]) &&
    this.isWinningCell(card.rows[3].cells[2]) &&
    this.isWinningCell(card.rows[4].cells[1]) &&
    this.isWinningCell(card.rows[5].cells[0]);
  }

  public hasWinningRow(card: BingoCard): boolean {
    for (let r = 1; r < card.rows.length; r++) {
      if (this.isWinningRow(card.rows[r])) {
        return true;
      }
    }

    return false;
  }

  public hasWinningColumn(card: BingoCard): boolean {
    for (let l = 0; l < this.letters.length; l++) {
      if (this.isWinningColumn(card, l)) {
        return true;
      }
    }

    return false;
  }

  public isWinningColumn(card: BingoCard, column: number): boolean {
    for (let r = 1; r < card.rows.length; r++) {
      if (!this.isWinningCell(card.rows[r].cells[column])) {
        return false;
      }
    }
    return true;
  }

  public isWinningRow(row: BingoRow): boolean {
    for (let c = 0; c < row.cells.length; c++) {
      if (!this.isWinningCell(row.cells[c])) {
        return false;
      }
    }

    return true;
  }

  public isWinningCell(cell: BingoCell): boolean {
    const idx = this.pickedBalls.indexOf(Number(cell.text))

    return cell.won || idx > -1 && idx < 5;
  }

  public daubCell(row: BingoRow, cell: BingoCell): void {
    if (this.isWinningCell(cell)) {
      cell.won = true;
      cell.daub = this.selectedDaub;
    }
  }

  public reloadBalls(): void {
    this.balls = [];

    for (let n = 1; n < 76; n++) {
      this.balls.push(n);
    }
  }

  public pickBall(): void {
    this.pickedBalls.unshift(
      this.balls.splice(Math.round(Math.random() * (this.balls.length - 1)), 1)[0]
    );

    setTimeout(() => {
      this.pickBall()
    }, ( 3 + this.cards.length ) * 1000);
  }

  public reloadCard(card: BingoCard): void {
    const numbers: number[][] = [];

    // generate list of possible numbers
    for (let l = 0; l < this.letters.length; l++) {
      numbers[l] = [];

      for (let n = 0; n < 15; n++) {
        numbers[l][n] = (l + 1) * 15 - 14 + n;
      }
    }

    // create empty card
    card.rows = [];

    // add top row with letters
    card.rows.push({
      cells: this.letters.map<BingoCell>((letter) => {
        return {
          text: letter,
        }
      })
    });

    // add 5 rows of random numbers
    for (let i = 0; i < 5; i++) {
      card.rows.push({
        cells: this.letters.map<BingoCell>((letter) => {
          const n = numbers[this.letters.indexOf(letter)];
          return {
            text: String(n.splice(Math.round(Math.random() * (n.length - 1)), 1))
          }
        })
      });
    }

    // switch middle/center cell for FREEE
    card.rows[3].cells[2] = {
      text: 'FREE',
      won: true,
      daub: this.selectedDaub,
    };

    card.won = false;
  }
}

export interface BingoCard {
  rows: BingoRow[];
  won?: boolean;
}

export interface BingoRow {
  cells: BingoCell[];
}

export interface BingoCell {
  text: String;
  won?: boolean;
  daub?: BingoDaub;
}

export interface BingoDaub {
  color: String;
}
