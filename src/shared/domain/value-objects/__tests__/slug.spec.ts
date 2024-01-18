import { Slug } from '../slug.entity';

describe('Slug Entity', () => {
  it('should be able to create a new slug from text', () => {
    const slug = Slug.createFromText('verteal is amazing');

    expect(slug.toString()).toBe('verteal-is-amazing');
  });

  it('transforms text with uppercase and mixed case letters into a lowercase slug', () => {
    const crazySlug = Slug.createFromText('LOREM Ipsum DoLõR sìt AmEt');

    expect(crazySlug.toString()).toBe('lorem-ipsum-dolor-sit-amet');
  });
});
