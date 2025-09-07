import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  it('should return 400 if no name is provided', async () => {
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        name: 'name',
        email: 'email.test@gmail.com',
        password: 'password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
