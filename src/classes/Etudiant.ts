export class Etudiant {
  constructor (
    public id: number,
    public nom: string,
    public prenom:string,
    public email: string,
    public telephone: string,
    public photo: string,
    public lienLinkedIn: string,
    public lienAlumni: string)
  {
    this.id=id
    this.prenom=prenom
    this.nom=nom
    this.email=email
    this.telephone=telephone
    this.photo=photo
    this.lienLinkedIn=lienLinkedIn
    this.lienAlumni=lienAlumni
  }

}
