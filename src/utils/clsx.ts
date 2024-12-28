export function clsx(...args: Array<string | undefined | null | false>): string {
  let i = 0,
    tmp: string | false | null | undefined = '',
    str = '';
  const len = args.length;
  for (; i < len; i++) {
    if ((tmp = args[i])) {
      if (typeof tmp === 'string') {
        str += (str && ' ') + tmp;
      }
    }
  }

  return str;
}

export default clsx;
