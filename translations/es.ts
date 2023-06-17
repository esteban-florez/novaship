type Routes = Record<string, string>

const routes: Routes = {
  home: 'inicio',
  offers: 'ofertas',
  projects: 'proyectos',
  chats: 'conversaciones',
}

interface RoutesProps {
  route: string
}

export default function translatedRoutes({ route }: RoutesProps): string {
  return routes[route]
}
