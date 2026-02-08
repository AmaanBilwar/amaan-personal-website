import { renderHook } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import { ReactNode } from 'react';
import { describe, it, expect } from 'vitest';

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('LanguageContext', () => {
  it('should default to English', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('en');
  });

  it('should return English translations', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.t('nav.home')).toBe('Home');
  });
});
