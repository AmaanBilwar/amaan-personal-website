import { renderHook, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../../contexts/LanguageContext';
import { ReactNode } from 'react';

// This is a placeholder test. 
// You will need to install vitest/jest and @testing-library/react to run this.

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

describe('LanguageContext', () => {
  it('should default to English', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    expect(result.current.language).toBe('en');
  });

  it('should change language', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper });
    
    act(() => {
      result.current.setLanguage('zh');
    });

    expect(result.current.language).toBe('zh');
  });
});
