import CompanyCreateRequestList from './CompanyCreateRequestList'
import InstituteCreateRequestList from './InstituteCreateRequestList'

export default function SelectTable({ selected }: { selected: 'institutes' | 'companies' }) {
  const tables = {
    institutes: <InstituteCreateRequestList />,
    companies: <CompanyCreateRequestList />,
  }

  return tables[selected]
}
