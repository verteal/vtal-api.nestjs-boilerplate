import slugify from 'slugify';

import { ValueObject } from './value-object.entity';

export class Slug extends ValueObject {
  public slug: string;

  constructor(slug: string) {
    super();
    this.slug = slug;
  }

  /**
   * Receives a string and normalizes it as a slug
   * Example: **verteal is amazing** => `verteal-is-amazing`
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = slugify(text, {
      replacement: '-',
      remove: undefined,
      lower: true,
      strict: false,
      trim: true,
    });

    return new Slug(slugText);
  }
}
