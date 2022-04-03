import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import IStylesProps from 'interface/styles';

function ThemeTokens({ className }: IStylesProps) {
  const theme = useTheme();

  return (
    <div className={className}>
      <pre>{JSON.stringify(theme, null, 2)}</pre>
    </div>
  );
}

export default styled(ThemeTokens)`
  pre {
    font-size: 14px;
  }
`;
