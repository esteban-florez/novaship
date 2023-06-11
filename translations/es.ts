type Routes = Record<string, string>

const routes: Routes = {
  home: "inicio",
  jobs: "trabajos",
  projects: "proyectos",
  chats: "conversaciones",
}

interface RoutesProps {
  route: string
}

export default function TranslatedRoutes({ route }: RoutesProps): string {
  return routes[route]
}
