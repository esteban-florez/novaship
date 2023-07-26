// lucia.d.ts
/// <reference types="lucia" />

declare namespace Lucia {
	type Auth = import('./auth/lucia').Auth
	type UserAttributes = Pick<SessionUser, 'name' | 'surname' | 'email'> 
}
