import { AbstractControl } from '@angular/forms';

export { checkExist };
function checkExist(controls: AbstractControl) {
  let getlocalStorage = localStorage.getItem('pNumber');
  if (controls.value === getlocalStorage) {
    return { checkExist: true };
  }
  return null;
}
