import { css } from '@emotion/css';
import { DataSourcePluginOptionsEditorProps, GrafanaTheme, updateDatasourcePluginJsonDataOption } from '@grafana/data';
import { InlineField, InlineFieldRow, InlineSwitch, useStyles } from '@grafana/ui';
import React from 'react';
import { TempoJsonData } from './datasource';

interface Props extends DataSourcePluginOptionsEditorProps<TempoJsonData> {}

export function SearchSettings({ options, onOptionsChange }: Props) {
  const styles = useStyles(getStyles);

  return (
    <div className={css({ width: '100%' })}>
      <h3 className="page-heading">Search</h3>
      <InlineFieldRow className={styles.row}>
        <InlineField tooltip="Removes the Search tab from the Tempo query editor." label="Hide search" labelWidth={26}>
          <InlineSwitch
            value={options.jsonData.search?.hide}
            onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
              updateDatasourcePluginJsonDataOption({ onOptionsChange, options }, 'search', {
                ...options.jsonData.search,
                hide: event.currentTarget.checked,
              })
            }
          />
        </InlineField>
      </InlineFieldRow>
    </div>
  );
}

const getStyles = (theme: GrafanaTheme) => ({
  row: css`
    label: row;
    align-items: baseline;
  `,
});
