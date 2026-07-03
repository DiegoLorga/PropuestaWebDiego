export interface MenuItem {
  nombre: string;
  ruta?: string; // Es opcional porque los niveles padre no siempre navegan
  icono?: string;
  expandido?: boolean; // Para controlar si el acordeón está abierto
  submenus?: MenuItem[]; // ¡Aquí está la magia de los 4 niveles!
}