import { type NextRequest, NextResponse } from 'next/server'
import { type Model } from './lib/data-fetching/log'
import { url } from './lib/utils/url'
import { removeCUIDFromString } from './lib/utils/code'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const paths = [
    // ADMIN
    {
      path: '/home/admin/verifications',
      model: 'Verify',
    },
    {
      path: '/home/admin/stats',
      model: 'Stats',
    },
    {
      path: '/home/admin/backups',
      model: 'Backup',
    },
    {
      path: '/home/admin/logs',
      model: 'Log',
    },
    {
      path: '/home',
      model: 'Home',
    },
    // PROFILES
    {
      path: '/home/profile',
      model: 'Profile',
    },
    {
      path: '/home/profile/update',
      model: 'Profile',
    },
    {
      path: '/home/institute/clsgckkws00dbv9ncrobglkkr',
      model: 'InstituteProfile',
    },
    {
      path: '/home/person/clsgckkws00dbv9ncrobglkkr',
      model: 'PersonProfile',
    },
    {
      path: '/home/company/clsgckkws00dbv9ncrobglkkr',
      model: 'CompanyProfile',
    },
    // INTERNSHIPS
    {
      path: '/home/internships/vacants/clsgckkws00dbv9ncrobglkkr/update',
      model: 'Vacant',
    },
    {
      path: '/home/internships',
      model: 'Internship',
    },
    {
      path: '/home/internships/create',
      model: 'Internship',
    },
    {
      path: '/home/internships/select',
      model: 'Internship',
    },
    {
      path: '/home/persons/clsgckkws00dbv9ncrobglkkr/internships',
      model: 'Internship',
    },
    {
      path: '/home/internships/clsgckkws00dbv9ncrobglkkr',
      model: 'Internship',
    },
    {
      path: '/home/institutes/clsgckkws00dbv9ncrobglkkr/internships',
      model: 'Internship',
    },
    {
      path: '/home/companies/clsgckkws00dbv9ncrobglkkr/internships',
      model: 'Internship',
    },
    {
      path: '/home/internships/clsgckkws00dbv9ncrobglkkr/apply',
      model: 'Internship',
    },
    {
      path: '/home/internships/clsgckkws00dbv9ncrobglkkr/update',
      model: 'Internship',
    },
    {
      path: '/home/internships/clsgckkws00dbv9ncrobglkkr/progress',
      model: 'Progress',
    },
    {
      path: '/home/companies/clsgckkws00dbv9ncrobglkkr/vacants',
      model: 'Vacant',
    },
    {
      path: '/home/companies/clsgckkws00dbv9ncrobglkkr/vacants/clsgckkws00dbv9ncrobglkkr',
      model: 'Vacant',
    },
    {
      path: '/home/internships/clsgckkws00dbv9ncrobglkkr/apply/clsgckkws00dbv9ncrobglkkr',
      model: 'Vacant',
    },
    {
      path: '/home/internships/vacants/create',
      model: 'Vacant',
    },
    {
      path: '/home/internships/recruitments',
      model: 'Recruitment',
    },
    {
      path: '/home/internships/recruit',
      model: 'Recruitment',
    },
    {
      path: '/home/internships/recruit/clsgckkws00dbv9ncrobglkkr',
      model: 'Recruitment',
    },
    // Teams
    {
      path: '/home/teams',
      model: 'Team',
    },
    {
      path: '/home/teams/create',
      model: 'Team',
    },
    {
      path: '/home/teams/clsgckkws00dbv9ncrobglkkr/update',
      model: 'Team',
    },
    {
      path: '/home/teams/clsgckkws00dbv9ncrobglkkr',
      model: 'Team',
    },
    {
      path: '/home/teams/clsgckkws00dbv9ncrobglkkr/memberships',
      model: 'Team',
    },
    {
      path: '/home/teams/clsgckkws00dbv9ncrobglkkr/projects',
      model: 'Team',
    },
    // PROJECTS
    {
      path: '/home/projects',
      model: 'Project',
    },
    {
      path: '/home/projects/create',
      model: 'Project',
    },
    {
      path: '/home/projects/clsgckkws00dbv9ncrobglkkr',
      model: 'Project',
    },
    {
      path: '/home/projects/clsgckkws00dbv9ncrobglkkr/tasks',
      model: 'Project',
    },
    {
      path: '/home/projects/clsgckkws00dbv9ncrobglkkr/update',
      model: 'Project',
    },
    // INDIVIDUALS
    {
      path: '/home/invitations',
      model: 'Invitation',
    },
    {
      path: '/home/notifications',
      model: 'Notification',
    },
    // OFFERS
    {
      path: '/home/offers',
      model: 'Offer',
    },
    {
      path: '/home/offers/create',
      model: 'Offer',
    },
    {
      path: '/home/offers/clsgckkws00dbv9ncrobglkkr',
      model: 'Offer',
    },
    {
      path: '/home/offers/clsgckkws00dbv9ncrobglkkr/update',
      model: 'Offer',
    },
  ] satisfies Array<{
    path: string
    model: Model
  }>

  const currentPath = paths.find(p => removeCUIDFromString(pathname) === removeCUIDFromString(p.path))
  if (currentPath == null) {
    return NextResponse.next()
  }

  const data = {
    model: currentPath.model,
    session: request.cookies.get('auth_session')?.value ?? '',
  }

  console.log(currentPath)
  await fetch(url('/api/log'), {
    body: JSON.stringify(data),
    method: 'POST',
  })

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
