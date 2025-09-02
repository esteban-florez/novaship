import { test, expect } from '@playwright/test'
/**
 * La empresa accede al landing page
 */
test('Acceder al landing', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Novaship, tú plataforma de trabajo')
})

/**
 * La empresa accede al inicio de sesión
 */
test('Acceder al inicio de sesión', async ({ page }) => {
  await page.goto('/')
  await page.getByText('Iniciar sesión').click()
  await expect(page).toHaveTitle('Iniciar Sesión | Novaship')
})

/**
 * La empresa inicia sesión
 */
test('Iniciar sesión', async ({ page }) => {
  await page.goto('/auth/login')
  await expect(page).toHaveTitle('Iniciar Sesión | Novaship')
  await page.locator('input[name="email"]').fill('c1@company.dev')
  await page.locator('input[name="password"]').fill('Password_3')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/home')
  await expect(page).toHaveTitle('Inicio | Novaship')
})

/**
 * La empresa inicia sesión y accede al formulario de registrar ofertas
 */
test('Acceder a crear oferta', async ({ page }) => {
  await page.goto('/auth/login')
  await expect(page).toHaveTitle('Iniciar Sesión | Novaship')
  await page.locator('input[name="email"]').fill('c1@company.dev')
  await page.locator('input[name="password"]').fill('Password_3')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/home')
  await expect(page).toHaveTitle('Inicio | Novaship')
  await page.click('ul.menu > li:nth-child(3) > div')
  await page.click('ul.menu > li:nth-child(3) > ul > li:nth-child(2) > a')
  await expect(page).toHaveURL('/home/offers/create')
  await expect(page).toHaveTitle('Registrar oferta | Novaship')
})

/**
 * La empresa inicia sesión, accede al formulario de registrar ofertas y llena los campos
 * despues de validado es redirigido a la oferta registrada
 */
test('Crear oferta', async ({ page }) => {
  await page.goto('/auth/login')
  await expect(page).toHaveTitle('Iniciar Sesión | Novaship')
  await page.locator('input[name="email"]').fill('c1@company.dev')
  await page.locator('input[name="password"]').fill('Password_3')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/home')
  await expect(page).toHaveTitle('Inicio | Novaship')
  await page.click('ul.menu > li:nth-child(3) > div')
  await page.click('ul.menu > li:nth-child(3) > ul > li:nth-child(2) > a')
  await expect(page).toHaveURL('/home/offers/create')
  await expect(page).toHaveTitle('Registrar oferta | Novaship')
  // Titulo
  await page.locator('input[name="title"]').fill('Desarrollador web front-end')
  // Descripcion
  await page.locator('textarea[name="description"]').fill('Se busca desarrollador con conocimiento en javascript')
  // Modalidad
  await page.locator('select[name="mode"]').selectOption('REMOTE')
  // Ubicacion
  await page.locator('select[name="locationId"]').selectOption({ label: 'Amazonas, Atures (Puerto Ayacucho)' })
  // Puesto de trabajo
  await page.locator('select[name="jobId"]').selectOption({ label: 'Desarrollador de software' })
  // Categorías
  await page.click('form > div:nth-child(2) > div > div > input')
  await page.click('form > div:nth-child(2) > div > div > ul > button:nth-child(18)')
  // Habilidades
  await page.click('form > div:nth-child(2) > div > div:nth-child(6) > input')
  await page.click('form > div:nth-child(2) > div > div:nth-child(6) > ul > button:nth-child(36)')
  // Horario
  await page.locator('select[name="schedule"]').selectOption('FULLTIME')
  // Horas
  await page.locator('input[name="hours"]').fill('40')
  // Salario
  await page.locator('input[name="salary"]').fill('25')
  // Límite de postulantes
  await page.locator('input[name="limit"]').fill('10')
  // Fecha de expiracion
  await page.locator('select[name="expiresAt"]').selectOption('DAYS31')
  // Enviar formulario
  await page.click('form > div:last-child > button')
  // Redirección a la página
  await expect(page).toHaveURL(/home\/offers\/\w+\?alert=offer_created/)
  await expect(page).toHaveTitle('Ver oferta | Novaship')
  await page.click('ul.menu > li:nth-child(3) > ul > li:nth-child(3) > a')
  await expect(page).toHaveURL('/home/offers?filtered=personal')
  await expect(page).toHaveTitle('Ofertas | Novaship')
})

/**
 * La empresa inicia sesión, accede al formulario de registrar ofertas y llena los campos
 * despues de validado es redirigido a la oferta registrada, luego accede a "mis ofertas"
 * y se muestra en el listado
 */
test('Buscar oferta', async ({ page }) => {
  await page.goto('/auth/login')
  await expect(page).toHaveTitle('Iniciar Sesión | Novaship')
  await page.locator('input[name="email"]').fill('c1@company.dev')
  await page.locator('input[name="password"]').fill('Password_3')
  await page.click('button[type="submit"]')
  await expect(page).toHaveURL('/home')
  await expect(page).toHaveTitle('Inicio | Novaship')
  await page.click('ul.menu > li:nth-child(3) > div')
  await page.click('ul.menu > li:nth-child(3) > ul > li:nth-child(2) > a')
  await expect(page).toHaveURL('/home/offers/create')
  await expect(page).toHaveTitle('Registrar oferta | Novaship')
  // Titulo
  await page.locator('input[name="title"]').fill('Desarrollador web front-end')
  // Descripcion
  await page.locator('textarea[name="description"]').fill('Se busca desarrollador con conocimiento en javascript')
  // Modalidad
  await page.locator('select[name="mode"]').selectOption('REMOTE')
  // Ubicacion
  await page.locator('select[name="locationId"]').selectOption({ label: 'Amazonas, Atures (Puerto Ayacucho)' })
  // Puesto de trabajo
  await page.locator('select[name="jobId"]').selectOption({ label: 'Desarrollador de software' })
  // Categorías
  await page.click('form > div:nth-child(2) > div > div > input')
  await page.click('form > div:nth-child(2) > div > div > ul > button:nth-child(18)')
  // Habilidades
  await page.click('form > div:nth-child(2) > div > div:nth-child(6) > input')
  await page.click('form > div:nth-child(2) > div > div:nth-child(6) > ul > button:nth-child(36)')
  // Horario
  await page.locator('select[name="schedule"]').selectOption('FULLTIME')
  // Horas
  await page.locator('input[name="hours"]').fill('40')
  // Salario
  await page.locator('input[name="salary"]').fill('25')
  // Límite de postulantes
  await page.locator('input[name="limit"]').fill('10')
  // Fecha de expiracion
  await page.locator('select[name="expiresAt"]').selectOption('DAYS31')
  // Enviar formulario
  await page.click('form > div:last-child > button')
  // Redirección a la página
  await expect(page).toHaveURL(/home\/offers\/\w+\?alert=offer_created/)
  await expect(page).toHaveTitle('Ver oferta | Novaship')
  await page.click('ul.menu > li:nth-child(3) > ul > li:nth-child(3) > a')
  await expect(page).toHaveURL('/home/offers?filtered=personal')
  await expect(page).toHaveTitle('Ofertas | Novaship')
  await page.waitForSelector('h3:has-text("Desarrollador web front-end")')
})
