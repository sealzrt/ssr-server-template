const PREFIX = 'SSR Server Template / ';

/**
 * Returns page title with stated prefix.
 * @param postfix
 */
export function getPageTitle(postfix: string) {
  return `${PREFIX}${postfix}`;
}
