import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {
  return (
      <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <RepositoryItem 
              name="app-ideas"
              linkToRepo="https://github.com/celinatakeda/github-api-interface"
              fullName="celinatakeda/api-interface"
            />
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
          <RepositoryItem 
              name="celinatakeda"
              linkToRepo="https://github.com/celinatakeda/React"
              fullName="celinatakeda/react"
            />
          </S.WrapperTabPanel>
      </S.WrapperTabs>

  );
  
};

export default Repositories;