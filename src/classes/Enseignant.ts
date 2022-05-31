export class Enseignant {
  constructor (
    public id: number,
    public nom: string,
    public prenom:string,
    public email: string,
    public telephone: string,
    public photo: string,
    public bureau: string,
    public laboratoire: string,
    public lienResearchGate: string,
    public likes: number)
  {
    this.id=id
    this.prenom=prenom
    this.nom=nom
    this.email=email
    this.telephone=telephone
    this.photo=photo
    this.bureau=bureau
    this.laboratoire=laboratoire
    this.lienResearchGate=lienResearchGate
    this.likes=likes
  }

}
