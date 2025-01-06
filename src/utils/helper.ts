import { FileReaderFunc, IThumb, UpdateThumbFunc, UploadServiceFunc } from '../@types';
/*
 * @description Function that asynchronously reads an image file and
 * returns a promise of IThumb.
 **/
export const readImageFiles: FileReaderFunc = async (thumb: IThumb) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        const _thumb = {
          ...thumb,
          url: reader.result as string,
        };
        resolve(_thumb);
      });
      reader.readAsDataURL(thumb.file as File);
    } catch {
      reject(null);
    }
  });
};

/*
 * @description Generator Function asynchronously reads multiple
 * files and yields each IThumb.
 **/
export async function* readFileAsync(thumbs: Array<IThumb>) {
  for (const file of thumbs) {
    yield await readImageFiles(file);
  }
}

/*
 * @description Generator Function asynchronously uploads
 * multiple files and yields each response.
 **/
export async function* uploadFileAsync<M>(thumbs: Array<IThumb>, uploadService: UploadServiceFunc<M>, updateThumb: UpdateThumbFunc) {
  for (const thumb of thumbs) {
    try {
      yield await uploadService(thumb, updateThumb);
    } catch (e) {
      yield e;
    }
  }
}
