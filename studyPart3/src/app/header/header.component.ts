import { Component, OnInit } from '@angular/core';
import { DataStoregeService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStoregeService) {}
  ngOnInit() {}
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }
  onFetchData() {
    this.dataStorageService.getRecipe();
  }
}
