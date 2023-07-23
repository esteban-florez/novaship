// lucia.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
	type Auth = import('./auth/lucia').Auth
	interface UserAttributes {
    name: string
    surname: string
    email: string        
    image?: string | undefined
  }
}
