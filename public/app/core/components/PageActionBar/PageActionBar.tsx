import React, { PureComponent } from 'react';
import { FilterInput } from '../FilterInput/FilterInput';
import { LinkButton } from '@grafana/ui';

export interface Props {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  linkButton?: { href: string; title: string; disabled?: boolean };
  target?: string;
  placeholder?: string;
}

export default class PageActionBar extends PureComponent<Props> {
  render() {
    const { searchQuery, linkButton, setSearchQuery, target, placeholder = 'Search by name or type' } = this.props;
    const linkProps = { href: linkButton?.href, disabled: linkButton?.disabled };

    if (target) {
      (linkProps as any).target = target;
    }

    return (
      <div className="page-action-bar">
        <div className="gf-form gf-form--grow">
          <FilterInput value={searchQuery} onChange={setSearchQuery} placeholder={placeholder} />
        </div>
        {linkButton && <LinkButton {...linkProps}>{linkButton.title}</LinkButton>}
      </div>
    );
  }
}
