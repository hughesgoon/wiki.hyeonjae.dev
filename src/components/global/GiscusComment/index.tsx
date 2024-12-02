import React from 'react';
import Giscus, { GiscusProps } from '@giscus/react';
import { useThemeConfig, useColorMode, ThemeConfig } from '@docusaurus/theme-common';

import './comments.css';

interface CustomThemeConfig extends ThemeConfig {
  giscus: GiscusProps;
}

function GiscusComment() {
  const { giscus } = useThemeConfig() as CustomThemeConfig;
  const { colorMode } = useColorMode();

  return (
    <Giscus
      id="comment"
      {...giscus}
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="ko"
      loading="lazy"
    />
  );
}

export default GiscusComment;
