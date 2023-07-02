import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment.prod';

const URL = environment.urlimg;
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string | undefined, size: string = "w500"): string | null {
    if (!img)
      return "https://react.semantic-ui.com/images/wireframe/image.png";
    const imgURL = `${URL}/${size}/${img}`
    //const imgURL = URL + size + img;
    return imgURL;
  }

}
