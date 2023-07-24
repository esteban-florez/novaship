// lucia.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
	type Auth = import('./auth/lucia').Auth
	interface UserAttributes {
    email: string        
  }
}
