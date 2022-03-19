import { Component } from '@angular/core';
interface menuItem {
  title: string;
  icon: string;
  route?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  menuItems: menuItem[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
    },
    {
      title: 'Fixtures',
      icon: 'calendar',
    },
    {
      title: 'Noticias',
      icon: 'read',
    },
    {
      title: 'Jugadores',
      icon: 'user',
    },
    {
      title: 'Tabla',
      icon: 'table',
    },
    {
      title: 'Torneos',
      icon: 'trophy',
    },
  ];
}
