/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { InfoCard, InfoCardVariants } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Switch,
  Tooltip,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { ComponentsGrid } from './ComponentsGrid';
import { EntityRelationAggregation } from '../types';

const useStyles = makeStyles(theme => ({
  card: {
    maxHeight: '100%',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  list: {
    [theme.breakpoints.down('xs')]: {
      padding: `0 0 12px`,
    },
  },
  listItemText: {
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  listItemSecondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      top: 'auto',
      right: 'auto',
      position: 'relative',
      transform: 'unset',
    },
  },
  grid: {
    overflowY: 'auto',
    marginTop: 0,
  },
}));

/** @public */
export const OwnershipCard = (props: {
  variant?: InfoCardVariants;
  entityFilterKind?: string[];
  hideRelationsToggle?: boolean;
  relationsType?: EntityRelationAggregation;
  entityLimit?: number;
}) => {
  const {
    variant,
    entityFilterKind,
    hideRelationsToggle,
    relationsType,
    entityLimit = 6,
  } = props;
  const relationsToggle =
    hideRelationsToggle === undefined ? false : hideRelationsToggle;
  const classes = useStyles();
  const { entity } = useEntity();

  const defaultRelationsType = entity.kind === 'User' ? 'aggregated' : 'direct';
  const [getRelationsType, setRelationsType] = useState(
    relationsType ?? defaultRelationsType,
  );

  useEffect(() => {
    if (!relationsType) {
      setRelationsType(defaultRelationsType);
    }
  }, [setRelationsType, defaultRelationsType, relationsType]);

  return (
    <InfoCard
      title="Ownership"
      variant={variant}
      className={classes.card}
      cardClassName={classes.cardContent}
    >
      {!relationsToggle && (
        <List dense>
          <ListItem className={classes.list}>
            <ListItemText className={classes.listItemText} />
            <ListItemSecondaryAction
              className={classes.listItemSecondaryAction}
            >
              Direct Relations
              <Tooltip
                placement="top"
                arrow
                title={`${
                  getRelationsType === 'direct' ? 'Direct' : 'Aggregated'
                } Relations`}
              >
                <Switch
                  color="primary"
                  checked={getRelationsType !== 'direct'}
                  onChange={() => {
                    const updatedRelationsType =
                      getRelationsType === 'direct' ? 'aggregated' : 'direct';
                    setRelationsType(updatedRelationsType);
                  }}
                  name="pin"
                  inputProps={{ 'aria-label': 'Ownership Type Switch' }}
                />
              </Tooltip>
              Aggregated Relations
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      )}
      <ComponentsGrid
        className={classes.grid}
        entity={entity}
        entityLimit={entityLimit}
        relationsType={getRelationsType}
        entityFilterKind={entityFilterKind}
      />
    </InfoCard>
  );
};
