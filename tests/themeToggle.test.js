import { describe, it, expect } from 'vitest';
import { mount } from 'astro/test';
import ThemeToggle from '../src/components/ThemeToggle.astro';

describe('ThemeToggle', () => {
  it('toggles data-theme attribute when clicked', async () => {
    const {element} = await mount(ThemeToggle);
    const toggle = element.querySelector('.theme-toggle');
    const html = document.documentElement;
    const initial = html.getAttribute('data-theme');
    toggle.dispatchEvent(new Event('click'));
    expect(html.getAttribute('data-theme')).not.toBe(initial);
  });
});
