import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu:Menu[] = [];

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuService.getMenu().subscribe( data => {
     this.menu = data;
     console.log(typeof(this.menu));
     this.menu = Object.values(this.menu);
     console.log(this.menu[1]);
    } )
  }

}
