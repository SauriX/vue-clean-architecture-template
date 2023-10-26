class Geo {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public lat: string,
    public lng: string
  ) {
  }
}

class Address {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public street: string,
    public suite: string,
    public city: string,
    public zipcode: string,
    public geo: Geo
  ) {
  }
}

class Company {
// eslint-disable-next-line no-useless-constructor
  constructor(
    public name: string,
    public catchPhrase: string,
    public bs: string
  ) {
  }
}

export class User {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public id: number,
    public name: string,
    public username: string,
    public email: string,
    public phone: string,
    public website: string,
    public address?: Address,
    public company?: Company
  ) {}
}
