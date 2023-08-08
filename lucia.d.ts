// lucia.d.ts
/// <reference types="lucia" />

declare namespace Lucia {
	type Auth = import('./auth/lucia').Auth
	interface UserAttributes {
    // UserType enum redeclarado porque si no, no funciona el tipado
    type: 'PERSON' | 'COMPANY' | 'INSTITUTE'
  }
}
