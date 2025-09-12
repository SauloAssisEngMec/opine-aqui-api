import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-errors'

const makeSut = (): SignUpController => {
  return new SignUpController()
}
describe('SignUp Controller', () => {
  it('should return 400 if no name is provided', async () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        email: 'email.test@gmail.com',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  it('should return 400 if no email is provided', async () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        name: 'name',
        password: 'password',
        passwordConfirmation: 'password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  it('should return 400 if no password is provided', async () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        name: 'name',
        email: 'email.test@gmail.com',
        passwordConfirmation: 'password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  it('should return 400 if no passwordConfirmation is provided', async () => {
    const sut = makeSut()

    const httpRequest = {
      body: {
        name: 'name',
        email: 'email.test@gmail.com',
        password: 'password'
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(
      new MissingParamError('passwordConfirmation')
    )
  })
})
