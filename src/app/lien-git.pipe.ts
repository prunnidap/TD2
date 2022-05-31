import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lienGit'
})
export class LienGitPipe implements PipeTransform {

  transform(nom: string, prenom: string): string {
    return 'github.com/'+nom+'.'+prenom
  }

}
