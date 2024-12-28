# React Use thumbnail generator
This is a simple React hook that allows you to generate a thumbnail from `File` object. The thumbnail is generated using the data url.

Using this hook is very simple. You just need to pass the list of `File` and the uploadService function to generate thumbnails with upload pre
ogres.

Hook will return the list of `IThumb` objects. Each object will contain the thumbnail data url, the original file, upload progress, and the upload status.

```typescript
export interface IThumb {
    url: string;
    id: string;
    status: UploadStatus;
    file: File | null;
    uploadProgress: number;
    responseUrl?: string;
    signal?: AbortController;
}
```
You can use the `IThumb` object to display the thumbnail, upload progress, and the upload status. You can customize the UI based on the upload status.

![img.png](./assets/img.png)

## Quick Start
<hr/>

Installation

```bash
npm install use-thumbnail-generator --save
# or with yarn
yarn add use-thumbnail-generator
# or with bun
bun add use-thumbnail-generator
```
### Example 

With [Dropzone](https://react-dropzone.js.org/),  [number-flow](https://number-flow.barvian.me/) and [AutoAnimate](https://auto-animate.formkit.com/)





