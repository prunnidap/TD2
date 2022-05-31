export class Personnel {
  constructor (
    public id: number,
    public nom: string,
    public prenom:string,
    public email: string,
    public telephone: string,
    public photo: string,
    public bureau: string,
    public service: string,
    public twitter: string)
  {
    this.id=id
    this.prenom=prenom
    this.nom=nom
    this.email=email
    this.telephone=telephone
    this.photo=photo
    this.bureau=bureau
    this.service=service
    this.twitter=twitter
  }

}
