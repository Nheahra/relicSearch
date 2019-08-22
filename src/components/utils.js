import _filter from 'lodash/filter'

export const getSearchedRelics = ({ relics, keyword }) => (
  _filter(relics, ({ relic }) => (
    relic.toLowerCase().indexOf(keyword.toLowerCase()) > -1
  ))
)
