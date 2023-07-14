import CompanyCreateRequestList from './CompanyCreateRequestList'
import InstituteCreateRequestList from './InstituteCreateRequestList'

export default function SelectTable({ selected }: { selected: 'institutes' | 'companies' }) {
  // RANT -> ejemplo de componentes innecesarios
  // RANT -> punto más importante de todos: Complejidad innecesaria y optimización prematura
  const tables = {
    institutes: <InstituteCreateRequestList />,
    companies: <CompanyCreateRequestList />,
  }

  return tables[selected]
}
