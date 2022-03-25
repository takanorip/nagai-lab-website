import { useMemo } from 'react';
import { loadDefaultJapaneseParser } from 'budoux';

const parser = loadDefaultJapaneseParser();

export const useBudouX = (text: string) => {
  return useMemo(() => {
    return (
      <span
        style={{
          wordBreak: 'keep-all',
          overflowWrap: 'break-word',
        }}
      >
        {parser.parse(text).map((t, i) => (
          <>
            {i !== 0 && <wbr />}
            {t}
          </>
        ))}
      </span>
    );
  }, [text]);
};
